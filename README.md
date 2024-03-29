# mobile_app

A mobile application developed using Expo and React Native.

## UX mejoramiento de la experiencia de usuario

Improving user experience through intuitive design and functionality.

## Integrantes

- Oscar Fonseca
- David Sánchez

## Prerequisites

Before running the application, ensure that you have the following installed:

- **Node.js**: Necessary for running the React Native CLI and Expo. Download it from [Node.js](https://nodejs.org/).
- Tested with Node (v18.19.0)
- **Android Studio & Android SDK**: The official IDE for Android development, which includes the Android SDK and emulator. Download Android Studio from [Android Developer Website](https://developer.android.com/studio).
- **JDK 8**: React Native requires JDK 8. Instructions for macOS and Windows can be found on the [Oracle website](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html).
- **Expo CLI**: For projects using Expo, install the CLI via npm with `npm install -g expo-cli`.

## Environment Setup

### Android Studio and Android SDK

1. Install Android Studio and follow the setup wizard to install the necessary SDK packages.
2. Open Android Studio, go to `Settings > Appearance & Behavior > System Settings > Android SDK`, and make sure the required SDK platforms and tools are installed.

### JDK 8

Ensure JDK 8 is installed on your system. You might need to set the `JAVA_HOME` environment variable to the JDK's installation path.

### Environment Variables

Configure your system's environment variables for Android SDK:

- **macOS/Linux**:
  ```
  export ANDROID_HOME=$HOME/Library/Android/sdk
  export PATH=$PATH:$ANDROID_HOME/emulator
  export PATH=$PATH:$ANDROID_HOME/platform-tools
  ```
- **Windows**:
  Add the above paths to your system's environment variables via the Control Panel.

### Android Virtual Device (AVD)

Use Android Studio's AVD Manager to create an Android Virtual Device (Emulator) for testing your application.

## Running the App

1. **Connect a physical device via USB** with USB debugging enabled or **start an Android emulator**.
2. Navigate to your project directory in the terminal.
3. Run the application:
   ```
   npm run android
   ```

This command will start the Metro bundler and launch the app on the connected device or emulator.
