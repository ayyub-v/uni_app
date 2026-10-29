import "./StudentCard.css";

function StudentCard(props) {
  const ville = props.ville || "Non renseignée";

  return (
    <div className="card">
      <img src={props.image} alt="Photo de l'étudiant" />
      <h1>Fiche étudiant</h1>
      <p>Nom & Prénom :{props.prenom} {props.nom}</p>
      <p>Email : {props.email}</p>
      <p>Téléphone : {props.telephone}</p>
      <p>Filière : {props.filiere}</p>
      <p>Année : {props.anneeEtude}</p>
      <p>Groupe : {props.groupe}</p>
      <p>Ville : {ville}</p>
      <a href={`mailto:${props.email}`} className="btn-contact">Contacter</a>
    </div>
  );
}

export default StudentCard;
