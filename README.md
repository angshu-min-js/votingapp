#This is a guide for the Basejump: Voting App

Let’s start off by scaffolding the mean app using Yo:

1.	Start the cloud 9  workspace
```
2.	$ rm -rf * && echo "export NODE_PATH=$NODE_PATH:/home/ubuntu/.nvm/v0.10.35/lib/node_modules" >> ~/.bashrc && source ~/.bashrc && npm install -g yo grunt grunt-cli generator-angular-fullstack && yo angular-fullstack
```
This would clean your workspace and scaffolds the angular-fullstack application

3.	Let’s create & start the mongoDB and also create the data directory

```
$ mkdir data && echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod && chmod a+x mongod && ./mongod
```
##The project structure
```
Let’s take a moment to look at the project so far so we have a good idea where everything is.
├── client
│   ├── app                 - All of our app specific components go in here
│   ├── assets              - Custom assets: fonts, images, etc… 
│   ├── components          - Our reusable components, non-specific to to our app
│ 
├── e2e                     - Our protractor end to end tests
│
└── server
    ├── api                 - Our apps server api
    ├── auth                - For handling authentication with different auth strategies
    ├── components          - Our reusable or app-wide components
    ├── config              - Where we do the bulk of our apps configuration
    │   └── local.env.js    - Keep our environment variables out of source control.
    │   └── environment     - Configuration specific to the environment the server is being run in
    └── views               - Server rendered views
That’s an overview of the structure, lets drill down little on a client component.
main
├── main.controller.js      - Controller for our main route
├── main.controller.spec.js - Our test
├── main.html               - Our view
├── main.js                 - Registers the route
└── main.css               - Our styles
```

###Now it’s time to tear apart the old site and change into a voting app.


**Starting with the DB schema: server/api/thing/thing.model.js**

```
var ThingSchema = new Schema({
  icon: String,
  name: String,
  info: String,
  active: Boolean
});
```
**Now its time to change the seed.js: server/config/seed.js**

```
Thing.create({
    icon: 'fa fa-bolt',
    name : 'Live Results',
    info : 'Live graphs show your poll results immediately in easy to an easy to understand format. One graph will not provide the whole picture, that\'s why we provide multiple graph types to better describe your results.'
  }, {
    icon: 'fa fa-globe',
    name : 'Works Everywhere',
    info : 'Traditional desktop computers now represent only 30% of Internet traffic. Your poll must work on the tablets, smart phones, netbooks and notebooks that your visitors are using. Our responsive designs do just that.'
  }, {
    icon: 'fa fa-facebook',
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  });
```
**Now it’s time to change the main.html: client/app/main/main.html**

```
div class="InfoBar">
  <div class="row">
      <ul class="col-lg-4 col-md-4 col-sm-4" ng-repeat="thing in awesomeThings">
       <i class="{{thing.icon}}"></i>
        <h2>{{thing.name}}</h2>
        <p>{{thing.info}}</p>
    </div>
</div>
```
>And also change the main.css accordingly. 

###Now we are done with the main landing page and it’s time to set the poll dashboard.

##Adding the New Polls & My Polls functionalities

###Checking the user login by using the Auth function

```
//main.controller.js
$scope.isLoggedIn = Auth.isLoggedIn;
```

```
//main.html

<div class="container" ng-hide="isLoggedIn()">
    <h1>VotePlex</h1>
    <p class="lead">Create custom polls with live results.</p>
    <a href="/signup" class="btn btn-lg btn-success">Sign Up</a>
  </div>
  <div class="container" ng-show="isLoggedIn()">
    <h1>Dashboard</h1>
    <p class="lead">What would you like to do today?</p>
    <button ng-click="setPage('newPoll')" class="btn btn-lg btn-success">New Polls</button> <button ng-click="setPage('myPolls')" class="btn btn-lg btn-primary">My Polls</button>
  </div>
```
##Creating a new route for newPoll, myPolls:


