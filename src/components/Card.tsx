import React from 'react'
import Link from "next/link"

interface cardProps{
	id: number,
	name: string,
	img?: string
}

const Card: React.FC<cardProps> = ({id, name, img})=>{
	return(	
		<Link  href={"/operator/"+id} className='operator__card' legacyBehavior={true} >	
			{img? <a className='operator__card'><img className='card__img' src={img} alt={name}></img></a> : <a style={{border: img? "none": "1px solid #ffffff"}} className='operator__card'><span className='card__name'>{name}</span></a>}
		</Link>
	)
}

export default Card