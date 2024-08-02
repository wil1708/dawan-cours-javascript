// Clé de contact (données de démarrage)
const initialState = {
   publications: [],
   erreur: {
      message: {
         texte: ""
      },
      code: 0
   }
}

const apiReducer = (state = initialState, action) => {
   switch (action.type) {
      case "FETCH_API_SUCCESS":
         return { ...state, publications: state.publications.concat(action.payload) }
      case "FETCH_API_KO":
         return {...state, erreur: { message: { texte: action.payload}, code: "201"}}
      default:
         // Action de type "inconnu" -> retour du state actuel (sans modif)
         return state
   }
}

export default apiReducer

//npm install react-router-dom
//npm install redux
//npm install react-redux