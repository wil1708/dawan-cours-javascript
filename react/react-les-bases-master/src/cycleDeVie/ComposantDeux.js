import { useEffect, useState } from 'react'
import SaisieTodo from '../todoList/Todo/SaisieTodo/SaisieTodo'

// Newschool
//function ComposantDeux(props) {
//const ComposantDeux = (props) => {
function ComposantDeux({ historique, joueurSuivant, tour }) {
//const ComposantDeux = ({ onClick }) => {

   // Hook d'état (création de clés)
   const [tache, setTache] = useState()
   const [posts, setPosts] = useState([
      {id: 1, texte: "qsdsdsqd", categorie: "manga", auteur:"Maelle"},
      {id: 1, texte: "qsdsdsqd", categorie: "manga", auteur:"Maelle"},
      {id: 1, texte: "qsdsdsqd", categorie: "manga", auteur:"Maelle"},
      {id: 1, texte: "qsdsdsqd", categorie: "manga", auteur:"Maelle"},
      {id: 1, texte: "qsdsdsqd", categorie: "manga", auteur:"Maelle"},
      {id: 1, texte: "qsdsdsqd", categorie: "manga", auteur:"Maelle"},
      {id: 1, texte: "qsdsdsqd", categorie: "manga", auteur:"Maelle"},
   ])

   // Hook d'effet - tout le temps (construction, mise à jour, tout)
   useEffect(() => {
      console.log("Je suis dans le useEffect")
   })

   // Hook d'effet - équivalent ComponentDidMount
   useEffect(() => {
      // appel api
      setPosts([
         {id: 1, texte: "qsdsdsqd", categorie: "manga", auteur:"Maelle"},
         {id: 1, texte: "qsdsdsqd", categorie: "manga", auteur:"Maelle"},
         {id: 1, texte: "qsdsdsqd", categorie: "manga", auteur:"Maelle"},
         {id: 1, texte: "qsdsdsqd", categorie: "manga", auteur:"Maelle"},
         {id: 1, texte: "qsdsdsqd", categorie: "manga", auteur:"Maelle"},
         {id: 1, texte: "qsdsdsqd", categorie: "manga", auteur:"Maelle"},
         {id: 1, texte: "qsdsdsqd", categorie: "manga", auteur:"Maelle"},
      ])
   }, [])

   // Hook d'effet - spécifique à une clé
   useEffect(() => {
      console.log("Je suis dans le useEffect")
   }, [tache])

   // Hook d'effet - spécifique à une clé
   useEffect(() => {
      console.log("Je suis dans le useEffect")
   }, [posts])

   // Preparer une mise à jour
   const updateState = () => {
      onClick("")
      console.log("Je suis dans la prep")
      setTache("Rambo")
   }

   // Preparer une mise à jour
   const updatePosts = () => {
      console.log("Je suis dans la prep")
      setPosts()
   }

   const handleClick = () => {
      console.log("Je fais quelque chose")
   }

   let histo = historique.map((item, indice) => {

   })

   // Rendu initial
   return (
      <>
         <p>Hello World ! {value}</p>
         <button type="submit" onClick={updateState}>Clic</button>
         <button type="submit" onClick={updatePosts}>Clic</button>
         <SaisieTodo
            onClick={handleClick}
         />
      </>
   )
}

export default ComposantDeux




// banniere (image de fond) + titre du site
// tout à droite de la banniere - logo
// menu horizontal      ||    caddie
// -> contenu principal
// -> liste de produits (3x3)
// ----> ajouter au panier (bonus:quantité -> impacter le compteur de l'icone caddie)

// Ticket de caisse - bouton payer
// -> remets à zero le panier (mais on conserve le retrait des quantités)
// -> on ne peut plus ajouter un produit sans stock (bouton grisé)