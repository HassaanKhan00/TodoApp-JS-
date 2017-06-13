var ol = document.getElementById("ol");
function additem()
{
   var text = document.getElementById("whattodo").value;
   var li = document.createElement("li");
   var img = document.createElement("img");
   img.src = "icons/del-icon.png";
   img.onclick = function () { var dli = this.parentNode; var dol = dli.parentNode; dol.removeChild(dli); };
   var textnode = document.createTextNode(text);
   li.appendChild(textnode)
   li.appendChild(img);
   ol.appendChild(li);
   document.getElementById("whattodo").value = '';
}
function focusstyle(id)
{
    var inputtag = document.getElementById(id).style.outline = 'none';
    inputtag = document.getElementById(id).style.borderBottom = '7px solid #A26029';
}
function blurstyle(id)
{
   var inputtag = document.getElementById(id).style.borderBottom = '2px solid wheat';
}

function delAllItems()
{
    ol.innerHTML = '';
}