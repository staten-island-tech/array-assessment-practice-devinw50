const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
    genre: ["fantasy", "fiction"],
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
    genre: ["fantasy", , "fiction"],
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
    genre: ["historical", "non-fiction"],
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
    genre: ["historical", "fiction"],
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
    genre: ["fiction"],
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
    genre: ["fiction"],
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
    genre: ["historical", "fiction"],
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
    genre: ["womens", "historical", "fiction"],
  },
];

//Array of authors and the book they wrote
//"--- wrote --- in ---"
books.forEach ((books)=> console.log(books.authorFirst, books.authorLast, "wrote", books.name, "in", books.publishDate))

//Sort books from oldest to most recent
const dates = books.sort(function (books1, books2) {
  return books1.publishDate - books2.publishDate;
});
console.log(dates);

//sort books alphabetically
//const sort =
//books.sort();
//console.log(books);

//Find who wrote War and Peace
<<<<<<< HEAD
//const names = books.filter(((books)=> books.name === "War and Peace"));
//console.log(names);
=======
const names = books.filter(((books)=> books.name === "War and Peace"));
books.forEach((books)=> console.log(books.authorFirst, books.authorLast));
console.log(names, authorFirst, authorLast);
>>>>>>> 719bf130639bae9c6f6e8047d184201264104002

//how many books were written before 1900?
//const nine = books.filter (
//publishDate <= 1900
//);
//console.log (nine)
//was there at least one book published within the last 100 years?

//was every book published within the last 100 years?

//print a list of books that "includes" the genre historical
