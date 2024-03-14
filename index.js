var n = 1
var a = document.getElementById("brand")
var b = document.getElementById("model")
var c = document.getElementById("cc")
var d = document.getElementById("price")
var tab = document.getElementById("table-container")
function addData()
    {
        var e = document.getElementsByTagName('tr')
        if(e.length==1)
        {
            n = 1
        }
        if(a.value && b.value && c.value && d.value)
        {
        var result = "<td>" + n + "</td>" + "<td>" + a.value + "</td>" + "<td>" + b.value + "</td>" + "<td>" + c.value + "</td>" + "<td>" + d.value + "</td>" + "<td><button id=\"deldata\" onclick =\"delrow(event)\">Delete</button></td>"
        var trow = document.createElement("tr")
        trow.innerHTML = result
        tab.insertAdjacentElement("beforeend",trow)
        n = n + 1;
        }
        else
        {
            alert("Enter All Details!")
        }
    }
function delrow(event)
    {
        event.target.parentElement.parentElement.remove()
    }
