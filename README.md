e2e
===

The end-to-end tests for [app.wipster.io](https://app.wipster.io). 
  
Prerequisite
------------

Firstly, you will need to have Node<sup>[1]</sup> installed.

You will also need to install the following:

###Protractor

Install Protractor<sup>[2]</sup> globally 

```
npm install -g protractor
```

This will install two command line tools, `protractor` and `webdriver-manager`.

Use the `webdriver-manager` tool to download the necessary binaries.

```
webdriver-manager update
```

###TSD

TSD<sup>[3]</sup> is a TypeScript definition manager, install it globally:

```
 npm install -g tsd
```

Getting Started
---------------

Getting started should be as simple as running these commands from the root of the project

 ```
 npm install
 ```
 
 ```
 grunt
 ```
 
 and to run the tests
 
 ```
 protractor conf.js
 ```

1. - [https://nodejs.org/](https://nodejs.org/)
2. - [https://angular.github.io/protractor/#/](https://angular.github.io/protractor/#/)
3. - [http://definitelytyped.org/tsd/](http://definitelytyped.org/tsd/)
