import React from 'react'
import { ResultBox, ResultText } from '../../assets/CandidateStyledComponents'
import 'fontsource-roboto'

export default function Result({ candidatesInput }) {
  let candidateAux = {
      name: '',
      votes: 0
  }
  let result = ''

  candidatesInput.map((candidate) => {
    if(candidate.votes > candidateAux.votes){
      candidateAux = candidate
      result = `Winner is ${candidateAux.name} with ${candidateAux.votes} votes!!!`
    }
    else if (candidate.votes === candidateAux.votes) {
        result = 'It was a draw'
    }
    return result
  }

  )
  return (
    <ResultBox> 
        <ResultText> {result} </ResultText> 
    </ResultBox>
  )
}
