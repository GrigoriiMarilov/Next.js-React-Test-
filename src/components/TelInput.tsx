import React, {useState, useEffect} from 'react'

interface TelInputProps{
	val: string,
	func: (a: string) => void
}
const TelInput: React.FC<TelInputProps>=({val, func})=> {

const paste = (e) =>{
	var input = e.target,
	inputNumbersValue = e.target.value.replace(/\D/g, '');
	var pasted = e.clipboardData ;
	if (pasted) {
		var pastedText = pasted.getData('Text');
		if (/\D/g.test(pastedText)) {
			input.value = inputNumbersValue;
			return 
		}}
}
const change = (e) =>{
				var input = e.target,
            inputNumbersValue = e.target.value.replace(/\D/g, ''),
            selectionStart = input.selectionStart,
            formattedInputValue = ""

        if (!inputNumbersValue) {
            return input.value = "";
        }

        if (input.value.length != selectionStart) {
            if (e.data && /\D/g.test(e.data)) {
                e.target.value = inputNumbersValue;
            }
            return;
        }

        if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
            if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
            var firstSymbols = (inputNumbersValue[0] == "8") ? "+7" : "+7";
            formattedInputValue = input.value = firstSymbols + " ";
            if (inputNumbersValue.length > 1) {
                formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
            }
            if (inputNumbersValue.length >= 5) {
                formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
            }
            if (inputNumbersValue.length >= 8) {
                formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
            }
            if (inputNumbersValue.length >= 10) {
                formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
            }
        } 
        e.target.value = formattedInputValue;
	func(formattedInputValue)
}

  return (
	 <input className='telephone-input' placeholder='Телефон' type={"tel"} value={val} onChange={change} onPaste={paste} maxLength={18}/>
  )
}

export default TelInput