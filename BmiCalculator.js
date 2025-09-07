

let height =document.getElementById("height")
let weight=document.getElementById("weight")
let bmiShow=document.getElementById("bmi")
let Calculate=document.getElementById("Calculate")
let Reload =document.getElementById("Reload");
let category=document.getElementById("category");


Calculate.addEventListener("click",function(){


    let meter=height.value *0.3048;
    let squaremeter = meter*meter;
    let bmiCal = (weight.value/squaremeter).toFixed(2);

    console.log(bmiCal);

    bmiShow.innerHTML=" your bmi is:" +bmiCal;


    if(bmiCal<18.5){
        category.innerText = "You are Underweight ";
        category.style.color="red";  
    
} else if(bmiCal >=18.5 && bmiCal <25 ){
category.innerHTML=  " You are Normal";

}else if(bmiCal >=25 && bmiCal < 30){

category.innerHTML= " You are  overweight";
}

})

Reload.addEventListener("click",function(){
    bmiShow.innerText="";
    height.innerText="";
    weight.value="";
    category.value="";
})


