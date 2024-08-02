// Fonctionnalité de contrôle du libellé de la tâche
export const handleTextValue = ({ dispatch, getState }) => {
   return function (next) {
      return function (action) {  
         let state = getState()

         // Mise en place du traitement
         if (action.type === "ADD_TODO") {
            console.log("[Debug] Analyse chaine de caractères")


            let motTrouve = state.listWords.filter((mot) => {
               return (
                  action.payload.libelle.includes(mot)
               )
            })
            if (motTrouve.length > 0) {
               //let state = getState()
               console.log("[Debug] Erreur mots interdits : " + motTrouve.toString())
               // Refus de l'ajout de la nouvelle tâche (déclenchement erreur)
               let errTodo = {
                  type: "ERR_ADD_TODO",
                  payload: null
               }
               return dispatch(errTodo)
            }
         }
         // Passage de relai vers :
         // 1. Fonctions middlewares à effectuer
         // 2. Envoi vers le Reducer
         return next(action)
      }
   }
}
