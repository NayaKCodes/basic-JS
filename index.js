let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
console.log(countEl)
let a=0
function increment()
{
    a+=1
    countEl.innerText= a
}
function save()
{
    let b = a+" - "
    saveEl.textContent += b
}
function reset()
{
    a=0
    countEl.innerText= a
}
