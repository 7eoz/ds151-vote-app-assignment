import React, { Fragment } from 'react'

export default function Result({ candidatesInput }) {
  let candidateAux = {
      name: '',
      votes: 0
  }
  candidatesInput.map((candidate) => {
    if(candidate.votes > candidateAux.votes){
      candidateAux = candidate
    }
  }
  )
  return (
    <Fragment>
            <span> Winner is {candidateAux.name} with {candidateAux.votes} votes</span>
    </Fragment>
  )
}
