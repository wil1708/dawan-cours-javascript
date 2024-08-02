// Clé de contact (données de démarrage)
const initialState = {
    todos: []
 }
 
 const todoReducer = (state = initialState, action) => {
    switch (action.type) {
       case "ADD_TODO":         
          return Object.assign({}, state, {
             todos: state.todos.concat(action.payload)
          })
       case "UPD_TODO":
          // Traitement de mise à jour d'une tâche
          return // state modifié
       case "DEL_TODO":
          // Traitement de mise à jour d'une tâche
          return // state modifié
       
       
       default:
          // Action de type "inconnu" -> retour du state actuel (sans modif)
          return state
    }
 }
 
 export default todoReducer
 
 //npm install react-router-dom
 //npm install redux
 //npm install react-redux