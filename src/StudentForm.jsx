import "./StudentForm.css";
import "./App.css";
function StudentForm(){
    return (
    <div className="student-form">
        <h2>Ajouter un étudiant</h2>    
    <form onsubmit="{handleSubmit}" className="student-form">
        <label htmlFor="nom">nom :</label><br />
        <input value="{nom}" onChange={(e)=>setNom(e.target.value)} type="text" id="nom" name="nom" required /><br />
        <label htmlFor="prenom">prenom :</label><br />
        <input value="{prenom}" onChange={(e)=>setPrenom(e.target.value)} type="text" id="prenom" name="prenom" required /><br />
        <label htmlFor="email">email :</label><br />
        <input value="{email}" onChange={(e)=>setEmail(e.target.value)} type="email" id="email" name="email" required /><br />
        <label htmlFor="telephone">telephone :</label><br />
        <input value="{telephone}" onChange={(e)=>setTelephone(e.target.value)} type="tel" id="telephone" name="telephone" required /><br />
        <label htmlFor="filiere">filiere :</label><br />
        <select value="{filiere}" onChange={(e)=>setFiliere(e.target.value)} id="filiere" name="filiere" required><br />
            <option value="Genie logiciel">Genie logiciel</option>
            <option value="LCS">LCS</option>
            <option value="IOT">IOT</option>
            <option value="LCE">LCE</option>
            <option value="IRS">IRS</option>
        </select><br />
        <label htmlFor="anneeEtude">anneeEtude :</label><br />
        <input value="{anneeEtude}" onChange={(e)=>setAnneeEtude(e.target.value)} type="number" id="anneeEtude" name="anneeEtude" required /><br />
        <label htmlFor="groupe">groupe :</label><br />
        <input value="{groupe}" onChange={(e)=>setGroupe(e.target.value)} type="text" id="groupe" name="groupe" required /><br />
        <label htmlFor="ville">ville :</label><br />
        <input value="{ville}" onChange={(e)=>setVille(e.target.value)} type="text" id="ville" name="ville" required /><br />
        <label htmlFor="image">image :</label><br />
        <input 
        
        onChange={(e)=>{
            const fichier   = e.target.files[0];
            if (fichier) {
                setImage(URL.createObjectURL(fichier));
            } 
         }} type="file" accept="image/*" /><br /><br/>
        <button className="btn-add" type="submit">+ Ajouter un étudiant</button>
        

    </form> </div>
    )
}
export default StudentForm;