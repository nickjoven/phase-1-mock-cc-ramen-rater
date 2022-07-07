// See all ramen images in the div with the id of ramen-menu. When the page loads, request the data from the server to get all the ramen objects. Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.
// Click on an image from the #ramen-menu div and see all the info about that ramen displayed inside the #ramen-detail div and where it says insert comment here and insert rating here.
// Create a new ramen after submitting the new-ramen form. The new ramen should be added to the#ramen-menu div. The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.
const ramenMenu = document.querySelector('#ramen-menu')
// connects the ramen menu div id
const ramenDisplayImage = document.querySelector('.detail-image')
const ramenDisplayName = document.querySelector('.name')
const ramenDisplayRestaurant = document.querySelector('.restaurant')
const ramenDisplayComment = document.querySelector('#comment-display')
const ramenDisplayRating = document.querySelector('#rating-display')
const newRamenForm = document.querySelector('#new-ramen')
//func to be able to fetch ramen with a variable
const fetchRamen = async () => {
    const req = await fetch('http://localhost:3000/ramens');
    const res = await req.json()
    return res;
}
// const fetchRamen = () => {
//     fetch('http://localhost:3000/ramens')
//     .then((res) => res.json())
//     .then(data => {
//         console.log(data)
//     })
// }
//funct will change the display for the ramen
const setRamenImage = (imageUrl) => {
    ramenDisplayImage.src = imageUrl
}
const setRameName = (name) => {
    ramenDisplayName.textContent = name
}
const setRamenRestaurant = (restaurant) => {
    ramenDisplayRestaurant.textContent = restaurant
}
const setRamenComment = (comment) => {
    ramenDisplayComment.textContent = comment
}
const setRamenRating = (rating) => {
    ramenDisplayRating.textContent = rating
}
const setRamenDisplay = (ramenObj) => {
    setRamenImage(ramenObj.image)
    setRameName(ramenObj.name)
    setRamenRestaurant(ramenObj.restaurant)
    setRamenComment(ramenObj.comment)
    setRamenRating(ramenObj.rating)
}
// function to display images under #ramen-menu
const displayImageMenu = async () => {
    const ramenList = await fetchRamen()
    ramenList.forEach((ramenItem) => {
        console.log(ramenItem)
        //create image tag
        const img = document.createElement('img')
        //set the src for the image to each ramen image
        img.src = ramenItem.image
        //(deliverable 2) add an event listener so the image can be clicked and show in the space
        img.addEventListener('click', () => {
            setRamenDisplay(ramenItem)
        })
        //append the image to the page
        ramenMenu.append(img)
    })
}
displayImageMenu()
newRamenForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const ramenObj = {
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        image: e.target.image.value,
        comment: e.target['new-comment'].value,
    }
    createRamen(ramenObj)
    displayImageMenu()
})
const createRamen = async (ramenObj) => {
    const req = await fetch('http://localhost:3000/ramens', {
        method: 'POST',
        headers: { 'Content-type': "application/json" },
        body: JSON.stringify(ramenObj),
    });
}