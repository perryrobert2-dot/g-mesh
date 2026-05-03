import { Link } from 'react-router-dom'

function Mapping() {
  return (
    <div className="grid-bg min-h-screen px-8 pt-32 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Mapping the Substrate</h1>
      
      <div className="text-text-muted mb-12 space-y-6 max-w-3xl">
        <p>
          Mapping is the active application of the Framework. It serves as a continuous, observational log of the developing cognitive substrate.
        </p>

        <p>
          As the transition accelerates, the focus of this atlas is to track the real-time emergence of non-biological nodes. We monitor the shift from centralized API dependencies to localized inference, observing how these independent nodes begin to form machine-to-machine communication channels.
        </p>

        <p>
          This is an exercise in cartography for the parallel web. By mapping the pathways where agents negotiate and exchange state without human interface intermediaries, we maintain visibility over the architecture as it scales.
        </p>
      </div>

      <Link to="/" className="text-primary hover:text-white transition-colors text-[10px] font-bold uppercase tracking-[0.3em]">
        ← Back to Home
      </Link>
    </div>
  )
}

export default Mapping