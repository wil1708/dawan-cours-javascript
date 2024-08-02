import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import combineActions from "redux/actions/actions"

// const ConnectedDisplayTodos = ({ todos }) => {  
//    let listeTodos = todos.map((item, index) => {
//       return (
//          <li key={index}>
//             {item.libelle} - {item.id}
//          </li>
//       )
//    })
//    return (
//       <>
//          <ul>
//             {listeTodos}
//          </ul>
//          <ul>
//             {listePosts}
//          </ul>
//       </>
//    )
// }
// const mapStateToProps = (state) => {
//    return {
//       todos: state.todos
//    }
// }
// const mapStateToProps = (state) => {
//    return {
//       todos: state.todos
//    }
// }
// const DisplayTodos = connect(mapStateToProps)(ConnectedDisplayTodos)

const DisplayTodos = () => {
   const todos = useSelector((state) => state.todoReducer.todos)
   const publications = useSelector((state) => state.apiReducer.publications)
   const erreurApi = useSelector((state) => state.apiReducer.erreur)

   const dispatch = useDispatch()

   // Déclencher l'action asynchrone fetchPubliApi dans les action creator
   useEffect(() => {
      console.log("dispatch Api")
      dispatch(combineActions.apiActions.fetchPubliApi())
   }, [dispatch])
  
   // Affichage de la liste des tâches (ajout par l'utilisatueur)
   let listeTodos = todos.map((item, index) => {
      return (
         <li key={index}>
            {item.libelle} - {item.id}
         </li>
      )
   })

   // Affichager de la liste des posts isssus d'un appel API (voir useEffect)
   let listePubli = publications.map((item, index) => {
      return (
         <li key={index}>
            {item.title}
         </li>
      )
   })

   // Affichage du bloc de message d'erreur (Api)
   let erreurApiBloc = ((erreurApi.code) ?
      <p>Erreur: {erreurApi.message.texte} - Code: {erreurApi.code} </p>
      :
      "")

   return (
      <>
         {erreurApiBloc}
         <ul>
            {listeTodos}
         </ul>
         <ul>
            {listePubli}
         </ul>
      </>
   )
}

export default DisplayTodos