// Fonctionnalité asynchrone (Thunk) pour récupération publications
const fetchPubliApi = () => {
   return (dispatch, getState) => {
      // Mise en place du traitement
      fetch("https://jsonplaceholder.typicode.com/posts")
         .then((reponse) => reponse.json())
         .then((json) => {
            console.log(json)
            // Passage correct de l'API
            dispatch({type: "FETCH_API_SUCCESS", payload: json})

            // Passage vers la gestion d'erreur (forçage de test)
            //dispatch(fetchPubliKo("Impossible d'accéder à l'API."))
         })
         // En cas d'erreur, on oriente le traitement vers la gestion d'erreur
         .catch((erreur) => {
            dispatch(fetchPubliKo(erreur))
         })
   }
}
// Fonctionnalité de prise en charge des erreurs d'appel API
// -> erreur = message issu de l'étape "catch" de l'appel API
const fetchPubliKo = (erreur) => {
   return (dispatch, getState) => {
      dispatch({
         type: "FETCH_API_KO",
         payload: erreur
      })
   }
}

export const apiActions = {
   fetchPubliApi,
   fetchPubliKo
}