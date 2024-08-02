import React from 'react'
import { useParams } from 'react-router-dom'

const Profil = () => {
   // Hook des paramètres d'Url
   let params = useParams()
   let id = params.id
   let pseudo = params.pseudo

   return (
      <>
         <p>Hello {pseudo} - {id}</p>
      </>
   )
}

export default Profil