# Final Deployed Build
[Link](https://boisterous-nasturtium-93deed.netlify.app/)

# Why I made this Project

I wanted to make a complex app that could be used in a real world situation. I also wanted to build something that I had not seen done before. This way I was challenged and forced to problem solve while learning a lot of front-end practices, and honing my skills. 

The most important thing to me while building the app however was making it user friendly. I built it while always having the user in mind in order for it to be as simple and helpful for the user as possible. 

# How I built this project

I built this projec in React, making use of redux-toolkit. There were a lot of components and many were reused throughout the app.  There were also a lot of states being updated frequently and shared across the whole app. Redux's state management really helped with keep everything organized and easy to debug. The Chrome Extension Redux Dev Tools helped a lot throughout the project. 
I used an api from The Movie DataBase. To test my endpoints and make sure I could set the right parameters, I used Postman. 
For my styling orgaization, I used a CSS Module approach. With a lot of components, I wanted to keep the styles for many components seperate to eliminate any bugs.  

# Some key code features
Slice with complex features [Example Code](https://github.com/scoops52/Watchr/blob/482716d884ac44351f26519bccd38e006ec7422d/src/features/moviesListSlice.js)

Component making use of Redux Toolkit's state management [Example Code](https://github.com/scoops52/Watchr/blob/482716d884ac44351f26519bccd38e006ec7422d/src/components/UserTwo/UserTwo.jsx)

Component reused throughout app [Example Code](https://github.com/scoops52/Watchr/blob/482716d884ac44351f26519bccd38e006ec7422d/src/components/SharedMovieCard/SharedMovieCard.jsx)

# What I would do better next time:

I would planned out the app more thouroughly in advance. I had planned out how I wanted the user flow to be, and the logic needed. However the design elements needed was not planned out as much. Planning out the process more would have made the file structure better, as well as eliminated some redudant code. 

I learned a lot from building this project however, and am excited to take what I have learned into my next project. 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
