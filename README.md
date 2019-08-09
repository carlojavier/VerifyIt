# verify it. 

A full stack web application + Chrome Extension designed to foster content engagement and truth-seeking through annotations and validations of news articles.

## The Goal

False information, misleading content, and propaganda have long existed. Yet something happened in November 2016. Since then, the concept of 'Fake News' has not only become inescapable in modern discourse, but also dangerous. 

verify it. aims to address the problems that stem from the generation and distribution of fake news headlines and content. On the surface, we seek to identify and discern the validity of a news article, but what we truly aim to accomplish is the rejuvenation of our collective desires to seek truths, to fact-check, and to extinguish a collective complacency that accepts ReTweets and shares as barometers for the legitimacy of information.

verify it. encourages user engagement and input to help corroborate and fact-check news articles. To further ensure the validity of ratings, verify it. utilizes the capabilties of the FakeBox API - a fake news detector algorithim developed by MachineBox, which can analyze title, content, and domain and determine its validity as well as how biased it might be.


## Installation Instructions

First, fork the project so you get your own copy of it. Once you have done that, you can clone your new repo to your machine, and get started.

You need TWO terminals for this.

In one terminal, run bundle to install the dependencies. Run bin/rake db:setup to create the databases (called rails_project_development by default). Run bin/rails s to run the server.

In the other terminal, cd into client. Run npm install. Rename the .env.example file to be called .env. Then run npm start and go to localhost:3000 in your browser.

In the browser, you can click on the button and see the data get loaded.

### For the Extension

In Chrome, go to "More Tools" -> Extensions. Then, in the top-right corner toggle on the "Developer Mode". This will reveal a bar of buttons, including one that says "Load unpacked". Click that button, and in the resulting popup navigate to the folder for this project. Select the folder! Congratulations, you have installed the extension!

## Usage:

After installing the extension, navigate to any news article. On the home page you'll see the extension button on the top right. Click this button and the article will be scraped and ported into our annotation page.

You can also launch our annotator from the home page by inputting the URL of any news article page you find on the Internet.

Once the article show page is launched. You can highlight any word or phrase to display the annotation you function, you can also click any existing highlights to view annotations and comments by other users. Hovering over the functions on the top right part of the screen will display the user ratings and the FakeBox ratings (bias vs. impartial and overall decision on the host domain of the news article).

## Screenshots

!["Main article page with Fakebox results on top right, as well as user ratings](https://github.com/carlojavier/VerifyIt/blob/master/screenshots/verify_screenshot1.png?raw=true)
!["Main article page with highlighted content, comments not shown](https://github.com/carlojavier/VerifyIt/blob/master/screenshots/verify_screenshot2.png?raw=true)

## Dependancies

- "@material-ui/core": "^4.2.1",
- "@material-ui/icons": "^4.2.1",
- "axios": "^0.19.0",
- "cheerio": "^1.0.0-rc.3",
- "material-ui-icons": "^1.0.0-beta.36",
- "node-sass": "^4.12.0",
- "puppeteer": "^1.19.0",
- "react": "^16.8.6",
- "react-dnd": "^5.0.0",
- "react-dnd-html5-backend": "^3.0.2",
- "react-dom": "^16.8.6",
- "react-router-dom": "^5.0.1",
- "react-scripts": "2.1.8",
- "react-tag-input": "^6.4.0",
- "request": "^2.88.0",
- "request-promise": "^4.2.4",
- "styled-components": "^4.3.2"
