import React, { useState } from 'react'
import List from './List'

interface AddCardProps{
	dis?: boolean,
	func?: (a: any) => void
	
}

const AddCard: React.FC<AddCardProps>=({dis, func })=> {
const [Name, setName] = useState("")
const [img, setImg] = useState("")
const click =()=>{
	List.add(Name, img)
	func(false)
}
  return (
	 <div className='popup-body' style={{display: dis? "block": "none", height: "100%"}}>
		<div className='popup-content'>
			<input type="text" placeholder='Название' className='telephone-input' style={{background: "#dddddd"}}  onChange={(e)=>setName(e.target.value)}/>
			<input type="text" placeholder='Сыллка на картинку' className='telephone-input'style={{background: "#dddddd"}}  onChange={(e)=>setImg(e.target.value)}/>
			<button className='button' onClick={click}>Добавить</button>
			 <div className='close-popup' onClick={()=>func(false)}>
			 <svg fill="#242424" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 503.021 503.021">
					<g>
						<path d="M491.613,75.643l-64.235-64.235c-15.202-15.202-39.854-15.202-55.056,0L251.507,132.222L130.686,11.407
							c-15.202-15.202-39.853-15.202-55.055,0L11.401,75.643c-15.202,15.202-15.202,39.854,0,55.056l120.821,120.815L11.401,372.328
							c-15.202,15.202-15.202,39.854,0,55.056l64.235,64.229c15.202,15.202,39.854,15.202,55.056,0l120.815-120.814l120.822,120.814
							c15.202,15.202,39.854,15.202,55.056,0l64.235-64.229c15.202-15.202,15.202-39.854,0-55.056L370.793,251.514l120.82-120.815
							C506.815,115.49,506.815,90.845,491.613,75.643z"/>
					</g>
				</svg>
			 </div>
			 </div>
	 </div>
  )
}

export default AddCard