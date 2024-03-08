let books = [
    { "author": "Chinua Achebe", "title": "Things Fall Apart", "reviews": [{ "username": "ali", "review": "nice book!!!" }, { "username": "adam", "review": "very good book!!!" }] },
    { "author": "Hans Christian Andersen", "title": "Fairy tales", "reviews": {} },
    { "author": "Dante Alighieri", "title": "The Divine Comedy", "reviews": {} },
    { "author": "Unknown", "title": "The Epic Of Gilgamesh", "reviews": {} },
    { "author": "Unknown", "title": "The Book Of Job", "reviews": {} },
    { "author": "Unknown", "title": "One Thousand and One Nights", "reviews": {} },
    { "author": "Unknown", "title": "Nj\u00e1l's Saga", "reviews": {} },
    { "author": "Jane Austen", "title": "Pride and Prejudice", "reviews": {} },
    { "author": "Honor\u00e9 de Balzac", "title": "Le P\u00e8re Goriot", "reviews": {} },
    { "author": "Samuel Beckett", "title": "Molloy, Malone Dies, The Unnamable, the trilogy", "reviews": {} }
]

// books.forEach((e, i) => {
//     if (i === 0) {
//         e.reviews.filter(a => {
//             console.log(a.username);
//             console.log(a.username === "ali");
//             a.username === "ali"
//         })
//     }
// })
books.forEach((e, i) => {
    if (i === 0) {
        e.reviews = e.reviews.filter(a => a.username !== "ali")
    }
})
console.log(books[0]);
// console.log(b[0]);