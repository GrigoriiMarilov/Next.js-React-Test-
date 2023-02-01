import React from 'react'

interface SpinnerProps{
	dis?: boolean
}

const Spinner: React.FC<SpinnerProps> = ({dis}) => {
  return (
	 <div className='spinner-box' style={{display: dis ? "block": "none"}}>
		<div className='spinner'>
			<img className='spinner-img' src="https://tilda.ws/img/spinner-white.gif" alt="Loading" />
		</div>
	 </div>
  )
}

export default Spinner