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
            arr = element
            let img = document.createElement('img')
            let div = document.getElementById('ramen-menu')
            // we know we want to append to div id ramen-menu
            img.src = element.image
            div.append(img) // we're done with task 1 from here, but we use the images for task 2, below:
            // we create the event listener we need for task 2, and it invokes a function to showInfo
            img.addEventListener('click', (e) => { 
                showInfo(element)
            })
        })
    })
}




fetchRamen()


// Task 2
//     - ***Click on an image from the `#ramen-menu` div*** and see*** all the info* about that
//   ramen displayed inside the `#ramen-detail` div*** and where it says
//   `insert comment here` and`insert rating here`.

// the event listener is where we created the img elements, but this is the function that we invoke

const showInfo = (element) => {
    detailImage.src = element.image
    ramenName.textContent = element.name
    restaurant.textContent = element.restaurant
    rating.textContent = element.rating
    comment.textContent = element.comment
}

fetchRamen();

// 3
// - Create a new ramen after submitting the `new-ramen` form***html element. The new ramen should
//   be added to the`#ramen-menu` div.The new ramen does not need to persist; in
//     other words, if you refresh the page, it's okay that the new ramen is no
//   longer on the page. ***our page takes information from a database. If we locally make changes to the web page,
// on refresh, it will lose those changes

exampleRamenObj = {
    "name": "Shoyu Ramen",
    "restaurant": "Nonono",
    // "image": "./assets/ramen/shoyu.jpg",
    "rating": 7,
    "comment": "Delish. Can't go wrong with a classic!"
}

let form = document.getElementById('new-ramen')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let nuName = document.getElementById("new-name").value
    let nuRest = document.getElementById("new-restaurant").value
    let nuImg = document.getElementById("new-image").value
    let nuRating = document.getElementById("new-rating").value
    let nuComm = document.getElementById("new-comment").value
    let newRamen = {
        "name": nuName,
        "restaurant": nuRest,
        "image": nuImg,
        "rating": nuRating,
        "comment": nuComm,
    }
    ramenArr.push(newRamen)
    appendRamen(ramenArr)

    fetch(`${baseUrl}/ramens`, {
        method: 'POST',
        body: JSON.stringify(newRamen),
        headers: { 'Content-type': "application/json" }
    })
})






// img source needs to be a URL we get from the JSON
// img needs to be appended to <div id="ramen-menu">




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