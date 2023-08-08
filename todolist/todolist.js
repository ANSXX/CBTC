const inputBox = document.getElementById("input");
const listContainer = document.getElementById("list");
function tasks()
{
    if (inputBox.value ==='')
    {
        alert( "cant save empty")
    }
    else
    {
        let li = document.createElement("li") ;
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "x"
        li.appendChild(span);
    }
    inputBox.value = " ";
}

listContainer. addEventListener("click" , function(e)
{
    if (e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
    }
}, false);