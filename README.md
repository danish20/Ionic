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

+ __Add Sidebar Navigation__

  In app.html add the following code

  ```html
  <ion-content>
    <ion-list>
      <ion-list-header>Navigation Header Here</ion-list-header>
      <button menuClose ion-item (click)="goToPage1()">Page 1</button>
      <button menuClose ion-item (click)="goToPage2()">Page 2</button>
    </ion-list>
  </ion-content>
  ```

+ __Adding Navigation Parameters__

  1. Inject NavParams
  2. Use Navigation Prameters refrence and do ```this.navParams.data;```


## Setting up Backend

+ __Firebase__

  Create a new application in firebase and import data using the JSON file.

+ __Create a Service__

  ```run ionic generate provider <ServiceName>```

+ __Fetching Data using Promise__

  ``` javascript
   return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/tournaments.json`).subscribe(res=>resolve(res.json()));
    })
  ```
  here ```baseUrl``` is the URL for Firebase DB. 

+ __Fetching Data using RxJS__

  ``` javascript
   return this.http.get(`${this.baseUrl}/tournaments-data/${TournamentId}.json`).map(response=>
    {
      this.currentTourney = response.json();
      return this.currentTourney;
    });
  ```
  here ```baseUrl``` is the URL for Firebase DB. 

+ __Display loading component__

  Inject the Loading Controller and then use following code:

  ``` javascript
  ionViewDidLoad() {

    let loader = this.loadingController.create({
      content:'Getting Tournaments...'
    });

    loader.present().then(() => {
     //Logic after load Complete Here
    });
  }
  ```

## Ionic Basic Components


A detail list of ionic components and their use can be found on [Ionic Website](https://ionicframework.com/docs/components/). Here I have added few components used in the app.


+ __Ionic Lists and Dividers__

Lists are used to display rows of information, such as a contact list, playlist or menu.

To add a list with a divider to your application write the following code:

```html
<ion-content>
  <ion-item-group>
    <ion-item-divider color="light">Divider Text Here</ion-item-divider>
    <ion-item>Item 1</ion-item>
    <ion-item>Item 2</ion-item>
  </ion-item-group>
</ion-content>
``` 

+ __Buttons and Icons__

Few styles of button are:

```html
<button ion-button>Default</button>
<button ion-button outline>Primary Outline</button>
<button ion-button round>Primary Round</button>
<button ion-button icon-only>
  <ion-icon name="star"></ion-icon>
</button>
```

+ __Cards__

Cards are used in various places and with new Material Design google is pushing they have become even more popular.

```html
<ion-card>

  <ion-card-header>
    Card Header
  </ion-card-header>

  <ion-card-content>
    <!-- Add card content here! -->
  </ion-card-content>

</ion-card>
```

+ __Grids__

Ionic use grid structure similar to that of Bootstrap and under the hood it uses flexbox to acheive this.

```html
<ion-grid>
  <ion-row>
    <ion-col col-12>This column will take 12 columns</ion-col>
  </ion-row>
  <ion-row>
    <ion-col col-6>This column will take 6 columns</ion-col>
  </ion-row>
</ion-grid>
```

+ __Date Time Picker__

With ionic working with date time is very easy and it provides different styles of date/time pickers depending upon the platform.

```html
<ion-item>
  <ion-label>Start Time</ion-label>
  <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="event.timeStarts"></ion-datetime>
</ion-item>
```

+ __Adding Alerts and Toasts__

To add alert to your app, use the following code:

```javascript
import { AlertController } from 'ionic-angular';

export class MyPage {

  constructor(public alertCtrl: AlertController) { }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }
}
```

To add toast message use following code:

```javascript
import { ToastController } from 'ionic-angular';

export class MyPage {

  constructor(public toastCtrl: ToastController) { }

  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'User was added successfully',
      duration: 3000
    });
    toast.present();
  }
}
```