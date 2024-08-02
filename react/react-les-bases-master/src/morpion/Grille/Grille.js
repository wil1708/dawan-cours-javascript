import React from 'react'
import Case from '../Case/Case'

class Grille extends React.Component {
   // Fonction de génération de cases avec valeurs personnalisées
   creerCase(indice) {
      return (
         // Appel du composant Case
         // utilisation de "props"
         <Case
            valeur={this.props.grille[indice]}
            babar={() => this.props.handleClic(indice)}
         />
      )
   }

   // Rendu
   render() {
      return (
         <>
            <div>
               {this.creerCase(0)}
               {this.creerCase(1)}
               {this.creerCase(2)}
            </div>
            <div>
               {this.creerCase(3)}
               {this.creerCase(4)}
               {this.creerCase(5)}
            </div>
            <div>
               {this.creerCase(6)}
               {this.creerCase(7)}
               {this.creerCase(8)}
            </div>
         </>
      )
   }
}

connect()()

export default Grille