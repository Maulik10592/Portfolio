import React from 'react';
import ReactLoading from 'react-loading';
import "./Loader.css"; 

const Loader = () => (
	<div className='loader'>
		<ReactLoading type={"bars"} color={"#3ab773"} height={100} width={100} />
	</div>
);

export default Loader;