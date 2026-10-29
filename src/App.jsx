import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import StudentCard from "./components/StudentCard.jsx";
import Footer from "./components/Footer.jsx";
import ayoubImage from "./assets/ayoub.jpg";
import studentImage from "./assets/student.jpg";

function App() {
  const [etudiants, setEtudiants] = useState([
    {
      prenom: "Ayoub",
      nom: "Ben Slama",
      email: "ayoubenslama58@gmail.com",
      telephone: "+216 58 000 000",
      filiere: "Génie Logiciel et Systèmes d'Information",
      anneeEtude: "2ème année",
      groupe: "GLSI 2 A",
      ville: "Ariana",
      image: ayoubImage,
    },
    {
      prenom: "Slim",
      nom: "Boubaker",
      email: "slimboubaker@gmail.com",
      telephone: "+216 99 999 999",
      filiere: "",
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
      image: studentImage,
    },
    {
      prenom: "Mariem",
      nom: "Khalfallh",
      email: "mariem.khalfallah@gmail.com",
      telephone: "+216 27 567 890",
      filiere: "Licence Business Computing",
      anneeEtude: "2ème année",
      groupe: "LBC 2",
      image: studentImage,
    },
  ]);

  const [filtreFiliere, setFiltreFiliere] = useState("");

  function ajouterEtudiant() {
    const emailBase = "yassine.bensalem";
    const exists = etudiants.some((e) => e.email === `${emailBase}@gmail.com`);
    const email = exists
      ? `${emailBase}${Date.now().toString().slice(-4)}@gmail.com`
      : `${emailBase}@gmail.com`;

    const nouvelEtudiant = {
      nom: "Ben Salem",
      prenom: "Yassine",
      email: email,
      telephone: "+216 44 444 444",
      filiere: "Génie Logiciel et Systèmes d'Information",
      anneeEtude: "2ème année",
      groupe: "GLSI 1",
      ville: "Sfax",
      image: studentImage,
    };

    setEtudiants([...etudiants, nouvelEtudiant]);
  }

  function supprimerEtudiant(emailASupprimer) {
    setEtudiants(
      etudiants.filter((etudiant) => etudiant.email !== emailASupprimer)
    );
  }

  function modifierEtudiant(emailAModifier) {
    const etudiant = etudiants.find((e) => e.email === emailAModifier);
    const nouveauPrenom = window.prompt(
      "Entrez le nouveau prénom de l'étudiant :",
      etudiant ? etudiant.prenom : ""
    );

    if (nouveauPrenom && nouveauPrenom.trim() !== "") {
      setEtudiants(
        etudiants.map((e) =>
          e.email === emailAModifier
            ? { ...e, prenom: nouveauPrenom.trim() }
            : e
        )
      );
    }
  }

  const etudiantsFiltres = etudiants.filter((etudiant) =>
    etudiant.filiere.toLowerCase().includes(filtreFiliere.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <Navbar />

      <main className="main-content">
        <div className="toolbar">
          <div className="actions">
            <button className="btn-add" onClick={ajouterEtudiant}>
              + Ajouter un étudiant
            </button>
          </div>

          <div className="filter-container">
            <input
              type="text"
              className="filter-input"
              placeholder="Filtrer par filière..."
              value={filtreFiliere}
              onChange={(e) => setFiltreFiliere(e.target.value)}
            />
          </div>
        </div>

        <div className="container">
          {etudiantsFiltres.length > 0 ? (
            etudiantsFiltres.map((etudiant) => (
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
                onSupprimer={supprimerEtudiant}
                onModifier={modifierEtudiant}
              />
            ))
          ) : (
            <p className="no-results">Aucun étudiant trouvé pour cette filière.</p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
