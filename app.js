
var colors=["Tomato","red","Orange","DodgerBlue","MediumSeaGreen","Gray","SlateBlue","Violet","LightGray"];


for(var i=1;i<=24;i++){

var balloo=document.getElementById(`balloon${i}`);
balloo.style.backgroundColor=colors[Math.floor(Math.random()* colors.length)];
}




document.addEventListener('click', function(e){
    
    if (e.target.className === "baloon"){
        
                e.target.style.backgroundColor =colors[Math.floor(Math.random()* colors.length)];
                popped++;
                
    }   
});
