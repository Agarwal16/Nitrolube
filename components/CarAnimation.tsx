export default function CarAnimation() {
  return (
    <section className="relative overflow-hidden py-8" style={{ background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }} aria-hidden="true">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="relative z-20 text-center mb-4">
        <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em]" style={{ color: 'var(--text-muted)' }}>
          Built for every road. Every machine. Every condition.
        </p>
      </div>

      <div className="car-scene mx-auto max-w-5xl">
        <div className="roadside roadside-a">
          <div className="tree" />
          <div className="house" />
          <div className="pump" />
          <div className="tree" />
        </div>
        <div className="roadside roadside-b">
          <div className="house" />
          <div className="tree" />
          <div className="pump" />
          <div className="tree" />
        </div>
        <div className="truck-shadow" />
        <div className="vehicle">
          <div className="vehicle-box">
            <div className="vehicle-brand">Nitro<span>Lube</span></div>
          </div>
          <div className="vehicle-cab">
            <div className="vehicle-window" />
            <div className="vehicle-grill" />
          </div>
          <div className="vehicle-light" />
          <div className="vehicle-wheel wheel-rear" />
          <div className="vehicle-wheel wheel-front" />
        </div>
        <div className="road-glow" />
        <div className="road" />
      </div>

      <div className="relative z-20 text-center mt-4">
        <p className="text-[10px] font-semibold tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
          ISO 9001:2015 Certified &nbsp;·&nbsp; Lab Tested Every Batch &nbsp;·&nbsp; 50+ Distributors Pan India
        </p>
      </div>
    </section>
  )
}
