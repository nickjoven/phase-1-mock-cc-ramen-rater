// - Access information from an API using a GET request and use it to update the DOM
// - Listen for user events and update the DOM in response


// 1.
// - See all ramen images in the`div` with the id of`ramen-menu`.When the page
// loads, request the data from the server to get all the ramen objects. Then,
// display the image for each of the ramen using an `img` tag inside the
// `#ramen-menu` div.

let baseUrl = 'http://localhost:3000'
let topContainer = document.getElementById('ramen-menu')
let ramenArr = []

// ramen is stored in an array of objects
// function to append from arr to div

const appendRamen = (arr) => {
    while (topContainer.hasChildNodes()) {
        topContainer.removeChild(topContainer.firstChild);
    }
    arr.forEach(element => {
        img = document.createElement('img')
        let link = element.image
        img.src = link
        img.className = `img${element.id}`
        topContainer.append(img)
        img.addEventListener('click', (e) => {
            let pureNum = e.target.className.replace(/\D/g, "")
            console.log(pureNum)
            ramenInfo(pureNum)
        })
    }) 
}

// function to handle fetch plus invoke appendRamen on res
const loadRamen = (url) => {
    fetch(`${url}/ramens`)
    .then(resp => resp.json())
    .then(res => {
        ramenArr = res
        appendRamen(res)
    })
}

loadRamen(baseUrl);

// WOOHOO!

// 2.
// - Click on an image from the `#ramen-menu` div and see all the info about that
// ramen displayed inside the `#ramen-detail` div and where it says
// `insert comment here` and`insert rating here`.

// 5 images in ramen menu div. clicking an image should show info about it:
// info goes into ramen detail div. name, rest, img, rating, comment
// should get populated based on the things in the array

// click means make an event listner
// name goes in class=name
// restaurant in class=restaurant
// rating in id=rating display
// comment in id=comment-display
// img goes in class=detail-image

// first do it on page load

const ramenInfo = (i) => {
    let num = parseInt(i) - 1
    let img = document.getElementById('detail-image')
    let nameR = document.getElementById('name')
    let restaurant = document.getElementById('restaurant')
    let rating = document.getElementById('rating-display')
    let comment = document.getElementById('comment-display')
    nameR.innerText = ramenArr[num].name
    img.src = ramenArr[num].image
    restaurant.innerText = ramenArr[num].restaurant
    rating.textContent = ramenArr[num].rating
    comment.textContent = ramenArr[num].comment
}

// 2 down. 1 left

// - Create a new ramen after submitting the `new-ramen` form.The new ramen should
// be added to the`#ramen-menu` div.The new ramen does not need to persist; in
// other words, if you refresh the page, it's okay that the new ramen is no
// longer on the page.

// take in form data
// add new ramen and its data to div

// in other words, push to ramen array

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
        headers: { 'Content-type': "application/json"}
    })
})

// bug when adding new ramen due to image getting fucked





// let practiceArray = [
// { id: 1, name: 'Shoyu Ramen', restaurant: 'Nonono', image: './assets/ramen/shoyu.jpg', rating: 7 },
// { id: 2, name: 'Naruto Ramen', restaurant: 'Naruto', image: './assets/ramen/naruto.jpg', rating: 10,  },
// { id: 3, name: 'Nirvana Shiromaru', restaurant: 'Ippudo', image: './assets/ramen/nirvana.jpg', rating: '7',  },
// { id: 4, name: 'Gyukotsu Ramen', restaurant: 'Za-Ya Ramen', image: './assets/ramen/gyukotsu.jpg', rating: 8,  },
// { id: 5, name: 'Kojiro Red Ramen', restaurant: 'Ramen-Ya', image: './assets/ramen/kojiro.jpg', rating: 6,  }
// ]

// practiceArray.forEach(element => {
//     img = document.createElement('img')
//     let link = element.image
//     img.src = link
//     topContainer.append(img)
// })

// for each element, array.image
// append to div from array




























// Extra Advanced Deliverables
// You'll need a these endpoints for these advanced deliverables:

// POST / ramens
// DELETE / ramens /: id
// PATCH / ramens /: id
// As a user, I can:

// persist my updates to a ramen's rating and comment. (PATCH request)
// persist new ramens that I create(POST request)
// persist any ramen deletions(DELETE request)