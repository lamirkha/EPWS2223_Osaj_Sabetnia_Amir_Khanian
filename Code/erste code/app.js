let wetter = {
   //API Key beantragen
   "apiKey": "d6f69e760f7b71f51f421a6f9d21d6bf",
   //Den Server mit dem API durch fetch verbinden
   //"https://api.openweathermap.org/data/2.5/weather?q=city&units=metric&appid
   //Die Seite mit der Klasse "Stadt" und APIKey aufrufen.
   fetchwetter: function(stadt){
       fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
       + stadt 
       + "&units=metric&appid="
       + this.apiKey
       )
       .then((response) => response.json())
       .then((data) => this.displaywetter(data));
   },
   //Von der API Seite die Atributen schreiben und mit den Atributte unseres Systems einbinden
   displaywetter: function(data) {
       const { name } = data;
       const { icon, description } = data.weather[0];
       const { temp } = data.main;
       const { speed } = data.wind;  
       document.querySelector(".stadt").innerText = name;
       document.querySelector(".icon").src="http://openweathermap.org/img/wn/" + icon + ".png";
       document.querySelector(".beschreibung").innerText = description;
       document.querySelector(".temperatur").innerText = temp + "°C";
       document.querySelector(".wind").innerText = "Wind Geschwindigkeit " + speed + " Km/h";
       document.querySelector(".wetter").classList.remove("lädt"); 
   },
   //Die Funktion suchen erstellen
   suchen: function(){
       this.fetchwetter(document.querySelector(".suchenbar").value);
   },
};
   //Die Funktion durch den Click Button betätigen
document.querySelector(".suchen button").addEventListener("click", function(){
   wetter.suchen();
});
   //Die Funktion durch den Enter drücken betätigen
document.querySelector(".suchenbar").addEventListener("keyup", function(event){
   if(event.key == "Enter"){
       wetter.suchen();
   }
});
console.log("Test")
//2.Code
// liest und speichert den Inhalt HTML-Elements durch ID name
document.getElementById("text").innerHTML = "";

//variable Wetter wird später mit Api Wetter verbunden um richtige Grad zu erhalten


//Rote Lampe anschlaten
function rotBlinkend() {
    lampeAus(); //alle lampen ausshalten
  document.getElementById('stopLight').style.backgroundColor = "red"; //liest der lampe von html-elements durch ID name und speichert mit hintergrundfarbe rot
  document.getElementById("text").innerHTML = "Strom ist zu teuer"; //an folgende html Element folgende text ausgeben

}

//Orange Lampe anschalten
function orangeBlinkend() {
    lampeAus(); //alle lampen ausshalten
  document.getElementById('slowLight').style.backgroundColor = "orange"; //liest der lampe von html-elements durch ID name und speichert mit hintergrundfarbe orange
  document.getElementById("text").innerHTML = "Strom ist mittel"; //an folgende html Element folgende text ausgeben
}

//Grüne lampe anschalten
function grunBlinkend() {
    lampeAus(); //alle lampen ausshalten
  document.getElementById('goLight').style.backgroundColor = "green"; //liest der lampe von html-elements durch ID name und speichert mit hintergrundfarbe rot
  document.getElementById("text").innerHTML = "Strom ist gunstig"; //an folgende html Element folgende text ausgeben
}

//funktion alle lampen ausshalten alle drei lampen
function lampeAus() {
  document.getElementById('stopLight').style.backgroundColor = "black"; 
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
}
  
    /*wenn Wetter gleich null ist wird dann orange lampe angeschaltet.
    wenn Wetter kleiner als 0 ist wird dann rote lampe angeschaltet
    wenn Wetter großer als 0 ist wird dann grune lampe angeschaltet*/
    if (document.getElementById('besch') == "Fog"){
    orangeBlinkend();
    }else if(beschreibung == "Broken Clouds"){
    rotBlinkend();
    }else if(beschreibung == "Clear Sky"){
    grunBlinkend();
}