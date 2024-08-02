import { todoMiddleware } from "./todo/todoMiddleware";
import { apiMiddleware } from './api/apiMiddleware'
 
export const combineMiddleware = {
   todoMiddleware,
   apiMiddleware
}