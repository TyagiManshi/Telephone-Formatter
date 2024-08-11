const input = document.querySelector('input')
let previousValue = ''   // empty string so that we do not get undefined
let firstThreeNumbers = ''

input.addEventListener('input', (e) => {
    const inputValue = e.target.value

    // input type is text so we can type characters here that's not phone number and 
    // if type is number then format will not be done bcz it contains characters
    // we use regular expression for this ==> /\d+$/g.test() ==> to test numbers only

    if(/\d+$/g.test(inputValue)){
        input.value = inputValue
    }
    else{
        input.value = inputValue.substring(0, inputValue.length - 1)
    }

    if(inputValue.length === 4  && previousValue.length < inputValue.length){
        firstThreeNumbers = inputValue.substring(0,3)
        input.value = `+(${firstThreeNumbers}) - ${inputValue[inputValue.length - 1]}`
    }

    // console.log(previousValue  ,  inputValue);

    else if(inputValue.length === 9 && previousValue.length > inputValue.length){
        input.value = firstThreeNumbers
    }

    previousValue = inputValue; 
    // this means previous value will be always 1 step back from the input value 
    // after typing input then it will be stored in previous at last
    // now if we do backspace then input value will be targeted it will beacome 1 less 
    // and previousValue will now store that deleted number at last
    // now previous is 1 more than the input and this process will continue 

})


// when we are going back using backspace then we should get the first three as typed not formatted 
// so we have to check if we are still typing or deleting the number 
// for that we have to store the previous value somewhere and check the conditions accordingly