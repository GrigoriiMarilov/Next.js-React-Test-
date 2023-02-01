class StateList{
	array: any[];
	constructor(){
		this.array = [];
	}
	add(name: string, img: string)  {
		this.array.push({name: name, img:img, id:this.array.length+1})
	}
	getarray(){
		return this.array
	}
	
}

const List = new StateList()

List.add("Билайн","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1D7YQrO6Y09-Ske_jFDfm4zddv4Az48k6L7UsYV9pE1vDJcni55-rlUlrv4MqEtulT4E&usqp=CAU")
List.add("МТС","https://upload.wikimedia.org/wikipedia/ru/thumb/2/29/MTS_logo_2010.svg/1200px-MTS_logo_2010.svg.png" )
List.add("Мегафон", "https://yt3.googleusercontent.com/ytc/AL5GRJUUFGGNVelu4SlYfwTei8MHaaz3DUyYSVNJr5dJMw=s900-c-k-c0x00ffffff-no-rj")

export default List