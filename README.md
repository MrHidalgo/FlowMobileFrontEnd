# Flow Mobile Application

#### Structure Front-End/Back-End application

    FlowMobile/
      ├─ app/  (Front-End files - Ionic)
      ├─ bin/  (Helper scripts)
      ├─ doc/  (Documentation files)
      ├─ lib/  (Back-End helpers files)
      ├─ test/ (Testing scripts)
      ├─ .gitignore  
      ├─ server.js
      ├─ README.MD 
      ├─ package-lock.json 
      ├─ gulpfile.js
      ├─ robots.txt 
      └─ package.json

#### Installation:

Please make sure latest Node 6 LTS and NPM 3+ are installed.

Then, install the CLI globally (you may need sudo):

    $ npm install -g ionic@latest
    
#### Getting Started (to local testing):

Once you **cd** into your project’s directory...

    $ cd app
    
... a few new commands become available to you, such as ionic serve

    $ npm i
    $ ionic serve
    
While running **ionic serve**, changes you make to your app code will automatically refresh the browser.

You can list available commands with the command: 

    $ ionic --help 
    
#### Using Cordova:

Integrate Ionic with Cordova to bring native capabilities to your app.

    $ npm install -g cordova
    $ ionic cordova --help
    $ ionic cordova run ios
    
The ionic cordova commands (aside from ionic cordova resources) wrap the Cordova CLI. You can read about the differences in each command’s --help page. To learn more about the commands, see the Cordova CLI Reference documentation.

- For iOS development, see the iOS Platform Guide.
- For Android development, see the Android Platform Guide.
    
#### Troubleshooting:

If you’re having trouble with the **Ionic CLI**, you can try the following:

- Make sure you’re on the latest version of the CLI. Update with:

        $ npm update -g ionic.
    
- Try running commands with the --verbose flag, which will print DEBUG messages.

#### Project Structure:

    app/
    ├─ ionic.config.json        (Ionic project config file)
    ├─ package.json
    ├─ src/
    │  ├─ app/
    │  │  ├─ app.component.ts   (root component for your app)
    │  │  ├─ app.html           (app component template)
    │  │  ├─ app.module.ts      (NgModule for app component)
    │  │  ├─ app.scss           (global SCSS)
    │  │  └─ main.ts            (bootstrap file)
    │  ├─ assets/               (put your images, etc. here)
    │  ├─ pages/                (contains the page components for your app)
    │  ├─ theme/
    │  │  └─ variables.scss     (see https://ionicframework.com/docs/theming)
    │  └─ index.html            (main html file)
    └─ www/                     (build output directory)

