

// Fonctionnalité asynchrone (Thunk) pour récupération publications
const fetchPubliApi = () => {
    return (dispatch, getState) => {
       // Mise en place du traitement
       console.log("Fetch API debut")
       fetch("https://jsonplaceholder.typicode.com/posts")
          .then((reponse) => reponse.json())
          .then((json) => {
             console.log(json)
             dispatch({
                type: "FETCH_API_SUCCESS",
                payload: json
             })
          })
    }
 }