import Link from "next/link"
import { useEffect, useState } from "react"
import AddCard from "../src/components/AddCard";
import Card from "../src/components/Card"
import List from "../src/components/List";

const Index = () =>{
	const [operatorList, setOperatorList] = useState(List.getarray())
	const [dis, setDis] = useState(false)

	useEffect(()=>{
		console.log(operatorList)
	},[operatorList])
	return (
		<>	
		<div className="wrapper">
			<h1 className="main__h1">Пополните счёт<br></br>у любого оператора<br></br>мобильной связи</h1>
			<div className="list">
			{operatorList.map(el =>{ 
				return(
					<Card key={el.id} id={el.id} name={el.name} img={el.img}/>
				)
		})}
		<div  className='operator__card' style={{border: "1px solid #ffffff", cursor: "pointer"}} onClick={()=>setDis(true)}>	
			  <span  className='card__name'>{"Добавить"}</span>
		</div>
			</div>
		</div>
		<AddCard dis={dis} func={setDis} /> 
		</>
	)
}

export default Index