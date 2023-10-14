var empno=undefined;
var empname=undefined;
var desg=undefined;
var salary=undefined;
var comm=undefined;
var bonus=undefined;
var tbody=undefined;

emparry=[]
function init(){

empno=document.getElementById("empno");
empname=document.getElementById("empname");
desg=document.getElementById("desg");
salary=document.getElementById("salary");
comm=document.getElementById("comm");
bonus=document.getElementById("bonus");
tbody=document.getElementById("tbody");


mydata=localStorage.getItem("mydata");
myary=JSON.parse(mydata);
for(data of myary)
{
      
      emparry.push(data)
      add2table(data)

}



}
function add(){

      eno=empno.value;
      enm=empname.value;
      job=desg.value;
      sal=+salary.value;
      com=+comm.value;
      bns=+bonus.value;
    
      empobj={eno,enm,job,sal,com,bns}

      emparry.push(empobj)
      add2table(empobj)
     
}


function add2table(empobj){


    tr=document.createElement("tr")
    
    td1=document.createElement("td");
    td1.innerText=emparry.length;
    tr.appendChild(td1)

    td2=document.createElement("td");
    td2.innerText=empobj.eno;
    tr.appendChild(td2)

    td3=document.createElement("td");
    td3.innerText=empobj.enm;
    tr.appendChild(td3)

    td4=document.createElement("td");
    td4.innerText=empobj.job;
    tr.appendChild(td4)

    td5=document.createElement("td");
    td5.innerText=empobj.sal;
    tr.appendChild(td5)

    td6=document.createElement("td");
    td6.innerText=empobj.com;
    tr.appendChild(td6)

    td7=document.createElement("td");
    td7.innerText=empobj.bns;
    tr.appendChild(td7)

    td8=document.createElement("td");
    total=empobj.sal+empobj.com+empobj.bns;
    td8.innerText=total;
    tr.appendChild(td8)

    td9=document.createElement("td")
    btn=document.createElement("button")
    btn.innerText="delete";

     btn.setAttribute("data-pos",emparry.length-1)

    btn.onclick=del;
    td9.appendChild(btn)
    tr.appendChild(td9)

    
      tbody.appendChild(tr);
}

function del(){
      this.parentElement.parentElement.remove();
      pos=this.getAttribute("data-pos")
      emparry.splice(pos,1);
}




function save(){

    
    empdata=JSON.stringify(emparry)
    
   
     localStorage.setItem("mydata",empdata);

}