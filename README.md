## Website

https://liblab-web.firebaseapp.com/

## Info

Work in progress ecommerce. Users can register and access to their personal data, orders, cart, wishlist. Users can request a size when it is out of stock.

## Technologies used

### Front-End

React - JavaScript library for building user interfaces.
React Redux - Predictable state container for JavaScript applications.
Redux Saga - Side effects management with redux integration.
React Router - Handle React single page applications routes.
React Hooks - Handle State, Routes, manage Redux and replace Lifecycle Methods.
React Redux Firestore - Redux bindings for Firebase and Firestore.
Reselect - Simple “selector” library for Redux using memoization.
Styled Components - Utilising tagged template literals and the power of CSS, allows you to write actual CSS code to style your components.
Google Autocomplete API - Handle user addresses.

### Back-End

### Firebase

Firebase Auth to control user registration and authentication.
Firestore NoSQL Database.
Firebase Storage to store the users files.
Google Cloud Functions to execute on demand backend functions, like image and video conversion before storaging using sharp and ffmpeg libraries, under node.js enviorment.
Google Cloud Tasks to dispatch functions in a certain time.
Node.js - JavaScript runtime built on Chrome's V8 JavaScript engine used to build google cloud functions.
