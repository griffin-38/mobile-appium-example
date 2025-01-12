# iOS Mobile App Automation Testing

Test automation framework for iOS native mobile applications using Appium. This project provides a robust suite of automated tests to ensure quality and reliability of our iOS mobile applications.

## Key Features
- Built with Appium for iOS native app testing
- Supports end-to-end automated test scenarios
- Provides reusable test components and utilities
- Includes detailed test reporting and logging
- CI/CD integration ready

## Prerequisites
- Xcode
- Node.js
- Appium
- iOS Simulator/Device

## Quick Setup Guide
1. Install Visual Studio Code here: https://code.visualstudio.com/
2. Download and Install Appium Desktop here: http://appium.io/downloads.html 
3. Clone this repository using the Clone with SSH link  
  example: `git clone git@github.com:project.git`
4. Open the terminal and Install Homebrew see: https://brew.sh/
5. Using the same terminal, Install yarn see: https://yarnpkg.com/lang/en/docs/install/#mac-stable
6. Once yarn is installed successfully, open Visual Studio Code, open its integrated terminal, and type `yarn`
 **Note** the yarn command will install all dependencies required located in the `package.json` file
 7. Install carthage using `brew install carthage`
 8. Install appium doctor using `npm i -g appium-doctor`
 9. Create a script named `local.env.var.js` under the `config` directory that should contain the following boilerplate:
 ```
 const localEnvVars = {
  TURN_ACCOUNT_USERNAME: 'YOUR_USERNAME',
  TURN_ACCOUNT_PASSWORD: 'YOUR_PASSWORD'
};

module.exports = localEnvVars;
 ```


## Installing the App Under Test Locally
* All applications under test (e.g. iOS or Android apps) will go under the `build` directory

1. Before being able to install either the iOS or Android app in the `build` directory, one will need access to the following repositories:

* Turn iOS Repo: https://github.com/project-name
* Turn Android Repo: TBD (Ask Sweta for details)

### iOS
1. Install XCode
2. Clone the repo
3. Change the repo's branch to develop. In the terminal the command is `git checkout develop` (Make sure to pull in the latest changes)
4. Open XCode and the ios-turncar project
5. On xCode, select file -> workspace settings
6. Under the Per-User Workspace settings, change the Derived Data to Custom Location
7. Copy the current location of your build directory in the text field  (under Derived Data)
example:
![alt text](https://github.com/project-name/build_path.png)
8. Select the build button on xCode (play button)

**Note** If build installation is successful, the result should look like the following:
![alt text](https://github.com/project-name/build_path.png)

### Android
1. TBD installation instructions


## Starter Commands
On the terminal, the following commands can be entered to run the appium test:
* `yarn test`
* `yarn ios.app`

**Note** To see all possible commands to run look in the `package.json` file under the `scripts` object

## Putting it all together
1. Open Appium Desktop and start the server
2. In `wdio.io.app.conf.js` change the `appium:app` value to the absolute path of where the test app under test was installed under.
![alt text](https://github.com/turncar-appium/blob/master/instruction_images/change_build_installation_path.png)
3. In visual studio code's terminal type: `yarn ios.app`

**Example**
![alt text](https://github.com/turncar-appium/blob/master/instruction_images/build_example.gif)


## Inspecting UI Elements
* Install Appium Desktop
* Start Appium Server
* Click on the magnifying glass icon to begin inspector mode
* Under JSON Representation section use the following 2 configs:
### iOS
```
{
  "deviceName": "iPhone XR",
  "platformVersion": "12.2",
  "orientation": "PORTRAIT",
  "app": "/Users/name/Documents/turncar-appium/build/ios/Turn.app",
  "fullReset": true,
  "newCommandTimeout": 60,
  "platformName": "iOS",
  "automationName": "XCUITest"
}
```

### Android
```
{
  "platformName": "Android",
  "deviceName": "Nexus_5X_API_26",
  "platformVersion": "8.0",
  "orientation": "PORTRAIT",
  "automationName": "UiAutomator2",
  "app": "/Users/name/Documents/turncar-appium/build/android/app-debug.apk",
  "fullReset": true,
  "newCommandTimeout": 120,
  "appPackage": "com.turncar.androidapp",
  "appActivity": "com.turncar.androidapp.ui.SplashActivity"
}
```

**Note** Will need to change the following fields:
* `app` should be set to the location on the local machine where the app is installed
* `deviceName` should be the name of the emulator to be used. Found in xCode Simulators or Android Studio AVD
* `platformVersion` installed emulator versions should be found in xCode for iOS or Android Studio for Android
# mobile-appium-example
