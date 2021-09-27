import React, { useState } from 'react';
import { Button, Typography } from '@material-ui/core';
import { CandidateBox } from '../../assets/CandidateStyledComponents';

function Candidate({ avatar, name, votesInput, voteCallback }) {
	const [votes, setVotes] = useState(votesInput);

	// console.log(bonossauroImage);
	console.log(avatar);

	function Voting() {
		setVotes((prevVotes) => prevVotes + 1);
		voteCallback(name);
	}

	return (
		<CandidateBox>
			<img
				style={{
					display: 'block',
					marginLeft: 'auto',
					marginRight: 'auto',
					borderRadius: '50%',
					width: '8rem',
					height: '8rem',
				}}
				src={avatar}
				alt='avatar'
			/>
			<Typography variant='h2' component='h2' align='center' fullwidth='true'>
				{name}
			</Typography>
			<Typography variant='h3' component='h3' align='center' fullwidth='true'>
				{votes} votes
			</Typography>
			<Button
				variant='contained'
				color='primary'
				fullwidth='true'
				onClick={Voting}>
				Vote
			</Button>
		</CandidateBox>
	);
}

export default Candidate;
