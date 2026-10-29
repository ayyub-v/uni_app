import "./App.css";
import studentImage from "./assets/student.jpg";

const etudiant = {
  prenom: "Slim",
  nom: "Boubaker",
  email: "slimboubaker@gmail.com",
  telephone: "+216 99 999 999",
  filiere: "Génie Logiciel et Systèmes d'Information",
  anneeEtude: "2ème année",
  groupe: "GLSI 2",
  ville: "Mahdia",
  image: studentImage,
};

function App() {
  return (
    <div className="container">
      <div className="card">
        <img src={studentImage} alt="Photo de l'étudiant" />
        <h1>Fiche étudiant</h1>
        <p><strong>Nom & Prénom :</strong> {etudiant.prenom} {etudiant.nom}</p>
        <p><strong>Email :</strong> {etudiant.email}</p>
        <p><strong>Téléphone :</strong> {etudiant.telephone}</p>
        <p><strong>Filière :</strong> {etudiant.filiere}</p>
        <p><strong>Année d'étude :</strong> {etudiant.anneeEtude}</p>
        <p><strong>Groupe :</strong> {etudiant.groupe}</p>
        <p><strong>Ville :</strong> {etudiant.ville}</p>
        <a href={`mailto:${etudiant.email}`} className="btn-contact">Contacter</a>
      </div>
    </div>
  );
}

export default App;
