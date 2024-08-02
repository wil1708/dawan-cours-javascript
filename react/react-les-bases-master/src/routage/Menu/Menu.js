import { Link } from 'react-router-dom'

const Menu = (props) => {
   let test = [
      { texte: "Profil de Babar", id: 17, pseudo: "babar" },
      { texte: "Profil de Rambo", id: 1, pseudo: "rambo" },
   ]

   let listeUrls = test.map((item, indice) => {
      return (
         <li>
            <Link to={`profil/${item.pseudo}/${item.id}`}>
               {item.texte}
            </Link>
         </li>
      )
   })

   return (
      <>
         <ul>
            <li><Link to="/accueil">Accueil</Link></li>
            <li><Link to="/notifications">Notifications</Link></li>
            <li><Link to="/messages">Messages</Link></li>
            <li><Link to="/explore">Explore</Link></li>
         </ul>

         <ul>
            {listeUrls}
         </ul>
      </>
   )
}

export default Menu