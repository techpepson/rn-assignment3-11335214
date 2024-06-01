![screenshot4](https://github.com/techpepson/rn-assignment3-11335214/assets/124635484/d099cb87-9cd2-42d4-9813-1b4909c731ee)
![screenshot3](https://github.com/techpepson/rn-assignment3-11335214/assets/124635484/d180a0cd-2ae4-4c07-8b9c-db32b61fda78)
![screenshot2](https://github.com/techpepson/rn-assignment3-11335214/assets/124635484/ffc80b69-be11-438d-b18e-89d7b50c5dcb)
![screenshot1](https://github.com/techpepson/rn-assignment3-11335214/assets/124635484/83e73f4b-aa1c-4a6f-9856-e6e15384b62f)
<<<<<<< HEAD

# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- # [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

# rn-assignment3-11335214

A repository of the mobile app in assignment 3

> > > > > > > 105bf6d676bdccaf319daf710a31c6ece7b8886f

# Student ID
11335214

# Description of components

- FlatList: In the project, have a FlatList that I use to map over data elements in an array. These elements in the array get mapped over and rendered as a list. This component takes in some props such as data(the data elements to render in the list), keyExtractor(this is a key that is associated to each data item to set it up for mapping), renderItem(this is a prop that actually performs the mapping of the data elements). Other props exist though, but I would like to talk about these for now.
- SafeAreaView: This is a component that helps to align the elements in the app or the components in the array rightly with the mobile screen. It displays elements in a safe area on the screen to prevent them from overlapping with some already existing parts of a screen such as the status bar.
- ScrollView: The ScrollView component is a component that enables auto scrolling when the elements of the screen exceed the normal height of the screen. Without it, scrolling will not be possible.
- Image: The Image component is a component that is used to render images. This is similar to the img tag in html. The Image takes in a source prop that is the source of the image to render.
- Text: The Text component is used to render normal text elements.
- TextInput: The TextInput component is used to render elements that take in user inputs.
- View: The View is one primary component that wraps other components as a container.
- KeyboardAvoidingView: This is a component that is used to prevent the keyboard from interrupting with other views when invoked.
