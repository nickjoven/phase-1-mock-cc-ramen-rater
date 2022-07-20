# Phase 1 Mock Code Challenge: Ramen Rater

## Learning Goals

- Access information from an API using a GET request and use it to update the
  DOM
- Listen for user events and update the DOM in response

## Introduction

Today you'll be building an app for rating ramen. You will be using a local API
and building out the frontend for our app.

## Demo

Use this gif as an example of how the app should work.

![demo](https://curriculum-content.s3.amazonaws.com/phase-1/phase-1-mock-cc-ramen-rater/demo-gif.gif)

## Setup

- Run `json-server --watch db.json` to get the backend started
- Open the `index.html` file on your browser
- Write your code in the `index.js` file

## Endpoints

Your base URL for your API will be: `http://localhost:3000`

The endpoints you may need are:

- GET `/ramens`
- GET `/ramens/:id`

Feel free to add any additional classes or ids to any elements in the HTML file
as you see fit.

## Core Deliverables

As a user, I can:

- See all ramen images in the `div` with the id of `ramen-menu`. When the page
  loads, request the data from the server to get all the ramen objects. Then,
  display the image for each of the ramen using an `img` tag inside the
  `#ramen-menu` div.
- Click on an image from the `#ramen-menu` div and see all the info about that
  ramen displayed inside the `#ramen-detail` div and where it says
  `insert comment here` and `insert rating here`.
- Create a new ramen after submitting the `new-ramen` form. The new ramen should
  be added to the`#ramen-menu` div. The new ramen does not need to persist; in
  other words, if you refresh the page, it's okay that the new ramen is no
  longer on the page.

