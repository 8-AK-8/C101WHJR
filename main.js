var speechrecoginition = window.webkitSpeechRecoginition

var Recoginition = new speechrecognition();

function start(){
  document.getElementById("textbox").innerHTML = "";
  Recoginition.start();
}

Recoginition.onresult = function(event){
  console.log(event);
  var content = event.results[0][0].transcript;
  document.getElementById("textbox").value = content;
  if(content == "take my selfie"){
    speak();
  }
  }
  camera = document.getElementById("div_webcam")
  Webcam.set({
    width: 360,
    height:250,
    image_format:"jpg",
    jpg_quality:100,
  })
  
  function speak(){
  Webcam.attach(camera);
  var synth = window.speechSynthesis;
  speak_data = "Taking your selfie in 5 seconds";
  var Utterthis = new SpeechSynthesisUtterance(speak_data);
  synth.speak(Utterthis);
  timer();
  setTimeout(function() { take_snapshot(); save(); }, 13000);
  }
  
  function timer(){
    var synth = window.speechSynthesis;
    for(var i=5;i>=1;i--){
  speak_data =i;
  var Utterthis = new SpeechSynthesisUtterance(speak_data);
  synth.speak(Utterthis);
    }
  speak_data = "Taking your selfie now";
  var Utterthis = new SpeechSynthesisUtterance(speak_data);
  synth.speak(Utterthis);
  }
  
  function take_snapshot(){
    Webcam.snap(function(data_uri){
      if( img_id == selfie1){
      document.getElementById("div_pic1").innerHTML = '<img src="'+data_uri+'" id="img_uri1">'
      }
      if(img_id == selfie2){
        document.getElementById("div_pic2").innerHTML = '<img src="'+data_uri+'" id="img_uri2">'
        }
        if(img_id == selfie3){
          document.getElementById("div_pic3").innerHTML = '<img src="'+data_uri+'" id="img_uri3">'
          }
    });
  }
  
  function save(){
    console.log("save()")
    link = document.getElementById("href_link");
    image = document.getElementById("img_uri").src;
    link.href = image;
    link.click()
  }

  setTimeout(function()
  {
    img_id = "selfie1";
    take_snapshot();
    speak_data = "Taking your selfie in 3 seconds"
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
  }, 5000);

  setTimeout(function()
  {
    img_id = "selfie2";
    take_snapshot();
    speak_data = "Taking your selfie in 10 seconds"
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
  }, 10000);

  setTimeout(function()
  {
    img_id = "selfie3";
    take_snapshot();
    speak_data = "Taking your selfie in 15 seconds"
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
  }, 15000);