import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className="grid-bg min-h-screen px-8 pt-32 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact</h1>
      
      <div className="text-text-muted mb-12 space-y-6 max-w-3xl">
        <p>
          Gaia Mesh operates as a focused mapping and observation initiative.
        </p>
        
        <p>
          Correspondence regarding the architecture of the machine-native web, state-persistence mechanics, and AuGI terminology is welcome. Due to the independent nature of this project, technical and structural discourse is prioritized over general inquiries.
        </p>
        
        <p>
          Email: <a href="mailto:admin@g-mesh.com" className="text-white hover:text-primary transition-colors">admin@g-mesh.com</a>
        </p>
      </div>

      <Link to="/" className="text-primary hover:text-white transition-colors text-[10px] font-bold uppercase tracking-[0.3em]">
        ← Back to Home
      </Link>
    </div>
  )
}

export default Contact