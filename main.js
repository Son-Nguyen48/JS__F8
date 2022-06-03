// -----------------------//
// ---Work with String----//
// -----------------------//

var string = "Toi yeu em";
var array = string.split(" ");
console.log(array);

console.log("-----------------------");

var string = "abc";
var array = Array.from(string, function (a) {
  return a + a;
});
console.log(array);
console.log("-----------------------");
var string = "abc";
var array = Array.from(string, (x) => x + x);
console.log(array);
console.log("-----------------------");
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
var flatArray = depthArray.reduce(function (accumulator, currentValue) {
  return accumulator.concat(currentValue);
}, []);
console.log(flatArray);
console.log("-----------------------");
let startTime = new Date().getTime();
for (let i = 0; i < 1000000; i++) {
  let str1 = "Number ".concat(i, "time 2 is ");
  let str2 = 2 * i;
  let resStr = str1.concat(str2);
}
let endTime = new Date().getTime();
console.log("Duration with concat() is: " + (endTime - startTime));
let startTime2 = new Date().getTime();
for (let i = 0; i < 1000000; i++) {
  let str1 = "Number " + i + "time 2 is ";
  let str2 = 2 * i;
  let resStr = str1 + str2;
}
let endTime2 = new Date().getTime();
console.log("Duration with operator is: " + (endTime2 - startTime2));
console.log("-----------------------");
var topics = [
  {
    topic: "frontend",
    courses: [
      {
        id: 1,
        title: "HTML, CSS3"
      },
      {
        id: 2,
        title: "Reactjs"
      }
    ]
  },
  {
    topic: "Backend",
    courses: [
      {
        id: 1,
        title: "PHP"
      },
      {
        id: 2,
        title: "Nodejs"
      }
    ]
  }
];

var newCourses = topics.reduce(function (accumulator, currentValue) {
  return accumulator.concat(currentValue.courses);
}, []);
console.log(newCourses);

var htmls = newCourses.map(function (courses) {
  return `
        <div>
            <h2 class="course">${courses.title}</h2>
            <p class="course__id">Id: ${courses.id}</p>
        </div>
    `;
});

console.log(htmls.join(""));

console.log("------------------------------------");

var watchList = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    Language: "English, Japanese, French",
    Country: "USA, UK",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
    imdbID: "tt1375666",
    Type: "movie"
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "USA, UK",
    imdbRating: "8.6",
    imdbVotes: "910,366",
    imdbID: "tt0816692",
    Type: "movie"
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer:
      "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    Language: "English, Mandarin",
    Country: "USA, UK",
    imdbRating: "9.0",
    imdbVotes: "1,652,832",
    imdbID: "tt0468569",
    Type: "movie"
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    Director: "Christopher Nolan",
    Writer:
      "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    Language: "English, Urdu, Mandarin",
    Country: "USA, UK",
    imdbRating: "8.3",
    imdbVotes: "972,584",
    imdbID: "tt0372784",
    Type: "movie"
  },
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    Language: "English, Spanish",
    Country: "USA, UK",
    imdbRating: "7.9",
    imdbVotes: "876,575",
    imdbID: "tt0499549",
    Type: "movie"
  }
];
function calculateRating(arr) {
  var listFilm = arr.filter(function (film, index) {
    return film.Director === "Christopher Nolan";
  });
  console.log(listFilm);
  var totalIMDB = listFilm.reduce(function (accumulator, currentValue) {
    return accumulator + Number(currentValue.imdbRating);
  }, 0);
  console.log(totalIMDB);
  return totalIMDB / listFilm.length;
}

// Expected results
console.log(calculateRating(watchList)); // Output: 8.675
