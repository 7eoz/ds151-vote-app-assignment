import styled from 'styled-components'
import 'fontsource-roboto'
  
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

export const ResultBox = styled.div `
    display: flex;
    /* align-items:center; */
    text-align:center;
    justify-content:space-around;
    padding: 4rem 0rem;
    margin: 4rem 0rem;
    @media (max-width: 735px) {
        margin: 4rem 0rem;
        padding: 0rem 0rem;

    }
`

export const ResultText = styled.div `
    display: flex;
    font-size: 2.1rem;
    font-weight:bold;
    font-family:  Roboto, sans-serif;
    @media (max-width: 735px) {
      align-content:center;
    }
`
