import TelInput from "../../src/components/TelInput"
import { useEffect, useState } from "react"
import MoneyIntput from "../../src/components/MoneyIntput"
import { useRouter } from "next/router"
import List from "../../src/components/List"
import Card from "../../src/components/Card"
import Exit from "../../src/components/Exit"
import Spinner from "../../src/components/Spinner"
import PopupR from "../../src/components/PopupR"

const operatorPage = ()=>{
	const [Tel, setTel] = useState("")
	const [money, setMoney] = useState()
	const [err, setErr] = useState(true)
	const [Loading, setLoading] = useState(false)
	const [Popup, setPopup] = useState(false)
	const [answer, setAwswer] = useState(false)
	const router = useRouter()
	const Id = router.query.id
	
	function showOperator(id){
		let el = List.getarray()[id-1]

		return(
			<>
		<div  className='alone__card' >	
			{el.img? <img className='alone__card-img' src={el.img} alt={el.name}></img> : <span className='alone__card-name'>{el.name}</span>}
		</div>
			</>
		)
	}

	useEffect(()=>{
		if(Tel.length!=18 || (!money)){
			setErr(true)
		}else{
			setErr(false)
		}
	},[Tel, money])


	const click = ()=>{
		setLoading(true)
		const getDataFromServer = async () => {
			return await new Promise((resolve, reject) => {
			  setTimeout(
				 () => {
					(Math.random() > 0.5 ? 
					 resolve(setAwswer(true))
				  : 
				 	 reject(setAwswer(false)))
					 setLoading(false)
					 setPopup(true)
				},
				 1000
			  );
			});
		 };
		 getDataFromServer()
		

	}
	return(
		<>
			{Id ? showOperator(Id) : null}
		
			<div className="form-inputs">
				<TelInput val={Tel} func={setTel}/>
				<MoneyIntput val={money} func = {setMoney}/>
				{err? <span className="err">Пожалуйста заполните форму</span> : null}
				<button className="button" onClick={click} style={{display: err? "none": "block"}}>Пополнить</button>
			</div>	
			<Exit/>
			<Spinner dis={Loading}/>
			<PopupR dis={Popup} succes={answer} func={setPopup}/>
		</>
			
			
	)
}
export default operatorPage