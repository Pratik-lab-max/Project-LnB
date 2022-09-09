var count = 16;
function myfunction1(){
    if(count > 8){
        count= count-8;
    }
    else{
        count = 16;
    }

    document.getElementById("paragraph").style.fontSize= `${count}px`;
    document.getElementById("box").innerHTML= `${count}`;
}
function myfunction2(){
    if(count <100){

        count = count+8;
    }
    else{
        count =16;
    }

    document.getElementById("paragraph").style.fontSize= `${count}px`;
    document.getElementById("box").innerHTML= `${count}`;
    
}

function fontfamily(){
    let family=document.getElementById("family").value
    console.log(`${family}`)
    document.getElementById("prg").style.fontFamily  =`'${family}'`;
    
}