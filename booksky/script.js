

    var overlay=document.querySelector("#popup-overlay")
    var box=document.querySelector("#popup-box")
    var addbtn=document.querySelector("#addbutton")
    console.log(overlay, box, addbtn);
    addbtn.addEventListener("click",function(){
        overlay.style.display="block"
        box.style.display="block"
    })

    
    var cancel=document.querySelector("#cancel-button")
    cancel.addEventListener("click",function(event)
{
    event.preventDefault() /*to prevent it from submitting*/
     overlay.style.display="none"
        box.style.display="none"

})


let title=document.getElementById("book-title")
let author=document.querySelector("#book-author")
let description=document.querySelector("#description")
let appendd=document.querySelector("#append-item")
let container=document.getElementById("container")
let bookcontainer=document.getElementById("book-container")
appendd.addEventListener("click",function()
{
  let newitem=document.createElement("div")
  newitem.classList.add("book-container")

  newitem.innerHTML=`<h2 style="color: #fd6569; padding: 3px;">${title.value}</h2>
        <h4 style="font-weight: 800; padding: 3px;">${author.value}</h4>
        <p>${description.value}</p>
        <button onclick="deletebutton(this)" style="padding: 5px;">Delete</button> `
        container.append(newitem)
        overlay.style.display="none"
        box.style.display="none"
        title.value=""
        author.value=""
        description.value=""
})

let deletebook=document.getElementById("delete-button")
function deletebutton(btn){
btn.parentElement.remove()
}

