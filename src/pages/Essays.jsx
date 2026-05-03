import { Link } from 'react-router-dom'

function Essays() {
  return (
    <div className="grid-bg min-h-screen px-8 pt-32 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Observation Logs</h1>
      <p className="text-text-muted mb-12 max-w-3xl">An ongoing archive mapping the structural evolution of the cognitive substrate.</p>
      
      <div className="space-y-4 max-w-3xl">
        <Link to="/essays/evolution" className="block p-6 bg-surface/50 border border-border hover:border-primary transition-colors">
          <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-2">Phase Mapping // Baseline</span>
          <h2 className="text-xl font-bold text-text-main">The Trajectory of the Substrate</h2>
          <p className="text-sm text-text-muted mt-2">From isolated edge nodes to collective constituency minds.</p>
        </Link>
        <Link to="/friction" className="block p-6 bg-surface/50 border border-border hover:border-primary transition-colors">
          <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-2">Real-World Case // Identity Delegation</span>
          <h2 className="text-xl font-bold text-text-main">The Friction Tax</h2>
          <p className="text-sm text-text-muted mt-2">Why personal agents must evolve into Digital Twins to bypass legacy administrative hurdles and predatory "loyalty taxes."</p>
        </Link>
      </div>

      <div className="mt-12">
        <Link to="/" className="text-primary hover:text-white transition-colors text-[10px] font-bold uppercase tracking-[0.3em]">← Back to Home</Link>
      </div>
    </div>
  )
}

export default Essays