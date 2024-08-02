import React from 'react'
import SaisieTodo from './SaisieTodo/SaisieTodo'
import ListeTodos from './ListeTodos/ListeTodos'
import './Todo.css'

class Todo extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         taches: []
      }
   }

   // Fonctionnalité d'ajout d'une nouvelle tâche
   addTodo(texte) {
      let newTodo = {
         id: 1,
         texte: texte,
         termine: false
      }
      this.setState({
         taches: this.props.taches.concat(newTodo)
      })
   }

   render() {
      return (
         <>
            <p className="texte">Hello</p>
            {/* Récupération de la saisie utilisateur */}
            <SaisieTodo onClick={(txt) => this.props.addTodo(txt)} />
            {/* Affichage de la saisie utilisateur */}
            <ListeTodos
               tasks={this.state.taches}
            />
         </>
      )
   }
}

export default Todo

/// Pour chaque tache :
// -> Modification, Terminer, Suppression
// -> icones