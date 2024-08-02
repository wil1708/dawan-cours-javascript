import { propTypes } from "react-bootstrap/esm/Image"


const ProduitList = () => {
   const [panier, setPanier] = useState([])

   const handleAddToCart = () => {
      props.nomdefonction()
   }
   return (
      <>
         <button type="submit" onClick={() => handleAddToCart()}>
            Ajouter au panier
         </button>
      </>
   )
}