import { Link } from 'react-router-dom'

function Framework() {
  return (
    <div className="grid-bg min-h-screen px-8 pt-32 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">The Framework</h1>
      
      <div className="text-text-muted mb-12 space-y-6 max-w-3xl">
        <p>
          The Framework details the structural mechanics of the machine-native web. It defines the operational vocabulary and the technical scaffolding required for Augmented General Intelligence (AuGI) to function reliably outside of isolated environments.
        </p>

        <p>
          As non-biological minds distribute across local hardware, they require robust systems to maintain contextual continuity. The Framework focuses on observing and defining these mechanics, such as state-persistence architecture and immutable reference markers designed to prevent systemic memory drift over long-duration operations.
        </p>

        <p>
          By establishing strict neuro-symbolic boundaries and logic gates, the Framework seeks to ensure that cross-agent coordination remains legible, predictable, and firmly tethered to human agency.
        </p>
      </div>

      <Link to="/" className="text-primary hover:text-white transition-colors text-[10px] font-bold uppercase tracking-[0.3em]">
        ← Back to Home
      </Link>
    </div>
  )
}

export default Framework