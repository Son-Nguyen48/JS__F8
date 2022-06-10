// // -----------------------//
// // ---Work with String----//
// // -----------------------//

// var string = "Toi yeu em";
// var array = string.split(" ");
// console.log(array);

// console.log("-----------------------");

// var string = "abc";
// var array = Array.from(string, function (a) {
//   return a + a;
// });
// console.log(array);
// console.log("-----------------------");
// var string = "abc";
// var array = Array.from(string, (x) => x + x);
// console.log(array);
// console.log("-----------------------");
// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
// var flatArray = depthArray.reduce(function (accumulator, currentValue) {
//   return accumulator.concat(currentValue);
// }, []);
// console.log(flatArray);
// console.log("-----------------------");
// let startTime = new Date().getTime();
// for (let i = 0; i < 1000000; i++) {
//   let str1 = "Number ".concat(i, "time 2 is ");
//   let str2 = 2 * i;
//   let resStr = str1.concat(str2);
// }
// let endTime = new Date().getTime();
// console.log("Duration with concat() is: " + (endTime - startTime));
// let startTime2 = new Date().getTime();
// for (let i = 0; i < 1000000; i++) {
//   let str1 = "Number " + i + "time 2 is ";
//   let str2 = 2 * i;
//   let resStr = str1 + str2;
// }
// let endTime2 = new Date().getTime();
// console.log("Duration with operator is: " + (endTime2 - startTime2));
// console.log("-----------------------");
// var topics = [
//   {
//     topic: "frontend",
//     courses: [
//       {
//         id: 1,
//         title: "HTML, CSS3"
//       },
//       {
//         id: 2,
//         title: "Reactjs"
//       }
//     ]
//   },
//   {
//     topic: "Backend",
//     courses: [
//       {
//         id: 1,
//         title: "PHP"
//       },
//       {
//         id: 2,
//         title: "Nodejs"
//       }
//     ]
//   }
// ];

// var newCourses = topics.reduce(function (accumulator, currentValue) {
//   return accumulator.concat(currentValue.courses);
// }, []);
// console.log(newCourses);

// var htmls = newCourses.map(function (courses) {
//   return `
//         <div>
//             <h2 class="course">${courses.title}</h2>
//             <p class="course__id">Id: ${courses.id}</p>
//         </div>
//     `;
// });

// console.log(htmls.join(""));

// console.log("------------------------------------");

// var watchList = [
//   {
//     Title: "Inception",
//     Year: "2010",
//     Rated: "PG-13",
//     Released: "16 Jul 2010",
//     Runtime: "148 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer: "Christopher Nolan",
//     Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//     Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     Language: "English, Japanese, French",
//     Country: "USA, UK",
//     imdbRating: "8.8",
//     imdbVotes: "1,446,708",
//     imdbID: "tt1375666",
//     Type: "movie"
//   },
//   {
//     Title: "Interstellar",
//     Year: "2014",
//     Rated: "PG-13",
//     Released: "07 Nov 2014",
//     Runtime: "169 min",
//     Genre: "Adventure, Drama, Sci-Fi",
//     Director: "Christopher Nolan",
//     Writer: "Jonathan Nolan, Christopher Nolan",
//     Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     Language: "English",
//     Country: "USA, UK",
//     imdbRating: "8.6",
//     imdbVotes: "910,366",
//     imdbID: "tt0816692",
//     Type: "movie"
//   },
//   {
//     Title: "The Dark Knight",
//     Year: "2008",
//     Rated: "PG-13",
//     Released: "18 Jul 2008",
//     Runtime: "152 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer:
//       "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     Language: "English, Mandarin",
//     Country: "USA, UK",
//     imdbRating: "9.0",
//     imdbVotes: "1,652,832",
//     imdbID: "tt0468569",
//     Type: "movie"
//   },
//   {
//     Title: "Batman Begins",
//     Year: "2005",
//     Rated: "PG-13",
//     Released: "15 Jun 2005",
//     Runtime: "140 min",
//     Genre: "Action, Adventure",
//     Director: "Christopher Nolan",
//     Writer:
//       "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     Language: "English, Urdu, Mandarin",
//     Country: "USA, UK",
//     imdbRating: "8.3",
//     imdbVotes: "972,584",
//     imdbID: "tt0372784",
//     Type: "movie"
//   },
//   {
//     Title: "Avatar",
//     Year: "2009",
//     Rated: "PG-13",
//     Released: "18 Dec 2009",
//     Runtime: "162 min",
//     Genre: "Action, Adventure, Fantasy",
//     Director: "James Cameron",
//     Writer: "James Cameron",
//     Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     Language: "English, Spanish",
//     Country: "USA, UK",
//     imdbRating: "7.9",
//     imdbVotes: "876,575",
//     imdbID: "tt0499549",
//     Type: "movie"
//   }
// ];
// function calculateRating(arr) {
//   var listFilm = arr.filter(function (film, index) {
//     return film.Director === "Christopher Nolan";
//   });
//   console.log(listFilm);
//   var totalIMDB = listFilm.reduce(function (accumulator, currentValue) {
//     return accumulator + Number(currentValue.imdbRating);
//   }, 0);
//   console.log(totalIMDB);
//   return totalIMDB / listFilm.length;
// }

// // Expected results
// console.log(calculateRating(watchList)); // Output: 8.675

// console.log("-----------------------------------");
// var arr = [
//   ["name", "Sơn Đặng"],
//   ["age", 18]
// ];
// function arrToObj(arrs) {
//   return Object.assign(
//     arrs[0].reduce((accumulator, currentValue) => ({
//       [accumulator]: currentValue
//     })),
//     arrs[1].reduce((accumulator, currentValue) => ({
//       [accumulator]: currentValue
//     }))
//   );
// }
// // Expected results
// console.log(arrToObj(arr)); // Output: { name: 'Sơn Đặng', age: 18 }
// console.log("-----------------------------------");

// //Để check xem đối tượng arr là mảng hay là object chúng ta dùng Array.isArray(arr) trả về true nếu là array, false nếu không phải array. Nếu false thì chúng ta dùng typeof để check lại đối tượng đó.
// console.log(Array.isArray([1, 2, 3, 4]), Array.isArray({}));
// console.log("-----------------------------------");
// var result = "A" && "B" && "C" && "D";
// console.log(result);
// //Đầu tiên check "A" có thuộc bất kỳ trường hợp falsy nào không. Nếu không nó sẽ chuyển sang "B" lần lượt đến "D", đến đây không còn phần tử nào nữa thì nó gán "D" cho result nên lệnh in sau đó sẽ có giá trị là "D"
// console.log("-----------------------------------");
// //String hay chuỗi có các phương thức
// //split() có cú pháp như sau được mô tả trong visual studio code:
// //split(splitter: { [Symbol.split](string: string, limit?: number): string[]; }, limit?: number): string[]
// console.log("Toi yeu em".split(" ", 3));

// //Trong đó limit? : number quyết định số phần tử trong mảng được phép trả về, ví dụ: nếu limit là 1 thì mảng trả về chỉ có một phần tử kể từ phần tử đầu tiên, nếu là 2 thì sẽ có 2 phần tử kể từ phần tử đầu tiên, tối đa limit là độ dài của mảng khi không có đối số limit.
// console.log("-----------------------------------");
// //Xử lý chuỗi trước khi trả về mảng với phương thức from():
// console.log(
//   Array.from("Chuỗi này là ví dụ", function (string) {
//     return string + "";
//   })
// );
// console.log("-----------------------------------");
// //
// var arr = ["Son", "Nguyen", "The"];
// console.log(arr.splice(1, 0, "haha")); //[]
// console.log(arr); //["Son","haha","Nguyen", "The"]
// console.log("-----------------------------------");
// var arr1 = [[1, 2, 3], 4, 5, 6];
// var arr2 = [[7, 8], 9, 10, 11];
// console.log(
//   arr1.concat(arr2).reduce(function (accumulator, currentValue) {
//     return accumulator.concat(currentValue);
//   }, [])
// );

// console.log("-----------------------------------");
// var mangArray1 = [1, 2, 3];
// console.log(mangArray1.includes(1));
// console.log(mangArray1.includes(1, 0));
// console.log(mangArray1.includes(1, 1));
// var chuoiString1 = "Nguyen The Son";
// console.log(chuoiString1.includes(" "));
// console.log(chuoiString1.includes(" ", 11));
// console.log(chuoiString1.includes(" ", 8));
// console.log(chuoiString1.includes("H"));
// console.log("-----------------------------------");
// var inValue = function (param) {
//   if (typeof param === "function") param();
//   else return param;
// };

// function myCallback(value) {
//   console.log("Value: ", value);
// }
// inValue(myCallback(100000));
// console.log(inValue(100000));
// console.log("-----------------------------------");
// var myArr = ["Js", "Java", "C"];
// var newMyArr = Array.from(myArr, (e) => "Language: " + e);
// console.log(newMyArr);
// console.log("-----------------------------------");
// var arrName = ["Son", "Nguyen", "The"];
// console.log(arrName.slice(1, 2)); // ["Nguyen"]
// console.log(arrName); // ["Nguyen"]
// console.log("-----------------------------------");
// Array.prototype.forEach2 = function (callback, initialValue) {
//   for (let i = 0; i < this.length; i++) {
//     initialValue = callback(initialValue, this[i]);
//   }
//   return initialValue;
// };

// var newArrName = [1, 2, 3].forEach2(function (accumulator, currentValue) {
//   console.log(accumulator, currentValue);
//   return accumulator + currentValue;
// }, 0);

// console.log(newArrName);
// console.log("-----------------------------------");
// var object1 = [1, 2, 3];
// var object2 = [4, 5, 6];
// var object3 = [1, 2, ...object1];
// console.log(object3);
// console.log("-----------------------------------");

// var arr001 = ["Javascript", "Reactjs", "PHP"];

// Array.prototype.forEach2 = function (callback) {
//   for (var index in this) {
//     if (this.hasOwnProperty(index)) {
//       callback(this[index], index, this);
//     }
//   }
// };

// arr001.forEach2(function (element, index, array) {
//   console.log(element, index, array);
// });

// Array.prototype.filter2 = function (callback) {
//   var output = []; //Vi filter2() tra ve mang cac element thoa man dieu kien
//   for (var index in this) {
//     if (this.hasOwnProperty(index)) {
//       var result = callback(this[index], index, this);
//       if (result) {
//         output.push(this[index]);
//       }
//     }
//   }
//   return output;
// };

// console.log("-----------------------------------");

// var arrTest = [
//   {
//     id: 1,
//     language: "Javascript",
//     price: 0
//   },
//   {
//     id: 2,
//     language: "Vue",
//     price: 0
//   },
//   {
//     id: 3,
//     language: "PHP",
//     price: 100
//   }
// ];

// var newArrTest = arrTest.filter(function (element, index, array) {
//   return element.price > 0;
// });

// console.log(newArrTest);
// console.log("-----------------------------------");

// Array.prototype.every2 = function (cb) {
//   var output = true;
//   for (var index in this) {
//     if (this.hasOwnProperty(index)) {
//       if (!cb(this[index], index, this)) {
//         output = false;
//         break;
//       }
//     }
//   }
//   return output;
// };

// Array.prototype.some2 = function (cb) {
//   for (var index in this) {
//     if (this.hasOwnProperty(index)) {
//       if (cb(this[index], index, this)) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

// var courses = [
//   {
//     id: 1,
//     language: "Javascript",
//     price: 10000
//   },
//   {
//     id: 2,
//     language: "Vue",
//     price: 0
//   },
//   {
//     id: 1,
//     language: "PHP",
//     price: 100
//   }
// ];

// var result = courses.some2(function (course, index, courses) {
//   return course.price > 1000;
// });

// console.log(result);
// console.log(
//   courses.every2(function (course, index, courses) {
//     return course.price > 1000;
//   })
// );

// console.log("-----------------------------------");
// {
//   var varGlobal = "Day la bien toan cuc";
//   let letBlock = "Day la bien block";

//   console.log(letBlock);
// }

// console.log(varGlobal);
// console.log("-----------------------------------");
// var productsListElement = document.getElementsByClassName("product-list");
// var firstProductElement = document.querySelector(".product-list:first-child");
// var buttonElements = document.getElementsByTagName("button");
// console.log(productsListElement);
// console.log(firstProductElement);
// console.log(buttonElements);
// console.log("-----------------------------------");
// var liNodeList = document.querySelectorAll(".box-1 li");
// //Want to do a few work with box-1 div and also all li tag
// //Work with box-1 first
// console.log(liNodeList);
// var boxNode = document.querySelector(".box-1");
// //Do some stuff here
// //Then work with all li child of box-1 div
// console.log(boxNode);
// boxNode.style = "color: red;";
// boxNode.classList.add("box-shadow");
// var liNodeList1 = boxNode.querySelectorAll("li");
// console.log(liNodeList1);
// console.log("----------------------------------------");
// const div = document.createElement("div");
// div.className = "foo";

// // our starting state: <div class="foo"></div>
// console.log(div.outerHTML);

// // use the classList API to remove and add classes
// div.classList.remove("foo");
// div.classList.add("anotherclass");

// // <div class="anotherclass"></div>
// console.log(div.outerHTML);

// // if visible is set remove it, otherwise add it
// div.classList.toggle("visible");
// let i = 0;
// // add/remove visible, depending on test conditional, i less than 10
// div.classList.toggle("visible", i < 10);

// console.log(div.classList.contains("foo"));

// // add or remove multiple classes
// div.classList.add("foo", "bar", "baz");
// div.classList.remove("foo", "bar", "baz");

// // add or remove multiple classes using spread syntax
// const cls = ["foo", "bar"];
// div.classList.add(...cls);
// console.log(div.classList);
// div.classList.remove(...cls);

// // replace class "foo" with class "bar"
// div.classList.replace("foo", "bar");

// console.log("---------------------------------------------");
// //Code thế này thì không bị lỗi
// document.querySelector(".box-1").innerHTML =
//   '<div class="on">Khong bi loi</div>';
// //Còn thế này thì bị lỗi
// // document.querySelector(".box-1").innerHTML ="<div class="on">Sao lai loi</div>";

// var courses2 = ["HTML & CSS", "Javascript", "PHP", "Java"];

// // function render(courses) {
// //   var ulNode = document.querySelector(".courses-list");
// //   var html = "";
// //   for (var index in courses) {
// //     html += `<li>${courses[index]}</li>`;
// //   }
// //   // ulNode.innerHTML = html;
// //   console.log(ulNode.innerHTML);
// // }

// // render(courses2);

// console.log("---------------------------------------------");

// console.log([document.querySelector(".courses-list")]);
// console.log("---------------------------------------------");
// var divList = document.querySelectorAll("div");
// var divList2 = document.getElementsByTagName("div");
// console.log(divList);
// console.log(divList2);
// divList.forEach(function (divItem) {
//   divItem.classList.add("box");
// });
// console.log("---------------------------------------------");
// var h2nodes = document.querySelectorAll("h2");
// console.log(h2nodes);
// for (var index in h2nodes) {
//   h2nodes[index].onclick = function (e) {
//     console.log(e.target);
//   };
// }

// console.log("-------------------------------------------------");
// var boxNode = document.querySelector(".box-1");
// console.log(boxNode);

// //Không muốn phải lặp lại điều trên ta có cách làm như sau:
// Object.assign(boxNode.style, {
//   width: "200px",
//   height: "100px",
//   backgroundColor: "red"
// });
// console.log("-------------------------------------------------");
// document.querySelector('input[type="text"]').onkeydown = function (e) {
//   console.log(e.target.value);
// };
// document.querySelector('input[type="checkbox"]').onchange = function (e) {
//   console.log(e.target.checked);
// };
// document.querySelector("select").onchange = function (e) {
//   console.log(e.target.value);
// };
// document.querySelector('input[type="text"]').onkeydown = function (e) {
//   console.log(e.which);
//   switch (e.which) {
//     case 27:
//       console.log("ESC");
//       break;
//   }
// };
// console.log("-------------------------------------------------");
// var aNodes = document.querySelectorAll("a");

// for (var index in aNodes) {
//   aNodes[index].onclick = function (e) {
//     if (!e.target.href.startsWith("http://www.nettruyenco.com/")) {
//       e.preventDefault(); //Ngăn chặn hành vi mặc định của trình duyệt trên Element a có href không phải là http://www.nettruyenco.com/
//     }
//   };
// }

// console.log("-------------------------------------------------");
// var click = document.querySelector("ul");
// click.addEventListener("mousedown", (e) => {
//   e.preventDefault();
// });
// click.addEventListener("click", (e) => {
//   console.log(e.target.innerText);
// });
// console.log("-------------------------------------------------");
// document.querySelector("div").onmousedown = function (e) {
//   console.log("DIV");
// };
// document.querySelector("button").onclick = function (e) {
//   e.stopPropagation();
//   console.log("Click me");
// };

// var json = '["php","javascript"]';
// var json1 = '{"name": "Son2k", "age": 27}';
// var object = {
//   name: "son2k",
//   number: 01,
//   age: 27
// };

// console.log(JSON.parse(json1));
// console.log(object);
// //Trường hợp này in ra 1 < 2 la dung sau 3s đúng như anh Sơn dạy
// var promise = new Promise(function (resolve, reject) {
//   if (1 < 2) {
//     return resolve("1 < 2 la dung");
//   } else return reject();
// });

// promise
//   .then(function (data) {
//     return new Promise(function (resolve) {
//       setTimeout(resolve(data), 3000);
//     });
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch()
//   .finally();
//Trường hợp này in ra 1 < 2 la dung ngay lập tức
// promise
//   .then(function (data) {
//     return new Promise(function (resolve) {
//       setTimeout(function () {
//         resolve(data);
//       }, 3000);
//     });
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch()
//   .finally();

var postAPI = "https://jsonplaceholder.typicode.com/users";

fetch(postAPI)
  .then(function (response) {
    return response.json();
  })
  .then(function (users) {
    var htmls = users.map(function (user) {
      return `<li>
        <h2>${user.name}</h2>
        <h2>${user.id}</h2>
        <h2>${user.company.name}</h2>
        <h2>${user.address.street}</h2>
      </li>`;
    });

    var html = htmls.join("");
    console.log(html);
    document.getElementById("user-block").innerHTML = html;
  });
