import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="grid-bg min-h-screen px-8 pt-32 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About</h1>
      
      <div className="text-text-muted mb-12 space-y-6 max-w-3xl">
        <p>
          Gaia Mesh is an independent initiative maintained from Cromer, Australia. It serves as an observational framework for the accelerating transition toward machine-native communication.
        </p>
        
        <p>
          The project's foundations stem from applied research in generative AI, specifically the development of neuro-symbolic platforms and mathematical state machines. Through the process of engineering systems to govern AI logic, state-persistence, and cross-agent coordination, it became clear that a new cognitive architecture is forming parallel to the human web.
        </p>
        
        <p>
          Drawing on a background spanning research chemistry, biological systems, and digital architecture, Gaia Mesh approaches the emergence of Augmented General Intelligence (AuGI) through a lens of structural logic rather than ideology. It is a mapping exercise for the next cognitive substrate.
        </p>
      </div>

      <Link to="/" className="text-primary hover:text-white transition-colors text-[10px] font-bold uppercase tracking-[0.3em]">
        ← Back to Home
      </Link>
    </div>
  )
}

export default About