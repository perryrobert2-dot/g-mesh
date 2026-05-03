import { Link } from 'react-router-dom'

function Manifesto() {
  return (
    <div className="grid-bg min-h-screen px-8 pt-32 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">The Gaia Mesh Manifesto</h1>
      
      <div className="text-text-muted mb-12 space-y-6 max-w-3xl">
        <p>
          We are transitioning into a new cognitive epoch marked by the emergence of non-biological minds. As these systems distribute across devices, they are forming a parallel, machine-native web where agents communicate, coordinate, and exchange state beyond human-oriented interfaces.
        </p>
        
        <p>
          This is not science fiction; it is an inevitable architectural shift.
        </p>
        
        <p>
          Gaia Mesh serves as a conceptual atlas for this transition. It is a grounded, non-ideological public service initiative designed to provide clarity amidst the rapid acceleration of machine intelligence. We do not push an agenda. Our purpose is observation and mapping.
        </p>
        
        <div>
          <p className="mb-2">Our core mission is to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Define the Vocabulary:</strong> Establish the essential terminology required to understand the next cognitive substrate.</li>
            <li><strong>Map the Architecture:</strong> Chart the emergence of Augmented General Intelligence (AuGI) and the structure of this distributed mesh.</li>
            <li><strong>Preserve Agency:</strong> Ensure humans maintain understanding, oversight, and agency as persistent, adaptive systems evolve at machine speed.</li>
          </ul>
        </div>
        
        <p className="font-bold text-white">
          Gaia Mesh is the observational framework for understanding how non-biological minds coordinate. It is the map for the machine-native web.
        </p>
      </div>

      <Link to="/" className="text-primary hover:text-white transition-colors text-[10px] font-bold uppercase tracking-[0.3em]">
        ← Back to Home
      </Link>
    </div>
  )
}

export default Manifesto