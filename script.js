let reviewsData = [
    {
        id: 1,
        title: "bla",
        stars: `★★★`,
        text: "blzzzzzzza",
        name: "bl3434"
    },
    {
        id: 2,
        title: "bla4",
        stars: 34,
        text: "blzrzzzzzza",
        name: "blrr3434"
    },
    {
        id: 3,
        title: "333bla",
        stars: 3333,
        text: "blzzz333zzzza",
        name: "bl34333334"
    },
    {
        id: 4,
        title: "b33232la",
        stars: 31,
        text: "blz1111zzzzzza",
        name: "b111l3434"
    },
    {
        id: 5,
        title: "eeebla",
        stars: 313,
        text: "egggblzzzzzzza",
        name: "blewewe3434"
    }
]

let allReviews = document.querySelectorAll("[data-review]");
console.log(allReviews)

function getRandomReviews(){
    let review1 = reviewsData[Math.floor(Math.random()*reviewsData.length)];
    let review2 = reviewsData[Math.floor(Math.random()*reviewsData.length)];
    let review3 = reviewsData[Math.floor(Math.random()*reviewsData.length)];
    while(review1.id == review2.id || review1.id == review3.id || review2.id == review3.id) {
        review1 = reviewsData[Math.floor(Math.random()*reviewsData.length)];
        review2 = reviewsData[Math.floor(Math.random()*reviewsData.length)];
        review3 = reviewsData[Math.floor(Math.random()*reviewsData.length)];
    }
    return [review1,review2,review3];
}

function populateReviews(data){
    allReviews.forEach(function(elem, index) {
        elem.querySelector("[data-title]").textContent = data[index].title;
        elem.querySelector("[data-name]").textContent = data[index].name;
        elem.querySelector("[data-stars]").textContent = data[index].stars;
        elem.querySelector("[data-text]").textContent = data[index].text;
    });
}

populateReviews(getRandomReviews());
console.log(getRandomReviews())
