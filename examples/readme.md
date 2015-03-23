#Intel IoT on Galileo with mobile companion app

Welcome to the examples files from the last workshop. During the workshop we used the [Intel Development Kit for IoT (IoTDK)](https://software.intel.com/en-us/iot/devkit) to create and test applications for the Intel Galileo maker board. You can open and run both applications with the [Intel XDK IoT Edition](https://software.intel.com/en-us/html5/xdk-iot).

##[iotapp-local-temperature](iotapp-local-temperature)
This app shows how to run a node.js server on an Intel Galileo board. It uses a temperature sensor to periodically read the current room temperature. That temperature is shown on an LCD display. Additionally the server accepts WebSocket connection via Socket.io. Connected clients will be periodically informed about the current temperature.

![Screenshot](output_lcd_display.jpg)

##[iot-companion-spartakiade-app](iot-companion-spartakiade-app)
The “Spartakiade App” is an hybrid app which runs on all smartphones. It utilizes Apache Cordova, AngularJS and the Ionic Framework. It connects to the node.js server and displays the last captured temperatures via chart.js. 

![Screenshot](screenshot_spartakiade_app.png)



**<hr>[« read more (German)](readme.md)**