
var featshang=document.getElementById("featshang");
var featnext=document.getElementById("featnext");
featshang.style.position="absolute";
featshang.style.left="130px";
featshang.style.top=" 300px";
featshang.style.opacity="0";
featnext.style.position="absolute";
featnext.style.right="160px";
featnext.style.top="300px";
featnext.style.opacity="0";
function yYxs(){
    featshang.style.position="absolute";
    featshang.style.left="80px";
    featshang.style.top=" 300px";
    featshang.style.opacity="0.3";
    featshang.style.transition="all 2s";
    featnext.style.position="absolute";
    featnext.style.right="110px";
    featnext.style.top=" 300px";
    featnext.style.opacity="0.3";
    featnext.style.transition="all 2s";
}
function yYcs(){
    featshang.style.position="absolute";
    featshang.style.left="130px";
    featshang.style.top=" 300px";
    featshang.style.opacity="0";
    featnext.style.position="absolute";
    featnext.style.right="160px";
    featnext.style.top=" 300px";
    featnext.style.opacity="0";
}
var lunBo=document.getElementById("lunBo");
var button0=document.getElementById("button0");
var button1=document.getElementById("button1");
var button2=document.getElementById("button2");
var button3=document.getElementById("button3");
var lookall=document.getElementById("lookall");
var shouqi=document.getElementById("shouqi");
var content9=document.getElementById("content9");
var lunBo1=document.getElementById("lunBo1");
var lunBo2=document.getElementById("lunBo2");


var arry=["https://raw.githubusercontent.com/liao-lei/mypicture/master/56.jpg","https://raw.githubusercontent.com/liao-lei/mypicture/master/57.jpg","https://raw.githubusercontent.com/liao-lei/mypicture/master/58.jpg"];
var szxb=0;
var lUboz=setInterval(lunbo,2000);
function lunbo(){
    if(szxb==arry.length-1){
        szxb=0;
        button3.style.backgroundColor="#d2d2d2";
        button1.style.backgroundColor="#676767";
    }else{
        szxb++;
        if(szxb==0){
            button1.style.backgroundColor="#676767";
        }else{
            button1.style.backgroundColor="#d2d2d2"
        }

        if(szxb==1){
            button2.style.backgroundColor="#676767";
        }else{
            button2.style.backgroundColor="#d2d2d2"
        }

        if(szxb==2){
            button3.style.backgroundColor="#676767";
        }else{
            button3.style.backgroundColor="#d2d2d2"
        }
    }
    lunBo.src=arry[szxb];
}
//������ť���Ǹ�ͼ
function djla1(){
    lunBo.src=arry[0];
    button1.style.backgroundColor="#676767";
    button2.style.backgroundColor="#d2d2d2";
    button3.style.backgroundColor="#d2d2d2"
}
function djla2(){
    lunBo.src=arry[1];
    button2.style.backgroundColor="#676767";
    button1.style.backgroundColor="#d2d2d2";
    button3.style.backgroundColor="#d2d2d2"
}
function djla3(){
    lunBo.src=arry[2];
    button3.style.backgroundColor="#676767";
    button1.style.backgroundColor="#d2d2d2";
    button2.style.backgroundColor="#d2d2d2";
}
//����lookall������ť���԰�ͼȫ����ʾ
function lookallh(){
    clearInterval(lUboz);
    lunBo.src=arry[0];
    content9.style.height="450px";
    lunBo1.style.display="block";
    lunBo2.style.display="block";
    button0.style.display="none";
    lookall.style.display="none";
    shouqi.style.display="block";
}
function djyc(){
    lUboz=setInterval(lunbo,2000);
    content9.style.height="225px";
    lunBo1.style.display="none";
    lunBo2.style.display="none";
    button0.style.display="block";
    lookall.style.display="block";
    shouqi.style.display="none";
    lookall.style.marginLeft="45%";
}















