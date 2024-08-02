import { apiActions } from "./api/apiActions";
import { todoActions } from "./todo/todoActions";

const combineActions = {
   todoActions,
   apiActions
}

export default combineActions