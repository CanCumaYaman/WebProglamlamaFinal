var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";

    document.getElementById("total").innerHTML=Number(document.getElementById("total").innerHTML)- Number($(this).parent("li").find(".price").text());
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement(value) {
 
  if(value==document.getElementById("etext").innerHTML){
    var deger=Number(document.getElementById("eadet").innerHTML);
    deger=deger+1;
    document.getElementById("eadet").innerHTML=deger;
    document.getElementById("efiyat").innerHTML=deger*2;
  }
  else
    if(value==document.getElementById("dtext").innerHTML){
    var deger=Number(document.getElementById("dadet").innerHTML);
    deger=deger+1;
    document.getElementById("dadet").innerHTML=deger;
    document.getElementById("dfiyat").innerHTML=deger*6;
  }else 
  if(value==document.getElementById("ctext").innerHTML){
    var deger=Number(document.getElementById("cadet").innerHTML);
    deger=deger+1;
    document.getElementById("cadet").innerHTML=deger;
    document.getElementById("cfiyat").innerHTML=deger*5;
  }
    document.getElementById("total").innerHTML=Number(document.getElementById("efiyat").innerHTML)+Number(document.getElementById("dfiyat").innerHTML)+Number(document.getElementById("cfiyat").innerHTML)-1;
  }
  document.getElementById("myInput").value = "";
  
 
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

// <span onclick="newElement()" class="addBtn">Add</span>