import React from 'react';
import { ResultBox, ResultText } from '../../assets/CandidateStyledComponents';
import 'fontsource-roboto';
import lulaCrying from '../../assets/img/lula-crying.jpg';
import bolsoCrying from '../../assets/img/bolso-crying.jpg';
import trumpShrug from '../../assets/img/trump-shrug.jpg';

export default function Result({ candidatesInput }) {
	let candidateAux = {
		id: '',
		name: '',
		votes: 0,
	};
	let result = '';
	let img = {};

	candidatesInput.map((candidate) => {
		if (candidate.votes > candidateAux.votes) {
			candidateAux = candidate;

			result = `Winner is ${candidateAux.name} with ${candidateAux.votes} votes!!!`;
		} else if (candidate.votes === candidateAux.votes) {
			result = 'It was a draw';
		}
		return result;
	});

	if (candidateAux.id === 1) {
		img = lulaCrying;
	} else if (candidateAux.id === 2) {
		img = bolsoCrying;
	} else {
		img = trumpShrug;
	}

	return (
		<ResultBox>
			<img
				style={{
					display: 'block',
					marginLeft: 'auto',
					marginRight: 'auto',
					width: '20rem',
					height: '15rem',
				}}
				src={img}
				alt='avatar'
			/>
			<ResultText> {result} </ResultText>
		</ResultBox>
	);
}
