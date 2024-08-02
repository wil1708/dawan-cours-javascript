import { combineReducers } from "redux"
import { apiActions} from "./apiActions/apiActions"
import { todoActions} from "./todoActions/todoActions"

const combineActions = {
   todoActions,
   apiActions
}

export default combineReducers