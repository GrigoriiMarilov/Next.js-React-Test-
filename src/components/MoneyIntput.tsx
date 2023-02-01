

interface MoneyIntputProps{
	val: number,
	func: (a: any) => void
}

const MoneyIntput:React.FC<MoneyIntputProps> =  ({val, func})=> {

	const change = (e) =>{
		let value = e.target.value.replace(/\D/g, '')

		if(value / 10 > 100){
			return
		}
		if(value[0]==0){
			value=""
		}
		console.log(value)
		func(value)
	}

  return (

	<input className="telephone-input" placeholder='Руб' type={"number"} min={"1"} max={"1000"} onChange={change} value={val}/>

  )
}

export default MoneyIntput