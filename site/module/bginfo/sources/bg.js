//adjust
adjustsizeinbg();
function adjustsizeinbg(){
    document.getElementById('ctpan').style.width=document.getElementById('all').style.width;
    setTimeout(adjustsizeinbg,20);
}

//adjust



var showopttmp1=0;
function showopt(){
    
    if(showopttmp1==0){
        closeall();
        document.getElementById('optall').style.width='100%';
        document.getElementById('optall').style.height='1080px';
        document.getElementById('optall').style.zIndex='97';
        document.getElementById('optlay1').style.display='block';
        document.getElementById('optlay1').style.zIndex='98';
        showopttmp1=1;
        //var optall=document.getElementById('optall');
        //optall.addEventListener('click',closeall);
    }else if(showopttmp1==1){
        document.getElementById('optall').style.width='60px';
        document.getElementById('optall').style.height='60px';
        document.getElementById('optall').style.zIndex='0';
        document.getElementById('optlay1').style.display='none';
        document.getElementById('optlay1').style.zIndex='0';
        showopttmp1=0;
        closeall();
    }
    
}
function clickbackarrow(){
    closeall();
}
var clickedcolor='#535353';
function clickbutt(idname,linkto){
    var defcolor=document.getElementById(idname).style.backgroundColor;
    document.getElementById(idname).style.backgroundColor=clickedcolor;
    if(linkto!=undefined){
        location=linkto;
    }else{
        setTimeout(() => {
            document.getElementById(idname).style.backgroundColor=defcolor;
        }, 300);
    }
}
var clickcontentstmp1=0;
function clickcontents(){
    if(clickcontentstmp1==0){
        document.getElementById('contentslay1').style.display='block';
        clickcontentstmp1=1;

    }else if(clickcontentstmp1==1){
        document.getElementById('contentslay1').style.display='none';
        
        clickcontentstmp1=0;
        document.getElementById('toolslay1').style.display='none';
        toolslay1tmp1=0;
    }
    
}
var toolslay1tmp1=0;
function clicktools(){
    if(toolslay1tmp1==0){
        document.getElementById('toolslay1').style.display='block';
        toolslay1tmp1=1;

    }else if(toolslay1tmp1==1){
        document.getElementById('toolslay1').style.display='none';
        toolslay1tmp1=0;
    }
    
}
//user area
showusertmp1=0
function showuser(){
    if(showusertmp1==0){
        closeall();
        document.getElementById('userall').style.width='100%';
        document.getElementById('userall').style.height='1080px';
        document.getElementById('userall').style.zIndex='97';
        document.getElementById('userlay1').style.display='block';
        document.getElementById('userlay1').style.zIndex='98';
        showusertmp1=1;
        //var optall=document.getElementById('optall');
        //optall.addEventListener('click',closeall);
    }else if(showusertmp1==1){
        document.getElementById('userall').style.width='60px';
        document.getElementById('userall').style.height='60px';
        document.getElementById('userall').style.zIndex='0';
        document.getElementById('userlay1').style.display='none';
        document.getElementById('userlay1').style.zIndex='0';
        showusertmp1=0;
        closeall();
    }
}

var clickcontacttmp1=0;
function clickcontact(){
    closeall();
    if(clickcontacttmp1==0){
        document.getElementById('contactall').style.display='block';
        document.getElementById('contactall').style.zIndex=80;
        clickcontacttmp1=1;

    }else if(clickcontacttmp1==1){
        
        document.getElementById('closebuttondisactive').style.display='none';
        document.getElementById('closebuttonactive').style.display='block';
        setTimeout(() => {
            document.getElementById('contactall').style.display='none';
            document.getElementById('contactall').style.zIndex=0;
            document.getElementById('closebuttondisactive').style.display='block';
            document.getElementById('closebuttonactive').style.display='none';
        }, 200);
        
        
        clickcontacttmp1=0;
    }
}
function closeall(){
    showopttmp1=0;
    clickcontentstmp1=0;
    toolslay1tmp1=0;
    document.getElementById('contentslay1').style.display='none';
    document.getElementById('optall').style.width='60px';
    document.getElementById('optall').style.height='60px';
    document.getElementById('optall').style.zIndex='0';
    document.getElementById('optlay1').style.display='none';
    document.getElementById('optlay1').style.zIndex='0';
    document.getElementById('toolslay1').style.display='none';
    
    document.getElementById('userall').style.width='60px';
    document.getElementById('userall').style.height='60px';
    document.getElementById('userall').style.zIndex='0';
    document.getElementById('userlay1').style.display='none';
    document.getElementById('userlay1').style.zIndex='0';
    showusertmp1=0;
}