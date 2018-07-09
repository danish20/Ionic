# Ionic
My Attempt at Learning Ionic 3

## Setup Ionic

+ Step 1: __Installing Ionic__  
  ```
    run npm install -g ionic cordova
  ```  
   This will install both ionic and cordova on your machine. Cordova is required for native functionalities like using GPS, Camera and Vibration etc. 

+ Step 2:  __Starting a new project__
  ```
    run ionic start --list 
  ```
  This command will list all the available templates that you can use to start your project. Some of the templates include:

  - tabs ............... ionic-angular A starting project with a simple tabbed interface
  - blank .............. ionic-angular A blank starter project
  - sidemenu ........... ionic-angular A starting project with a side menu with navigation in the content area
  - super .............. ionic-angular A starting project complete with pre-built pages, providers and best practices for Ionic development.
  - conference ......... ionic-angular A project that demonstrates a realworld application
  - tutorial ........... ionic-angular A tutorial based project that goes along with the Ionic documentation
  - aws ................ ionic-angular AWS Mobile Hub Starter
  - tabs ............... ionic1 A starting project for Ionic using a simple tabbed interface
  - blank .............. ionic1 A blank starter project for Ionic
  - sidemenu ........... ionic1 A starting project for Ionic using a side menu with navigation in the content area
  - maps ............... ionic1 An Ionic starter project using Google Maps and a side menu

+ Step 3:  __Creating New Project__
  ```
    run ionic start <project-name> <template> 
  ```
  You can create a new project like ```ionic start my-first-app tabs```. This will create a tabs app for you.
  
 + Step 4:  __Running App__
   Go to your newly created folder which has your application files. 
    ```
    run cd my-first-app
    ```
   Now to run the application
   ```run ionic serve```
   This will run your application on local server. You can open application by going to the following address in your browser
   `localhost:8100` or `127.0.0.1:8100`

## The Navigation Stack

+ __Creating Pages__


  ```run ionic generate page <PageName>```


  If you don't want deeplinking capabilities then use:


  ```run ionic generate page <PageName> --no-module```


+ __Add new page to navigation stack__

  1. Inject Navigation Controller
  2. Use Navigation Controller refrence and do ```this.navCtrl.push(NewPage);```

+ __Remove a page from navigation stack__

  1. Inject Navigation Controller
  2. Use Navigation Controller refrence and do ```this.navCtrl.pop();```

+ __Go to root of navigation stack__

  1. Inject Navigation Controller
  2. Use Navigation Controller refrence and do ```this.navCtrl.popToRoot();```
