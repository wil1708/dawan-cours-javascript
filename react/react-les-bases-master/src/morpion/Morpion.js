import React from 'react';
import Grille from './Grille/Grille';
import './App.css';

class App extends React.Component {
  // Construction d'un état local
  constructor(props) {
    super(props)
    this.state = {
      // this.state.historique[indice].grille[index]
      historique: [{
        grille: Array(9).fill(null)
      }],
      joueurSuivant: true,
      tour: 0
    }
  }


  // Fonction de vérification d'une grille gagnant (pour blocage du jeu)
  verifGagnant() {
    let combinaisons = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    let grille = this.state.historique[this.state.tour].grille.slice()

    for (let i = 0; i < combinaisons.length; i++) {
      const [a, b, c] = combinaisons[i]
      if (grille[a] && grille[a] === grille[b] && grille[a] === grille[c]) {
        return grille[a]
      }
    }
    return false
  }

  // Fonction de gestion de clic sur une case de la grille
  gestionClic(index) {
    let gagnant = this.verifGagnant()
    if (gagnant || this.state.historique[this.state.tour].grille[index]) {
      return
    }

    // Preparation du traitement
    let newGrid = this.state.historique[this.state.tour].grille.slice()
    newGrid[index] = (this.state.joueurSuivant) ? "X" : "O"

    // Preparer la partie utile de l'historique
    let newHisto = this.state.historique.slice(0,this.state.tour+1)
    // Déclenchement du changement d'état local (mise à jour de l'état)
    this.setState({
      historique: newHisto.concat([{
        grille: newGrid
      }]),
      joueurSuivant: !this.state.joueurSuivant,
      tour: this.state.tour + 1
    })
  }

  handleTour(tourClic) {
    this.setState({
      tour: tourClic,
      joueurSuivant: ((tourClic % 2) === 0) ? true : false
    })
  }

  // Rendu
  render() {
    let message = ""
    let gagnant = this.verifGagnant()
    if (gagnant) {
       message = "Le joueur " + gagnant + " a gagné."
    } else {
       message = "Joueur suivant : " + ((this.state.joueurSuivant) ? "X" : "O")
    }

    // Preparation de la liste des boutons (coups joués)
    let listeBoutons = this.state.historique.map((item, indice) => {
      // Rendu pour chaque itération (chaqué entrée de l'historique)
      return (
        <li>
          <button onClick={() => this.handleTour(indice)}>Coup n°{ indice }</button>
        </li>
      )
    })

    return (
      <>
        <p>{message}</p>
        <Grille />
        <ul>
          {listeBoutons}
        </ul>
      </>
    )
  }
}

export default App;