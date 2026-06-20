'use client'

import { useState, useEffect } from 'react'

interface TransparentProductImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
}

export default function TransparentProductImage({ src, alt, className, ...props }: TransparentProductImageProps) {
  const [processedSrc, setProcessedSrc] = useState<string>(src)

  useEffect(() => {
    const shouldProcess = 
      (src.includes('Oil') || 
       src.includes('oil') || 
       src.includes('grease') || 
       src.includes('coolant') || 
       src.includes('_3d') || 
       src.includes('black_bg') || 
       src.includes('containers')) &&
      !src.includes('logo') &&
      !src.includes('Why') &&
      !src.includes('choose') &&
      !src.includes('doodle')

    if (!shouldProcess) {
      setProcessedSrc(src)
      return
    }

    const img = new window.Image()
    img.src = src
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      const canvas = document.createElement('canvas')
      const width = img.naturalWidth
      const height = img.naturalHeight
      canvas.width = width
      canvas.height = height

      const ctx = canvas.getContext('2d')
      if (!ctx) return

      ctx.drawImage(img, 0, 0)
      const imageData = ctx.getImageData(0, 0, width, height)
      const data = imageData.data

      // Check corner pixel alpha. If it is already transparent, skip keying.
      const edgeAlpha = data[3]
      if (edgeAlpha < 30) {
        setProcessedSrc(src)
        return
      }

      // Read start color of background at (0,0)
      const targetR = data[0]
      const targetG = data[1]
      const targetB = data[2]

      // Distance threshold for background matching
      const threshold = 38
      const colorDistance = (r: number, g: number, b: number) => {
        return Math.sqrt((r - targetR) ** 2 + (g - targetG) ** 2 + (b - targetB) ** 2)
      }

      const visited = new Uint8Array(width * height)
      const queue: number[] = []

      const pushPixel = (x: number, y: number) => {
        const idx = y * width + x
        if (visited[idx]) return
        visited[idx] = 1

        const rIdx = idx * 4
        const r = data[rIdx]
        const g = data[rIdx + 1]
        const b = data[rIdx + 2]
        const a = data[rIdx + 3]

        // Add to queue if it matches the background color within threshold and is opaque
        if (a > 10 && colorDistance(r, g, b) < threshold) {
          queue.push(idx)
        }
      }

      // Initialize the queue with boundary edges
      for (let x = 0; x < width; x++) {
        pushPixel(x, 0)
        pushPixel(x, height - 1)
      }
      for (let y = 0; y < height; y++) {
        pushPixel(0, y)
        pushPixel(width - 1, y)
      }

      let qHead = 0
      while (qHead < queue.length) {
        const idx = queue[qHead++]
        const x = idx % width
        const y = Math.floor(idx / width)

        const rIdx = idx * 4
        data[rIdx + 3] = 0 // Key out completely

        // Add 4-directional adjacent neighbors
        if (x > 0) pushPixel(x - 1, y)
        if (x < width - 1) pushPixel(x + 1, y)
        if (y > 0) pushPixel(x, y - 1)
        if (y < height - 1) pushPixel(x, y + 1)
      }

      ctx.putImageData(imageData, 0, 0)
      setProcessedSrc(canvas.toDataURL('image/png'))
    }
  }, [src])

  return (
    <img
      src={processedSrc}
      alt={alt}
      className={className}
      {...props}
    />
  )
}
