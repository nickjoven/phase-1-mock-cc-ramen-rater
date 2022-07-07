// JavaScript Object Notation

// AS A USER,
// 1
// - See all ramen ***images**APPEND to DOM in the`div` with the id of`ramen-menu`.When the page
// loads, **GETrequest the data from the server to get all the ramen objects. Then,
//     display the image for each of the ramen using an `img` tag inside the
//   `#ramen-menu` div.


// GET: function to request the data from the server to get all the ramen objects
// fetch something from the database to add images to the DOM

const baseUrl = 'http://localhost:3000/ramens'
const detailImage = document.querySelector('.detail-image')
const ramenName = document.querySelector('.name')
const restaurant = document.querySelector('.restaurant')
const rating = document.querySelector('#rating-display')
const comment = document.querySelector('#comment-display')

// comment.textContent = // needs to come from the JSON

// GET request: get is the default method for fetch
const fetchRamen = () => {
    fetch(baseUrl)
    .then(req => req.json()) // turns the JSON into an object javascript understands
    .then(result => {
        // FOR EACH ELEMENT, PUT THE IMAGE IN THE DOM // use a loop of some kind (forEach)
        result.forEach((element) => {
            let img = document.createElement('img')
            let div = document.getElementById('ramen-menu')
            // we know we want to append to div id ramen-menu
            img.src = element.image
            div.append(img) // when we create our images in the top of the page, we also add an event listener and its functions
            img.addEventListener('click', (e) => {
                showInfo(element)
            })
        })
    })
}

// function will take element.image as an argument and append an image to the div with id ramen-menu
// and the img src="element.image"
//
// add a paragraph to the div with text content hello

const showInfo = (element) => {
detailImage.src = element.image
ramenName.textContent = element.name
restaurant.textContent = element.restaurant
rating.textContent = element.rating
comment.textContent = element.comment
}





fetchRamen()

// Task 2
//     - ***Click on an image from the `#ramen-menu` div*** and see*** all the info* about that
//   ramen displayed inside the `#ramen-detail` div*** and where it says
//   `insert comment here` and`insert rating here`.

// if we run these methods when element matches the image we click on,
// it will update the DOM


// need an event listener that invokes the following:


// HTML element.textContent(information from the JSON)

// which HTML elements we are setting the text content of / how to identify them

// what we are setting as the text content


// if we have this in a function, where does it go, and when does it happen?











// click -> addEventListener #ramen-menu` div
// append info about ramen inside #ramen-detail` div
// info* about that ramen comes from 

fetchRamen();

// img source needs to be a URL we get from the JSON
// img needs to be appended to <div id="ramen-menu">



// APPEND

// 2
// - Click on an image from the `#ramen-menu` div and see all the info about that
//   ramen displayed inside the `#ramen-detail` div and where it says
//   `insert comment here` and`insert rating here`.

// 3
// - Create a new ramen after submitting the `new-ramen` form.The new ramen should
//   be added to the`#ramen-menu` div.The new ramen does not need to persist; in
//     other words, if you refresh the page, it's okay that the new ramen is no
//   longer on the page.