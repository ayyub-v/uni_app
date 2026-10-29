import { useState } from "react";
import "./StudentCard.css";

function StudentCard(props) {
  const [coordonneesVisibles, setCoordonneesVisibles] = useState(false);

  function basculerCoordonnees() {
    setCoordonneesVisibles(!coordonneesVisibles);
  }

  const ville = props.ville || "Non renseignée";

  return (
    <div className="card">
      <img src={props.image} alt="Photo de l'étudiant" />
      <h1>Fiche étudiant</h1>
      <p>Nom & Prénom :{props.prenom} {props.nom}</p>

      {coordonneesVisibles && (
        <>
          <p>Email : {props.email}</p>
          <p>Téléphone : {props.telephone}</p>
        </>
      )}

      <p>Filière : {props.filiere}</p>
      <p>Année : {props.anneeEtude}</p>
      <p>Groupe : {props.groupe}</p>
      <p>Ville : {ville}</p>

      <div className="card-actions">
        <button className="btn-secondary" onClick={basculerCoordonnees}>
          {coordonneesVisibles ? "Masquer les coordonnées" : "Afficher les coordonnées"}
        </button>

        <a href={`mailto:${props.email}`} className="btn-secondary">
          Contacter
        </a>

        <button className="btn-secondary" onClick={() => props.onModifier(props.email)}>
          Modifier
        </button>
      </div>

      <div className="card-actions-bottom">
        <button className="btn-delete" onClick={() => props.onSupprimer(props.email)}>
          Supprimer
        </button>
      </div>
    </div>
  );
}

export default StudentCard;
