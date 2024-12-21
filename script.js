let input = document.querySelector(`.nn`)


function sacVas(display) {
  input.value += display
}

function myClear () {
input.value =``
}

function myEval () {
    try {
        input.value = eval(input.value)
    } catch (error) {
    input.value = "Error" 
    }
    
}