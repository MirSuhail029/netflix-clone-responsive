const langContainer=document.getElementsByClassName("language-container");

let flag=true;
for(const container of langContainer){
    const dropDownList=container.getElementsByClassName("dropdown");
    for(const dropDown of dropDownList){
        container.addEventListener("click",function(){
            if (flag===true){
                dropDown.setAttribute("class","dropdown");
                flag=false;
            }else if(flag===false){
                dropDown.setAttribute("class","dropdown hidden");
                flag=true;
            }
        });
    };   
};