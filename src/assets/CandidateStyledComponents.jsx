import styled from 'styled-components'
  
  //*-Styled Components
  export const Ballot = styled.section `
  display:flex;
  flex-direction: column;
  `

  export const BallotBox = styled.div `
  display: flex;
  margin: 0 0 0;
  width:100%;
  @media (max-width: 735px) {
      flex-direction: column;
    }
  `

export const CandidateBox = styled.div `
    display: flex;
    flex-direction: column;
    justify-content:space-around;
    padding: 0rem 1rem;
    margin: 0.6rem 0rem;
    width: 50%;
    @media (max-width: 735px) {
        margin: 0.6rem 0rem;
        padding: 0rem 0rem;
        width:100%;
    }
`
