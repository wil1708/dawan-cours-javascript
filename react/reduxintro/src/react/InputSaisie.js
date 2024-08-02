import { connect } from 'react-redux'
import { ajouterTache } from '../redux/actions/actions'
import { useState } from 'react'
const ConnectedInputSaisie = ({addToDo}) => {
    const [texte, setTexte] = useState("")

    const handleChange = (e) => {
        setTexte(e.target.value)
    }

    const handleClic = () => {
        let newTodo={
            id: 1,
            libelle: texte,
            termine: false
        }
        addToDo(newTodo)
    }
    return (
        <>
            <input
            type="text"
            value={texte}
            onChange= {(e) => handleChange(e)}
            />
            <button type="submit" onClick={() => handleClic }>
                Valider
            </button>
        </>
    )
}

//recup de fonctionsalités actions.js
const mapDispatchToProps = (dispatch) => {
    return {
        addToDo: (todo) => dispatch(ajouterTache(todo))

    }
}
const InputSaisie = connect(null, mapDispatchToProps)(ConnectedInputSaisie)

export default InputSaisie

//connect(param)-> etat local uniquement
//const InputSaisie = connect(mapStateToProps, mapDispatchToProps)(ConnectedInputSaisie)