'use strict'

var datec = document.getElementById("date") ; 
var list = document.getElementById("list") ;
var input1=document.getElementById("input1");
var input2=document.getElementById("input2");
var submit = document.getElementById("submit") ; 
















var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
datec.textContent=date ; 



// var pa = document.createElement('p');
// datec. document.appendChild(pa) ;
// pa.textContent=date ; 

// todolist();
submit.addEventListener('submit',handleclicksubmit);
function handleclicksubmit (event){
    if (event.target.id =='submit'){
        whattodo=input19.value
        indate=input2.value
        todolist();
    }
    Event.preventDefault()
        var ul1 = document.createElement(ul); 
    list.appendChild(ul);
var li1 = document.createElement(li); 
ul1.appendChild(li1);
li1.textContent=input1.value
// console.log(li1);
   

}

var dolist =[];
function todolist (whattodo, indate){
this.whattodo=whattodo;
this.indate=indate;
dolist.push(this); 



}




var getarray=[];
var todolocal=[];
function setlocal(){
     todolocal = JSON.stringify(dolist);
    localStorage.setItem('todolocal',todolocal );
}


function getlocal (){
    localStorage.getItem('todolocal');
    var getarray = JSON.parse(todolocal);
}

setlocal ();
getlocal ();



