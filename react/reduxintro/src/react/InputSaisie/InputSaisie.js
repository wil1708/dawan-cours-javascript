import { useDispatch, useSelector } from "react-redux"
import { useState } from 'react'
import { ajouterTache } from "../../redux/actions/actions"


const InputSaisie = () => {
   const [texte, setTexte] = useState("")
   const errMessage = useSelector(state => state.erreur)

   // mapDispatchToProps
   const dispatch = useDispatch()

   const handleChange = (event) => {
      setTexte(event.target.value)
   }

   const handleClic = () => {      
      let newTodo = {
         id: 1,
         libelle: texte,
         termine: false
      }
      dispatch(ajouterTache(newTodo))
      setTexte("")
   }
   let erreur = (errMessage) ? errMessage : ""

   return (
      <>
         <p>{ erreur }</p>
         <input
            type="text"
            value={texte}
            onChange={(e) => handleChange(e)}
         />
         <button type="submit" onClick={handleClic}>
            Valider
         </button>
      </>
   )
}
// const mapStateToProps = (state) => {
//    return {
//       likes: state.likes
//    }
// }
//Récupération de fonctionnalités (actions.js)
// const mapDispatchToProps = (dispatch) => {
//    return {
//       addToDo: (todo) => dispatch(ajouterTache(todo))
//    }
// }
// // connect(param) -> acces etat local
// const InputSaisie = connect(mapStateToProps, mapDispatchToProps)(ConnectedInputSaisie)

export default InputSaisie