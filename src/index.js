// write your code here

// do not forget json-server --watch db.json

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

// 2
// - Click on an image from the `#ramen-menu` div and see all the info about that
//   ramen displayed inside the `#ramen-detail` div and where it says
//   `insert comment here` and`insert rating here`.

// 3
// - Create a new ramen after submitting the `new-ramen` form.The new ramen should
//   be added to the`#ramen-menu` div.The new ramen does not need to persist; in
//     other words, if you refresh the page, it's okay that the new ramen is no
//   longer on the page.