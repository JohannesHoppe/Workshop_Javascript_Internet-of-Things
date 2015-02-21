#Spartakiade 2015

<p align="center"><img src="images/spartakiade-logo.png" width="50%"></p>

<p align="center"><img src="images/resource-javascript.png" height="55"><img src="images/resource-arduino.png" height="55"><img src="images/resource-nodejs.png" height="55"><img src="images/resource-angularjs.png" height="55"><img src="images/resource-ionic.png" height="55"><img src="images/resource-cordova.png" height="55"></p>


Jetzt Termin reservieren.  
Die nächste Spartakiade findet am 21.–22. März 2015 in Berlin statt.

Web: http://spartakiade.org/  
Twitter: http://twitter.com/spartakiade_org  
Google+: https://plus.google.com/u/0/+Dotnet-Leipzig-DE  

# Workshop: IoT mit JavaScript<br>von Johannes Hoppe

Ein Galileo Board (Arduino), das Grove Starter Kit und ganz viel JavaScript mit Node.js und AngularJS.

## Inhalt

1. [Aufgabe](#aufgabe)
2. [Hardware-Set](#hardware)
3. [Software](#software)
4. [Wichtig: Teilnehmer-Checkliste](#checkliste)

<hr>

<a name="aufgabe"></a>
## 1. Aufgabe

In diesem Workshop steht der Spaß mit dem Arduino-Board und der Programmiersprache JavaScript im Vordergrund. Deine Kreativität ist gefragt: Überlege dir eine Anwendung für die diversen Sensoren wie Touch, Licht und Temperatur sowie für die diversen Aktoren wie Relais, LED und Piezo-Signalgeber. Setze anschließend deine Idee im Team mit dem "Intel XDK IoT Edition" um. Es steht dir ein Galileo-Board mit dem modularen Grove-Bausatz zur Verfügung. Johannes unterstützt die Teams je nach Wissensstand mit kurzen Instruktionen zu Node.js, AngularJS, Ionic und Cordova. 

Idealerweise bringen möglichst viele Teilnehmer ebenso ein eigenes Hardware-Set mit. **Bitte beachte hierzu die Hinweise auf dieser Seite.**

<a name="hardware"></a>
## 2. Hardware-Set

Johannes bringt folgendes Hardware-Set **einmal** mit:

1. Board: [Intel Galileo Gen 2](galileo_board.md)
2. Base Shield und Bausatz: [Seeed Studio Grove starter kit plus - Intel IoT Edition for Intel Galileo Gen 2](seeed_studio_grove_starter_intel_iot.md)

[![Galileo Board](images/galileo_gen_2_board.jpg)](galileo_board.md)
[![Starter Kit](images/devkit_image2.jpg)](seeed_studio_grove_starter_intel_iot.md)

Damit lassen sich die erstellten Ideen sofort auf einem Arduino-Board ausprobieren. Idealerweise bringen möglichst viele Teilnehmer ebenso ein eigenes Hardware-Set mit, dann sinkt die Wartezeit und es steigt der Spaß-Faktor. Eine nähere Beschreibung und Links zu deutschen Online-Shops sind auf den beiden oben verlinkten Seiten zu finden. Das Hardware-Set hat einen Preis von ca. 160€ ohne Versandkosten. 

<a name="software"></a>
## 3. Software

Intel hat für das Galileo Board ein "Yocto 1.6" Linux vorgesehen. Auf diesem Betriebssystem lassen sich Dämons wie LighttPD and Node.js ausführen. Das Board-Boot Image wird auf eine SD-Karte kopiert kann hier herunter geladen werden:

[Boot-Image (207MB)](https://software.intel.com/sites/landingpage/iotdk/board-boot-image.html)

Anleitungen zum Schreiben des Boot-Images auf die SD-Karte:
* [Windows](https://software.intel.com/en-us/node/530353)
* [Mac OS](https://software.intel.com/en-us/node/530415)
* [Linux](https://software.intel.com/en-us/node/532598)

Eine 8GB SD liegt dem Starter Kit bei. <strong>Johannes wird bereits alle SD-Karten vorbereitet haben!</strong>

# Intel XDK IoT Edition (Node.js)

Jeder Teilnehmer sollte bereits das "Intel XDK IoT Edition" installiert haben. Es beinhaltet eine IDE um die JavaScript-Programme (Node.js) zu entwickeln und diese auf das Board zu deployen.

**Download XDK**: https://software.intel.com/en-us/html5/xdk-iot  
(verfügbar für Apple OS X, Microsoft Windows und Linux)


## 4. Getting Started

Ein paar Anleitungen, damit der Einstieg leichter fällt: 
&raquo; [Getting Started (onboad LED Blink)](getting-started)


<a name="checkliste"></a>
## 5. Teilnehmer-Checkliste

Als Teilnehmer solltest du mitbringen:

1. Laptop (Win, Mac oder Linux) mit SD-Kartenleser
2. Ein installiertes "Intel XDK IoT Edition"

Idealerweise bringen möglichst viele Teilnehmer ebenso ein eigenes Hardware-Set mit:

1. [Intel Galileo Gen 2](galileo_board.md) - ca. 80€
2. [Seeed Studio Grove starter kit plus - Intel IoT Edition for Intel Galileo Gen 2](seeed_studio_grove_starter_intel_iot.md) - ca. 80€