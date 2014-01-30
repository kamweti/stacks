Stacks
==========================

Stacks is an book application built with [apache cordoova](http://cordova.apache.org/docs/en/3.3.0) that is currently being developed 
for iOS but can run on almost all of cordova's supported mobile platforms


# Dependencies

[Bower](http://bower.io)

[Grunt](http://gruntjs.com) ( only for development )


## Installation

```bash
$ git clone https://github.com/ryanhbowman/sqlite
$ cd sqlite
$ cordova platform add ios
$ cordova plugin add https://github.com/wildabeast/BarcodeScanner
$ cordova plugin add https://github.com/lite4cordova/Cordova-SQLitePlugin
$ cordova plugin add org.apache.cordova.console
```

This will install the ios platform cordova plugins.


### Installing bower components

```bash
$ cd www
$ bower install
```


### Setting up the development environment

Make sure you have grunt installed, then run

```bash
$ npm install 
$ grunt
```

On a new terminal window

```bash
$ cordova serve ios
```

This launches the address (http://localhost:8000/ios/www/) with the application loaded for preview. 

### Building the application on Xcode

```bash
$ open -a Xcode platforms/ios
```
