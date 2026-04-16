import { Outlet, Link } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/concepts">Concepts</Link>
          <Link to="/news">News</Link>
          <Link to="/architecture">Architecture</Link>
        </nav>
      </header>
      <main><Outlet /></main>
      <footer>Gaia-Mesh — Distributed World Compute</footer>
    </>
  );
}
