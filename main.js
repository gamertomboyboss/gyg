menu_list_array = ["Veg Margherita Pizza",
                    "tandoori chicken pizza"
                    "veggie supreme"
                    "panner tikka pizza"
                    "delux veggie"
                    ];

function getmenu(){
var htmldata;
htmldata= "ol class= menulist"
menu_listarray .sort ()
for (var i=0;< menu menu_list_array.length,i++)
htmldata=htmldata+' <li> ' + menu_list_array [i] + </li>
}
htmldata=htmldata+'<ol>'
document.getElementById ("displaymenu").innerHTML=htmldata;

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array .sort()
htmldata='<section class=cards>'
for (var i=0;< menu menu_list_array.length,i++)
htmldata=htmldata+'<div class="card">'
                 + '<img src="https://tse2.mm.bing.net/th?id=OIP.g-6ZvkvDo298_owasKgoNQHaEW&pid=Api&P=0&w=287&h=169"/>'
                 +menu_list_array [i]+ '<div/>'
}
htmldata=htmldata+'</section>'
document.getElementById ("display addmenu").innerHTML=htmldata;
function add_top(){
var item= document.getElementById ("add item").value;
menu_list_array .push (item)
}