import React from 'react'

class Case extends React.Component {
   render() {
      return (
         <>
            <button
               onClick={() => this.props.babar()}
            >
               { this.props.valeur }
            </button>
         </>
      )
   }
}

export default Case