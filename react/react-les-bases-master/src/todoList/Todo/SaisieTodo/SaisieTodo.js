import React from 'react'

class SaisieTodo extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         texte: ""
      }
   }

   handleChange(e) {
      this.setState({
         texte: e.target.value
      })
   }

   handleClic() {
      this.props.onClick(this.state.texte)
      this.setState({
         texte: ""
      })
   }

   render() {
      return (
         <>
            <input
               type="text"
               value={this.state.texte}
               onChange={(event) => this.handleChange(event)}
            />
            <button
               type="submit"
               onClick={() => this.handleClic()}
            >
               Valider
            </button>
         </>
      )
   }
}

export default SaisieTodo