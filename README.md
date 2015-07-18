e2e
===

The end-to-end tests for [app.wipster.io](https://app.wipster.io). 
  
Prerequisite
------------

Firstly, you will need to have Node<sup>1</sup> installed.

You will also need to install the following:

###Protractor

Install Protractor globally 

```
npm install -g protractor
```

This will install two command line tools, `protractor` and `webdriver-manager`.

Use the `webdriver-manager` tool to download the necessary binaries.

```
webdriver-manager update
```

###TSD

TSD is a TypeScript definition manager, install it globally:

```
 npm install -g tsd
```

Getting Started
---------------

Getting started should be as simple as running these commands from the root of the project
 
 ```
 grunt
 ```
 
 and 
 
 ```
 protractor conf.js
 ```

Technologies
------------
###Grunt
###Grunt-ts
###Grunt-tsd
###Grunt-protractor-runner
###PageObjects


<sup>1</sup> - [https://nodejs.org/](https://nodejs.org/)

<sup></sup> - [https://angular.github.io/protractor/#/](https://angular.github.io/protractor/#/)

<sup></sup> - [http://definitelytyped.org/tsd/](http://definitelytyped.org/tsd/)

<sup></sup> - [http://www.typescriptlang.org/](http://www.typescriptlang.org/)