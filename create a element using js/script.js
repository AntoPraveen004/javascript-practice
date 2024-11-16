let new_element= document.createElement('div')
let result_box=document.getElementById("inner").appendChild(new_element)
result_box.id="anto"
let c=result_box.appendChild(document.createElement("p"))
c.innerHTML="iam antony praveen"
console.log("created")
