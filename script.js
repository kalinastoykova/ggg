let reviewsData = [
    {
        id: 1,
        title: "Erna Nørgaard",
        stars: `★★★★★`,
        text: "I started using the app last year when a friend recommended it. There are a few farms near where I live and I've gotten to know the owners well.",
        name: "Viby J"
    },
    {
        id: 2,
        title: "Felix Fisker",
        stars: `★★★★`,
        text: "Superb app, I use it for the gardening workshops. It's a bit sad that there aren't a lot of farm near me.",
        name: "Copenhagen NV"
    },
    {
        id: 3,
        title: "Kirsten Laursen",
        stars: `★★★★★`,
        text: "Before the app I used Facebook to sell my produce, but now thanks to GoGetGreen I get way more customers.",
        name: "Roskilde"
    },
    {
        id: 4,
        title: "Ane Thuesen",
        stars: `★★★★`,
        text: "My kids like to visit farms where they can play with the animals. Thanks to the app we found one nearby.",
        name: "Skagen"
    },
    {
        id: 5,
        title: "Frank Jensen",
        stars: `★★★★★`,
        text: "Fresh food is always great, thank you Go Get Green!!",
        name: "Esbjerg"
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
