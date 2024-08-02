const handleApi = ({ dispatch, getState }) => {
   return (next) => {
      return (action) => {
         return next(action)
      }
   }
}

export const apiMiddleware = {
   handleApi
}
