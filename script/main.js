// NOTE:
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============

const keys = document.querySelector(".calculator__keys")
const out = document.querySelector(".calculator__display")
  let lastbutton
  let firstnumber
  let secondnumber
  let operator

function add(e){
  let key = e.target.textContent
  let display = out.textContent
  let action = e.target.dataset.action

  if(!action){
    if(display === "0" || lastbutton === "equal" || lastbutton === "operator"){
    out.textContent = key
    }
    else{
       out.textContent = out.textContent + key
       }
    lastbutton = "number"
  }
  if(action === "add" || action ==="subtract" || action ==="multiply" || action ==="divide"){

    if(operator && lastbutton ==="number"){
      secondnumber = display
      out.textContent = calculate(firstnumber , operator , secondnumber)
      firstnumber = out.textContent
      operator =  action
    }
    else if (lastbutton === "number" || lastbutton === "equal"){
      operator =  action
      firstnumber = out.textContent

    }
    lastbutton = "operator"
  }
  if(action == "clear"){
    out.textContent = 0
    firstnumber = ''
    secondnumber =''
    operator = ''
    lastbutoon = ''
    lastbutton = "clear"
  }
  if(action === "decimal"){

      if(lastbutton ==="operator" || lastbutton === "equal"){
        out.textContent = '0.'
      }
      else if (!display.includes('.')){
        out.textContent += '.'
      }
      lastbutton = "decimal"
    }



  if(action === "calculate"){
    if(firstnumber && operator){
    secondnumber = out.textContent
    console.log(firstnumber , operator , secondnumber)
    out.textContent = calculate(firstnumber , operator , secondnumber)
    }
    operator = ""
    lastbutton = "equal"

  }

}

function calculate(a , op , b){
  if(op === "add") {return (parseFloat(a)+parseFloat(b))}
  if(op === "subtract") return (parseFloat(a)-parseFloat(b))
  if(op === "multiply") return (parseFloat(a)*parseFloat(b))
  if(op === "divide") return (parseFloat(a)/parseFloat(b))
}

keys.addEventListener("click" , add)
keys.addEventListener("click" , () => {
  console.log("pressed")
})



