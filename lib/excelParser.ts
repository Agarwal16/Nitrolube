import * as XLSX from 'xlsx';
import fs from 'fs';
import path from 'path';

export interface Product {
  id: string;
  name: string;
  description: string;
  category?: string;
  mrp?: number;
  image?: string;
  specifications?: string[];
}

export function parseExcelFile(): Product[] {
  const filePath = path.join(process.cwd(), 'Nitro_Lube_Item_MRP_List.xlsx');
  
  if (!fs.existsSync(filePath)) {
    console.warn('Excel file not found, using sample products');
    return getSampleProducts();
  }

  try {
    const workbook = XLSX.readFile(filePath);
    const products: Product[] = [];
    const productImages = [
      '/product1.jpg',
      '/product2.jpg',
      '/unnamed.jpg',
      '/image.png',
      '/ChatGPT Image Nov 29, 2025, 03_40_55 PM.png',
    ];

    // Parse all sheets
    workbook.SheetNames.forEach((sheetName, sheetIndex) => {
      const worksheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 }) as any[][];

      // Skip header row
      for (let i = 1; i < data.length; i++) {
        const row = data[i];
        if (!row || row.length === 0) continue;

        // Try to extract product information
        // Adjust column indices based on your Excel structure
        const name = row[0]?.toString().trim() || `Product ${products.length + 1}`;
        const description = row[1]?.toString().trim() || 'Premium lubricant for optimal performance';
        const category = row[2]?.toString().trim() || sheetName;
        const mrp = row[3] ? parseFloat(row[3].toString()) : undefined;

        if (name && name !== 'Product Name' && name !== 'Name') {
          products.push({
            id: `product-${sheetIndex}-${i}`,
            name,
            description,
            category,
            mrp,
            image: productImages[products.length % productImages.length],
            specifications: [
              category || 'Premium Quality',
              mrp ? `MRP: ₹${mrp}` : 'Contact for pricing',
            ],
          });
        }
      }
    });

    return products.length > 0 ? products : getSampleProducts();
  } catch (error) {
    console.error('Error parsing Excel file:', error);
    return getSampleProducts();
  }
}

function getSampleProducts(): Product[] {
  return [
    {
      id: '1',
      name: 'NITRO FLOW 0W-20',
      description: 'Max efficiency, extreme cold protection. Full synthetic engine oil designed for modern vehicles.',
      category: 'Engine Oil',
      image: '/product1.jpg',
      specifications: ['Full Synthetic', '0W-20 Grade', '1L Bottle', 'Cold Protection'],
    },
    {
      id: '2',
      name: 'NITRO POWER 10W-40',
      description: 'Heavy-duty, high-temp performance. Advanced formulation for maximum protection under extreme conditions.',
      category: 'Engine Oil',
      image: '/product2.jpg',
      specifications: ['High Performance', '10W-40 Grade', 'Multi-Grade', 'Extended Protection'],
    },
    {
      id: '3',
      name: 'NITRO GEAR 75W-90',
      description: 'Smooth shifting, ultimate gear protection. Professional-grade lubricant for transmission systems.',
      category: 'Gear Oil',
      image: '/unnamed.jpg',
      specifications: ['Gear Oil', '75W-90 Grade', 'Heavy-Duty', 'Professional Quality'],
    },
    {
      id: '4',
      name: 'Advanced Synthetic Blend',
      description: 'Premium synthetic blend offering excellent protection and performance. Suitable for a wide range of applications.',
      category: 'Engine Oil',
      image: '/image.png',
      specifications: ['Synthetic Blend', 'Multi-Purpose', 'Enhanced Protection', 'Versatile Use'],
    },
    {
      id: '5',
      name: 'Specialty Engine Oil',
      description: 'Specially formulated engine oil for optimal performance. Engineered to meet the highest industry standards.',
      category: 'Engine Oil',
      image: '/ChatGPT Image Nov 29, 2025, 03_40_55 PM.png',
      specifications: ['Specialty Formula', 'Premium Grade', 'Optimal Performance', 'Industry Standard'],
    },
  ];
}








