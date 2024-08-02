import { useParams } from "react-router-dom"

const Messages = () => {
   let { id } = useParams()
   if (id) {
      
   }
   return (
      <>
         <p>Hello Messages </p>
      </>
   )
}

export default Messages