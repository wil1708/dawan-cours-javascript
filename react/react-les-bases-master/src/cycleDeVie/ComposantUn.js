import React from 'react'

class ComposantUn extends React.Component {
   // 1.1 - Construction
   constructor(props) {
      super(props)
      this.state = {
         tache: "",
         posts: []
      }
      console.log("Je suis dans le constructeur")
   }

   // 1.3 Construction effective - Montage effectué
   componentDidMount() {
      console.log("Je suis dans le componentDidMount")
   }

   // 2.3 Mise à jour effective
   componentDidUpdate() {
      console.log("Je suis dans le componentDidUpdate")
   }

   // Preparer une mise à jour
   updateState() {
      console.log("Je suis dans la préparation de mise à jour")
      // 2.1 Déclenchement de la mise à jour de l'état
      this.setState({
         tache: "Rambo"
      })
   }

   // 1.2 Rendu initial
   // 2.2 Re-rendu
   render() {
      console.log("Je suis dans le rendu")
      return (
         <>
            <p>Hello World !</p>
            <button type="submit" onClick={() => this.updateState()}>Clic</button>
         </>
      )
   }
}

export default ComposantUn