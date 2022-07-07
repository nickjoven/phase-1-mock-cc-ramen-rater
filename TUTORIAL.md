## RAMEN RATER RAMEN RATER RAMEN RATER RAMEN RATER 

###### OH MY GOSH, IS THIS A RAMEN RATER TUTORIAL???
<br>
Maybe...
<br>
<br>
The code challenge starts in 1 minute. Suddenly, your mind has emptied itself. You can't remember who you are or how you got here, let alone how to interpret that README.md. What is the DOM? What is a code editor?? Who is JSON and why won't he return my promises?

Off to a bad start, perhaps. That's ok, let's just open up the familiar index.js and see what our launching point is:

```javascript
// write your code here
```

##### Uh oh. That's not helpful.

<br>

How about running learn test?

```
This directory doesn't appear to have any specs in it, so there’s no test to run.

If you are working on Canvas, this assignment has been submitted. You can resubmit by running `learn test` again.
```

##### !! HOW DO I DO ANYTHING IF I FORGOT TO DO EVERYTHING !!

<br>

Alright, dramatization over. But while we've certainly seen, worked with, and studied a whelming amount of code in the last few weeks, it's not unreasonable to feel stuck before writing a single line in the JavaScript file.

Here are my recommendations for getting over that initial hump. If you already feel good about diving into the code and just need reference for certain tasks, we'll get into that below (maybe. Not in this commit, I bet).

DISCLAIMER: It might not be enough to read these tips and code along with the solution. Proficiency comes with practice. If you want to perfectly execute something in performance, aim to perfectly execute it in practice 5x in a row. Or don't, I'm not your boss.

Do this if you're starting from absolute zero:
1)   Read the README through its entirety.
2)   Follow any explicit instructions (as in, direct) such as those in the setup section
3)   Open a copy of index.html in your browser. *Optional: open up the API in browser* 
4) Copy the Deliverables into a place where you can work with them. This could be comments in index.js, a whiteboard, scratch paper, or the footer of the will you're writing.

You're working from a set of deliverables. The language will be clear in some places, but vague in others. Read them carefully.

Need a specific strategy?

1. Take anything that is written in HTML, CSS, or JavaScript and find out what it refers to. This may point you to an HTML element or imply to use a certain JavaScript function. Something as small as glancing at the open HTML page and seeing where a future element should go could start a feedback loop that helps you find your footing.
2. Rewrite the instructions in a way that makes sense to you. Trim things down and keep the important parts. 
3. Try to bridge the gap between nonspecific language and JavaScript words. Can you tell when something will need to be done with a function? What about a specific method? 

Remember to take things a sentence at a time, but that larger context can sometimes explain questions you'll encounter on the first read through.

You want to go from
`request the data from the server to get all the ramen objects` to `fetch ramen objects from API` to 
```javascript
const fetchRamen = (apiUrl) => {
    fetch(apiUrl)
    .then(etc) // unless you're using async / await, but you get the idea 
}
```

Do you understand the deliverable enough to start writing code? If yes, time to begin salary negotiation. If you don't, take a deep breath.

Let's start with the first deliverable and try to apply these strategies.

> As a user, I can:
> - See all ramen images in the `div` with the id of `ramen-menu`. When the page
  loads, request the data from the server to get all the ramen objects. Then,
  display the image for each of the ramen using an `img` tag inside the
  `#ramen-menu` div.

`div` with the id of `ramen-menu`, `img` tag, `#ramen-menu` div are all given to use. Don't turn down free information! Now let's try to piece apart the rest of the information.

- See all ramen images 
- When the page loads, request data from server to get all ramen objects
- Display image **for each** 

All we've done is copy things out of the README. I would then recommend taking one of these bullet points and putting it into JavaScript.

```javascript
const displayRamenImages = () => see all ramen images 
```

###### SHOULDN'T THIS WORK?
Your computer is plenty smart, but not so much that it knows what you mean from the bullet point. How do you get JavaScript to do anything again?

Oh, yes, with functions (primarily). We'll start thinking in functions right after we take one more look at our deliverable as a whole.

`See all ramen images` doesn't actually mean, like, all ramen from all time. Reading the whole deliverable should tell you that we're specifically relying on `data from the server to get all the ramen objects.` We don't know how to leverage that data just yet, but we'll figure it out. If you recall, trying to `request the data from the server` specifically means you are making a `fetch` request to the API. Finally, `display the image for each of the ramen using an ` `img` `tag inside the #ramen-menu div` is handing out a lot of information. Your brain should be spinning with what you know about `img` tags--what they do and what they need. It's normal to end up with **questions** when trying to lay out what to do. This breakdown will probably demonstrate as much.

Google anything you don't understand either to confirm your initial instincts or figure out a problem you don't currently know the solution to. ***Googling is a skill. You can earn 450k a year by being good at googling and following my passive income guide.***

Let's reiterate. In order to figure out how to go from the README to a block of code, you have read the instructions thoroughly, and put things in your own words. Your index.js might still be code-less at this point, but that's fine. By now, you're hopefully thinking in code, and have some idea of where to start. 

If you need to simplify, write a set of comments that address each point of the deliverable. You might start with incomplete functions like so...
```javascript
// function to handle fetch request
fetch()
//function to append image to div
div.append(imgUrl)

```
...neither of which will do what you want, but you hopefully, at this point, *know* what you want. And knowing = battle * 1/2.

You are time limited during the challenge. If you are practicing, and you are unfamiliar with something, dive deep into the documentation, tutorials, and Stack Overflow posts. But when time is limited, and it seems like you can work on either of two things, start with the one you know better. This is a test-taking strategy. If you can keep a cool head, and think it's logically better to start with something you know less about, that's fine, too.

I am writing too many comments in order to demonstrate my thought process. Your goal is ONLY to be like me in that this code hits the first deliverable. You do NOT need to write out every process as though you are awesome and gracisouly doing so for your wonderful peers.

```javascript
// GLOBAL STUFF GOES HERE
const ramenMenu = document.getElementById('ramen-menu')
const baseUrl = 'http://localhost:3000/ramens'
// 1
// - See all ramen images in the`div` with the id of`ramen-menu`. When the page
// loads, request the data from the server to get all the ramen objects. Then,
//     display the image for each of the ramen using an `img` tag inside the
//   `#ramen-menu` div.

// goal is to append images to div on page load
// images will come from server (fetch)
// server contains an array of objects at http://localhost:3000/ramens
// objects on server have an image property image: url

// function to append image to div - declaration
// need to append images to <div id="ramen-menu>
// image elements need to be created with document.createElement('img')
// image src="" <- needs to correspond to image properties of ramen objects
// I will get the array of ramen objects through the fetch request, so the parameter
// in this function should hold the place of that array 
// we can iterate over an array with a forEach loop (or other methods...)

// NOTES OVER, TIME TO WRITE THE FUNCTION
const displayImages = (array) => {
    // array elements will be the ramen objects from the db, we must loop
    array.forEach(element => {
        // the image elements we are adding don't exist in the DOM, must createElement
        let image = document.createElement('img')
        // an image tag needs a source to display properly, and the URL is a property
        // of each ramen object. image.src sets the property of the img tag
        image.src = element.image
        // finally, we append the image to the ramenMenu variable declared at the top
        ramenMenu.append(image)
    });
}

// our displayImages function uses an array that must come from the database
// fetch will return promise, .then we convert JSON to javaScript obj
// then we use that javaScript obj (an array) and invoke our displayImages
// function to fetch resources from server

const fetchRamen = () => {
    // using http://localhost:3000/ramens as baseURL
    fetch(baseUrl)
    // upon promise return, take json string and convert to JS object
    .then(req => req.json())
    // the result is an array of ramen objects
    // we can invoke displayImages on that result
    .then(result => {
        displayImages(result)
    })
}

// we must invoke the fetchRamen() function so things render on page load 
fetchRamen()
```

The actual JavaScript in there is like, 10 lines of code. That's all you need for that first deliverable! But you need to be able to walk yourself there. 