import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
	<div id='container' style={{width: window.innerWidth, height: .98 * window.innerHeight, marginTop: -.01 * window.innerHeight}}>
		<div>
			<h1 className='yiddish'>קױט פֿאַר דײַן פֿאַרדאַכט</h1>
			<h4 className='desc'>nyc queer/trans antizionist yiddish punk</h4>
			<div className='links'>
				<h3><a href='https://are.na/koyt-far-dayn-fardakht'>are.na</a></h3>
				<h3><a href='https://facebook.com/koytfilthband'>facebook</a></h3>
				<h3><a href='https://gumroad.com/koytfilthband'>gumroad</a></h3>
				<h3><a href='https://instagram.com/koytfilthband'>instagram</a></h3>
				<h3><a href='mailto://koytbilthband@gmail.com'>email</a></h3>
			</div>
			<h1 className='english'>the filth of yr suspicion</h1>
		</div>
	</div>,
	document.getElementById('root')
);
