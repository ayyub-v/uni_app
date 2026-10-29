import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#accueil">Accueil</a>
      <a href="#etudiants" className="active">Étudiants</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}

export default Navbar;
