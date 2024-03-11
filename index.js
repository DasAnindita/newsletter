const Email=getElementbyClass("input");
const form= getElementbyID("form");
const errorelement=getElementbyID("error");

//prevent page from submiting by default

form.addEventListener('submit',(e)=>{
    let msg=[];
    if(msg==""||msg==null){
        msg.push("fill in email");
    }
    e.PreventDefault();

    if(msg.length>0){
        e.PreventDefault();
        errorelement.innerText= msg.join(',');
    }
})