result="";

function setup(){
    canvas= createCanvas(300, 300);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
    classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/y374fdyhC/model.json',model_loaded);
}

function model_loaded(){
    console.log("Model Loaded!")
}

function draw(){
   image(video, 0, 0, 300, 300);
   classifier.classify(video, gotResult);
}

function gotResult(error, result){
if(error){
    console.error(error);
}

else{
console.log(result);
result = result[0].label;
console.log(result);
if(result== 'Mask wore'){
    document.getElementById("result_mask_woren").innerHTML = "Mask is worn properly";    
    document.getElementById("result_not_mask_woren").innerHTML="";
}
else{
    document.getElementById("result_not_mask_woren").innerHTML= "Mask is not worn, Please wear your mask";
    document.getElementById("result_mask_woren").innerHTML= "";
  
}
}
}
