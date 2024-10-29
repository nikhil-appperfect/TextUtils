import React from 'react'

export default function Alert(props) {
    const capitalize = (word) =>{
        const newWord = word.toLowerCase();
        return newWord.at(0).toUpperCase() + newWord.slice(1);
    }

  return (

    props.alert && <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.typ)}</strong>: {props.alert.msg}
    </div>
  )
}
