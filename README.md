# Project-4-webpck-scss-ServiceWorkers

This project is the fourth assignment in the Udacity Front End Web Developer Nanodegree program. 
The goal is to create a web tool that allows users to perform Natural Language Processing (NLP) on articles or blogs from external websites. 
When a user submits the URL of an article, the web page displays sentiment analysis results obtained from the meaningcloud API, based on the article's content.
## Introduction to Natural Language Processing
Natural Language Processing (NLP) is a field of artificial intelligence that focuses on enabling computers to understand and process human language, both written and oral. NLP utilizes machine learning and deep learning techniques to analyze vast amounts of data and derive rules and nuances present in human speech.
## Build Tools
The project utilizes the following technologies and tools:
- HTML
- CSS
- JavaScript
- Node.js
- Express
- Webpack
- Meaningcloud API
- Jest (for testing)
- Workbox (for service workers)

## Installation
Before proceeding, ensure that Node.js and npm are installed on your system. You can check their versions using the following commands:

```bash
node -v
npm -v 
```
Follow these steps to set up the project:

1- Navigate to the project folder
```
cd <project directory>
```
2- Clone the repository:
```
git clone <repo>
```
3-Install npm dependencies:
```
npm install
```
4- Install necessary loaders and plugins (choose the appropriate ones for your development mode):
```
npm i -D @babel/core @babel/preset-env babel-loader
npm i -D style-loader node-sass css-loader sass-loader
npm i -D clean-webpack-plugin
npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin
npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin
```
5- Obtain an API key from meaningcloud.com.

6- Configure environment variables using the  `dotenv` package: 

- Install `dotenv`:
```
npm install dotenv
```
- create a new `.env` file in the root directory of your project.

- Inside the `.env` file, add your API key like this:
```
API_KEY=**************************
```
- Replace `**************************` with the actual API key you obtained from Meaningcloud.

7- Start the project using the following commands:
- To build the project:
``` 
npm run build-prod
```
- To run the project:
``` 
npm run start
```

8- **Access the Web Tool**: 
Open your browser and visit http://localhost:8081/.