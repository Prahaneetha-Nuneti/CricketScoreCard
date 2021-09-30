let cricket= document.getElementById("cricket");

let h = document.createElement("div");
h.innerHTML = "<h1><b><i>CRICKET 10</i></b></h1>";
h.style.color="red"
cricket.appendChild(h);


cricket.appendChild(document.createElement("hr"));


class ScoreCard{
    constructor(){
        let a = document.createElement("div");
        a.setAttribute("class","row");
        a.setAttribute("id","scard");

        let x =document.createElement("div");
        x.setAttribute("class","col");

        let h1 = document.createElement("p");
        h1.innerHTML = "<h4><b>TEAM 1 TOTAL SCORE</b><h4>";
        x.appendChild(h1);

        let h2 = document.createElement("p");
        h2.setAttribute("id","sc1");
        h2.innerHTML = "0";
        x.appendChild(h2);

        let button1 = document.createElement("button");
        button1.setAttribute("id","btn1");
        button1.setAttribute("onclick","table_one()");
        button1.innerHTML = "HIT 1";
        button1.style.backgroundColor = "rgb(65,97,146)";
        button1.style.color = "white";
        x.appendChild(button1);
        a.appendChild(x);


        let y =document.createElement("div");
        y.setAttribute("id","timer");
        y.setAttribute("class","col");
        
        let h3 = document.createElement("p");
        h3.innerHTML = "<h4><b>TIMER</b></h4>";
        y.appendChild(h3);

        let p22 = document.createElement("p");
        p22.setAttribute("id","count");
        p22.innerHTML = "0";
        y.appendChild(p22);
        a.appendChild(y);


        let z =document.createElement("div");
        z.setAttribute("class","col");

        let h4 = document.createElement("p");
        h4.innerHTML = "<h4><b>TEAM 2 TOTAL SCORE</b><h4>";
        z.appendChild(h4);

        let p32 = document.createElement("p");
        p32.setAttribute("id","sc2");
        p32.innerHTML = "0";
        z.appendChild(p32);

        let button2 = document.createElement("button");
        button2.setAttribute("id","btn2");
        button2.setAttribute("onclick","table_two()");
        button2.setAttribute("disabled","true");
        button2.innerHTML = "HIT 2";
        button2.style.backgroundColor = "rgb(65,97,146)";
        button2.style.color = "white";
        z.appendChild(button2);
        a.appendChild(z);
        
        cricket.appendChild(a);
    }
}


new ScoreCard();

cricket.appendChild(document.createElement("hr"));


let main = document.createElement("div");
main.setAttribute("id","main");
main.setAttribute("class","row");

class table{
    create(id:string){

        let tbdiv1 = document.createElement("div");
        tbdiv1.setAttribute("class","col-lg-4");
        let table = document.createElement("table");
        table.setAttribute("class","table");
        table.setAttribute("id",id);
        let tr,td,x;
        for(let row=0;row<11;row++){
            tr = document.createElement("tr");
            for(let col=0;col<8;col++){
                td = document.createElement("td");
                x = id+"_"+row.toString()+col.toString();
                td.setAttribute("id",x);
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        tbdiv1.appendChild(table);
        main.appendChild(tbdiv1);

    }
}

let z=document.createElement("z");
z.style.display="flex";
z.style.justifyContent="space-around";
let z1=document.createElement("z1");
z1.innerHTML="<h5>TEAM 1 SCORE</h5>";
z.appendChild(z1);
let z2=document.createElement("z1");
z2.innerHTML="<h5>TEAM 2 SCORE</h5>";
z.appendChild(z2);
cricket.appendChild(z);
new table().create("tb1");

let windiv = document.createElement("div");
windiv.setAttribute("class","col-lg-2");
let genres = document.createElement("button");
genres.setAttribute("onclick","finalResult()");
genres.innerHTML = "GENERATE RESULT";
genres.style.backgroundColor = "blue";
genres.style.color = "white";
let winp1 = document.createElement("p");
winp1.innerHTML = "MATCH WON BY";
let winp2 = document.createElement("p");
winp2.innerHTML = "MAN OF THE MATCH";
windiv.appendChild(genres);
windiv.appendChild(winp1);
windiv.appendChild(winp2);
main.appendChild(windiv);

new table().create("tb2");


cricket.appendChild(main);

document.getElementById("tb1_00").innerHTML = "TEAM 1";
document.getElementById("tb1_07").innerHTML = "TOTAL"
for(let i=1;i<=6;i++){
    let z = "tb1_0"+i.toString();
    document.getElementById(z).innerHTML = "B"+i.toString();
}
for(let i=1;i<=10;i++){
    let z = "tb1_"+i.toString()+"0";
    document.getElementById(z).innerHTML = "PLAYER "+i.toString();
}

document.getElementById("tb2_00").innerHTML = "TEAM 2";
document.getElementById("tb2_07").innerHTML = "TOTAL"
for(let i=1;i<=6;i++){
    let z = "tb2_0"+i.toString();
    document.getElementById(z).innerHTML = "B"+i.toString();
}
for(let i=1;i<=10;i++){
    let z = "tb2_"+i.toString()+"0";
    document.getElementById(z).innerHTML = "PLAYER "+i.toString();
}


var timeleft = 60;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    document.getElementById("btn2").removeAttribute("disabled");
    document.getElementById("btn1").setAttribute("disabled","true");
    clearInterval(downloadTimer);
    repeatTimer();
  }
  document.getElementById("count").innerHTML = (60 - timeleft).toString();
  timeleft -= 1;
}, 1000);

function repeatTimer(){
    var timeleft = 60;
    var downloadTimer = setInterval(function(){
        if(timeleft <= 0 || document.getElementById("btn2")["disabled"]=="true"){
            document.getElementById("btn2").setAttribute("disabled","true");
            clearInterval(downloadTimer);
        }
        document.getElementById("count").innerHTML = (60 - timeleft).toString();
        timeleft -= 1;
    }, 1000);
}


function getRandomInt() {
    let min = Math.ceil(0);
    let max = Math.floor(10);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let r=1,c=1,tb1sum=0,r1sum=0,max1sum=0,r1id=0;
function table_one(){
    if(r==11){
        document.getElementById("btn1").setAttribute("disabled","true");
        document.getElementById("btn2").removeAttribute("disabled");
        clearInterval(downloadTimer);
        repeatTimer();
        return;
    }
    let sc = getRandomInt();
    tb1sum = tb1sum+sc;
    r1sum = r1sum+sc;
    document.getElementById("sc1").innerHTML = tb1sum.toString();
    document.getElementById("tb1_"+r.toString()+c.toString()).innerHTML = sc.toString();
    document.getElementById("tb1_"+r.toString()+"7").innerHTML = r1sum.toString();
    if(sc==0 || c==6){
        if(r1sum>max1sum){
            max1sum=r1sum;
            r1id=r;
        }
        r=r+1;
        c=1;
        r1sum=0;
    }
    else{
        c=c+1;
    }
}

let rs=1,cs=1,tb2sum=0,r2sum=0,max2sum=0,r2id=0;
function table_two(){
    if(rs==11){
        document.getElementById("btn2").setAttribute("disabled","true");
        console.log(document.getElementById("btn2")["disabled"]);
        clearInterval(downloadTimer);
        return;
    }
    let sc = getRandomInt();
    tb2sum = tb2sum+sc;
    r2sum = r2sum+sc;
    document.getElementById("sc2").innerHTML = tb2sum.toString();
    document.getElementById("tb2_"+rs.toString()+cs.toString()).innerHTML = sc.toString();
    document.getElementById("tb2_"+rs.toString()+"7").innerHTML = r2sum.toString();
    if(sc==0 || cs==6){
        if(r2sum>max2sum){
            max2sum=r2sum;
            r2id=rs;
        }
        rs=rs+1;
        cs=1;
        r2sum=0;
    }
    else{
        cs=cs+1;
    }
}


function finalResult(){
    if(tb1sum>tb2sum){
        console.log(tb1sum);
        console.log(tb2sum);
        winp1.innerHTML+="<br>TEAM 1";
        winp2.innerHTML+="<br>PLAYER "+r1id.toString();
        winp2.innerHTML+="<br>TEAM 1";
        winp2.innerHTML+="<br>"+max1sum.toString();
    }
    else{
        winp1.innerHTML+="<br>TEAM 2";
        winp2.innerHTML+="<br>PLAYER "+r2id.toString();
        winp2.innerHTML+="<br>TEAM 2";
        winp2.innerHTML+="<br>"+max2sum.toString();
    }
}