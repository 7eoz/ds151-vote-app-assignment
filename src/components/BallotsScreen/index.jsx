import React, { useState } from 'react'
import { Button, Typography } from '@material-ui/core';
import Candidate from '../Candidate'
import Result from '../Result';
import CandidateData from '../../data/CandidateData'
import { Ballot, BallotBox } from '../../assets/CandidateStyledComponents'



function BallotsScreen({ candidatesInput, submitVotes }) {


  const [candidates, setCandidates] = useState(CandidateData);
    
  const handleVote = (name) => {
    let candidatesTemp = candidates;
    let i = candidatesTemp.findIndex(cand => cand.name === name);
    candidatesTemp[i].votes++;
    setCandidates(candidatesTemp);
  }

  const [result, setResult] = useState(false)


  function Finishing() {
    setResult(prevResult => prevResult = true)
  }



  if(result === false) {
    return(
      <Ballot>
      <Typography variant='h1' component='h1' align='center' fullwidth='true'> Ballot Screen</Typography>
      <BallotBox>
        {
          candidates.map( (candidate, index) => {
            return(
                <Candidate key={index} 
                           name={candidate.name}
                           votesInput={candidate.votes}
                           voteCallback={handleVote}/>
            )
          }
          )}
      </BallotBox>
      <Button variant='contained' 
              color='primary'
              fullwidth='true'
              onClick={Finishing}>
                  Finish voting
      </Button>
    </Ballot>
    )
  }
  return(
  <Result candidatesInput={candidates}/>
  )
}

export default BallotsScreen
