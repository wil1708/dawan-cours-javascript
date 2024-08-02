import React from 'react'
import './ListeTodo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faAddressBook } from '@fortawesome/free-solid-svg-icons'

class ListeTodos extends React.Component {
   render() {
      let listeTaches = this.props.tasks.map((item, indice) => {
         return (
            <li key={indice}>
               <FontAwesomeIcon
                  icon={faCoffee}
               />
               <FontAwesomeIcon icon={faAddressBook} />
               {item.id} - {item.texte}
            </li>
         )
      })

      return (
         <>
            <div className='row test'>
               <div className='col-10'>
                  <ul>
                     {listeTaches}
                  </ul>
               </div>
            </div>
         </>
      )
   }
}

export default ListeTodos