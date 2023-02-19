let wetter = {
   //API-Key generieren
   "apiKey": "d6f69e760f7b71f51f421a6f9d21d6bf",
   //Den Server mit der API via fetch verbinden
   //"https://api.openweathermap.org/data/2.5/weather?q=city&units=metric&appid
   //Die Seite mit der Klasse "Stadt" und APIKey aufrufen
   fetchwetter: function(stadt){
       fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
       + stadt 
       + "&units=metric&appid="
       + this.apiKey
       )
       .then((response) => response.json())
       .then((data) => this.displaywetter(data));
   },
   //Von der API Seite die Attributen schreiben und mit den Attributen unseres Systems einbinden
   displaywetter: function(data) {
       const { name } = data;
       let { icon, description } = data.weather[0];
       const { temp } = data.main;
       const { speed } = data.wind;  
       document.querySelector(".stadt").innerText = name;
       document.querySelector(".icon").src="http://openweathermap.org/img/wn/" + icon + ".png";
       document.querySelector(".beschreibung").innerText = description;
       document.querySelector(".temperatur").innerText = temp + "°C";
       document.querySelector(".wind").innerText = "Wind Geschwindigkeit " + speed + " Km/h";
       document.querySelector(".wetter").classList.remove("lädt"); 
       description = description.toLowerCase()
       if (description.includes("cloud")){
        orangeBlinkend();
        }else if(description.includes("fog")){
        rotBlinkend();
        }else if(description.includes("clear") || description.includes("sun")){
        grunBlinkend();
    }
   },
   //Die Funktion "suchen" erstellen
   suchen: function(){
       this.fetchwetter(document.querySelector(".suchenbar").value);
   },
};
   //Die Funktion durch den Klick Button betätigen
document.querySelector(".suchen button").addEventListener("click", function(){
   wetter.suchen();
});
   //Die Funktion durch Enter drücken betätigen
document.querySelector(".suchenbar").addEventListener("keyup", function(event){
   if(event.key == "Enter"){
       wetter.suchen();
   }
});
//2.Code
// liest und speichert den Inhalt HTML-Elements durch ID name
document.getElementById("text").innerHTML = "";

//Variable Wetter wird später mit Weather-API verbunden um richtigen Temperatur-Wert zu erhalten


//Rotes Licht anschalten
function rotBlinkend() {
    lampeAus(); //alle lampen ausshalten
  document.getElementById('stopLight').style.backgroundColor = "red"; //liest der lampe von html-elements durch ID name und speichert mit hintergrundfarbe rot
  document.getElementById("text").innerHTML = "Strom ist zu teuer"; //an folgende html Element folgende text ausgeben

}

//Oranges Licht anschalten
function orangeBlinkend() {
    lampeAus(); //alle lampen ausschalten
  document.getElementById('slowLight').style.backgroundColor = "orange"; //liest der lampe von html-elements durch ID name und speichert mit hintergrundfarbe orange
  document.getElementById("text").innerHTML = "Strom ist mittel"; //an folgende html Element folgende text ausgeben
}

//Grünes Licht anschalten
function grunBlinkend() {
    lampeAus(); //alle lampen ausschalten
  document.getElementById('goLight').style.backgroundColor = "green"; //liest der lampe von html-elements durch ID name und speichert mit hintergrundfarbe rot
  document.getElementById("text").innerHTML = "Strom ist gunstig"; //an folgende html Element folgende text ausgeben
}

//Funktion alle drei Lichter der Ampel ausschalten
function lampeAus() {
  document.getElementById('stopLight').style.backgroundColor = "black"; 
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
}