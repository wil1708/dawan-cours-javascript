import { useDispatch, useSelector } from "react-redux"
import { useState } from 'react'
import combineActions from "../../redux/actions/actions"


const InputSaisie = () => {
   const [texte, setTexte] = useState("")
   const erreurToDo = useSelector((state) => state.todoReducer.erreur)

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
      console.log(combineActions.texte)
      dispatch(combineActions.todoActions.ajouterTache(newTodo))
      setTexte("")
   }

   // Affichage du bloc de message d'erreur (Todo)
   let erreurToDoBloc = ((erreurToDo.code) ?
      <p>Erreur: {erreurToDo.message} - Code: {erreurToDo.code} </p>
      :
      "")

   return (
      <>

         <p>{erreurToDoBloc}</p>
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