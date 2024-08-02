// Clé de contact (données de démarrage)
const initialState = {
    publications: []

 }
 
 const apiReducer = (state = initialState, action) => {
    switch (action.type) {
       
       case "FETCH_API_SUCCESS":
          return {...state, publications: state.publications.concat(action.payload)}
       default:
          // Action de type "inconnu" -> retour du state actuel (sans modif)
          return state
    }
 }
 
 export default rootReducer
 
 //npm install react-router-dom
 //npm install redux
 //npm install react-redux