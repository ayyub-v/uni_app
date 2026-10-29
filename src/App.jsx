import "./App.css";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import StudentCard from "./components/StudentCard.jsx";
import Footer from "./components/Footer.jsx";
import studentImage from "./assets/student.jpg";

const etudiants = [
  {
    prenom: "Slim",
    nom: "Boubaker",
    email: "slimboubaker@gmail.com",
    telephone: "+216 99 999 999",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneeEtude: "2ème année",
    groupe: "GLSI 2",
    ville: "Mahdia",
    image: studentImage,
  },
  {
    prenom: "Sarra",
    nom: "Trabelsi",
    email: "sarra.trabelsi@gmail.com",
    telephone: "+216 11 111 111",
    filiere: "Licence Computer Science",
    anneeEtude: "1ère année",
    groupe: "LCS 1",
    ville: "Sousse",
    image: studentImage,
  },
  {
    prenom: "Mariem",
    nom: "Khalfallah",
    email: "mariem.khalfallah@gmail.com",
    telephone: "+216 27 567 890",
    filiere: "Licence Business Computing",
    anneeEtude: "2ème année",
    groupe: "LBC 2",
    image: studentImage,
  },
];

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <main className="main-content">
        <div className="container">
          {etudiants.map((etudiant) => (
            <StudentCard
              key={etudiant.email}
              prenom={etudiant.prenom}
              nom={etudiant.nom}
              email={etudiant.email}
              telephone={etudiant.telephone}
              filiere={etudiant.filiere}
              anneeEtude={etudiant.anneeEtude}
              groupe={etudiant.groupe}
              ville={etudiant.ville}
              image={etudiant.image}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
