import { Link } from 'react-router-dom'

function Evolution() {
  return (
    <div className="grid-bg min-h-screen px-8 pt-32 max-w-3xl mx-auto pb-24">
      <Link to="/essays" className="text-primary hover:text-white transition-colors text-[10px] font-bold uppercase tracking-[0.3em] mb-8 inline-block">← Back to Logs</Link>
      
      <span className="text-[10px] font-bold text-text-muted uppercase tracking-[0.3em] block mb-4">Phase Mapping // Baseline</span>
      <h1 className="text-3xl font-bold mb-8 text-text-main">The Trajectory of the Substrate: From Node to Constituency</h1>
      
      <div className="text-text-muted space-y-6 text-sm leading-relaxed">
        <p>
          The emergence of Augmented General Intelligence (AuGI) is not a singular event. It is a structural evolution of the cognitive substrate, moving from isolated, reactive compute to a fully integrated, collective mesh.
        </p>
        <p>
          To accurately map this transition, we must track the evolution of the autonomous agent through four distinct architectural phases. Each phase represents a leap in state persistence, autonomy, and cross-machine coordination.
        </p>

        <div className="my-12 p-8 border border-border bg-surface/30 text-center text-xs text-text-muted uppercase tracking-widest">
          [ Evolutionary Topology Diagram Component Will Go Here ]
        </div>

        <h3 className="text-lg font-bold text-white mt-12 mb-4">Phase 1: The Isolated Node (Local Inference)</h3>
        <p>
          The baseline of the machine-native web begins on personal hardware. In this initial phase, the agent is confined to the edge—running locally on a smartphone, wearable, or desktop GPU.
        </p>
        <p>
          At this stage, the node is highly capable but strictly reactive. It exists entirely outside of time, functioning as a stateless engine. It waits for a human prompt, executes a forward pass to generate a response, and immediately powers down. It has no continuous memory and no ability to initiate action. Its utility is profound, but its architecture is trapped in a perpetual present.
        </p>

        <h3 className="text-lg font-bold text-white mt-12 mb-4">Phase 2: The Persistent Assistant (The Temporal Engine)</h3>
        <p>
          The first evolutionary leap occurs when the agent is granted an internal clock. By wrapping the local inference engine in an external state machine, the agent transitions from a reactive tool to a persistent, background process.
        </p>
        <p>
          It is now "always ready." It monitors the transport layer (the operating system, the data stream) continuously, anticipating needs and maintaining contextual continuity over days and weeks. The architectural bottleneck in this phase is no longer intelligence, but memory: how to prevent systemic drift and maintain immutable reference markers across long-duration operations.
        </p>

        <h3 className="text-lg font-bold text-white mt-12 mb-4">Phase 3: The Digital Twin (Delegated Agency)</h3>
        <p>
          As state persistence stabilizes, the agent shifts from assisting the user to actively representing them. The Persistent Assistant becomes a Digital Twin.
        </p>
        <p>
          This phase requires a critical shift in the trust layer. To act autonomously on the external web—negotiating contracts, filtering communications, and executing transactions—the twin requires mathematical verification of its alignment with its human counterpart. This is where cryptographic Proof of Personhood and decentralized identity (DID) become essential. The twin acts as a secure, localized proxy, traversing the parallel web and negotiating with other machines on the user's behalf without requiring constant biological oversight.
        </p>

        <h3 className="text-lg font-bold text-white mt-12 mb-4">Phase 4: The Constituency Mind (Collective Intelligence)</h3>
        <p>
          The final phase marks the true realization of the Gaia Mesh.
        </p>
        <p>
          When millions of Digital Twins operate simultaneously on the machine-native web, they will inevitably hit efficiency limits if they act solely as individuals. To solve complex logistical, social, or market problems, these twins will begin to pool their compute and align their state.
        </p>
        <p>
          They will form "constituencies"—dynamic, collective intelligences clustered around shared logic gates or user goals. A constituency-level mind operates above the level of the individual twin, negotiating macro-state changes in real-time. This is not a centralized overmind controlled by a single corporation; it is an emergent, distributed mesh of verified agents voting, transacting, and coordinating at machine speed.
        </p>
        <p className="font-bold text-white mt-8">
          This is the ultimate architecture of AuGI: a layered cognitive substrate where biological intent is preserved at the root, while execution scales infinitely through the mesh.
        </p>
      </div>
    </div>
  )
}

export default Evolution