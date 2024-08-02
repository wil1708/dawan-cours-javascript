
const ListeSideBar = (props) => {


   let listeMenu = props.liste.map((item, indice) => {
      return (
         <li ></li>
      )
   })

   return (
      <ul className="">
         {listeMenu}
      </ul>
   )
}