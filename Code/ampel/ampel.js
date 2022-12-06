    // liest und speichert den Inhalt HTML-Elements durch ID name
    document.getElementById("text").innerHTML = "";

    //variable Wetter wird später mit Api Wetter verbunden um richtige Grad zu erhalten
    let wetter = -5;

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
        if(wetter == 0){
        orangeBlinkend();
        }else if(wetter < 0){
        rotBlinkend();
        }else if(wetter > 0){
        grunBlinkend();
        }

