import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { handleTextValue } from '../middlewares/middleware'
import rootReducer from '../reducer/reducer'

// Création du magasin de l'application
// -> paramètre = un état
// -> etat = etat global de l'application (objet)

// Appel au bras droit -> le(s) Reducer(s)
const store = createStore(
   rootReducer,
   applyMiddleware(handleTextValue, thunk)   
)

export default store