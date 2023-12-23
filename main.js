async function getJson(url) {
    // Запрос JSON с данными по внешнему адресу
    let response = await fetch(url);
    // Ожидание загрузки файла и его преобразование в JSON
    let promise = await response.json();
    // Возвращение объекта Promise для обработки
    return promise;
}


let form = document.querySelector("#form");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    $(".card").remove();
    //console.log(searchMovie(form.title.value, form.type.value));
    let buff = searchMovie(form.title.value, form.type.value);
    console.log(buff);
    console.log(buff.length);
    console.log(buff);
    
    renderCard(buff[0]);
});

let strTest = new MyString("qwerty");
let strTest2 = new MyString("qweeeerty");
console.log(strTest2.counter('e'));
strTest2.trimSign();
console.log(strTest2.counter('e'));
console.log(strTest2);
strTest.remove(-4);
console.log(strTest);
strTest.insert(2, "X");
console.log(strTest);
strTest.toggle();
console.log(strTest);



// Поскольку функция возвращает Promise, который ожидает загрузки файла,
// необходимо дождаться окончания всех await в ней с помощью then.
// Результат работы (ответ от сервера при успешном выпонлении) будет сохранён
// в переменную posts
// getJson("https://jsonplaceholder.typicode.com/posts").then(posts => {
//     // Далее с помощью метода forEach происходит
//     // перебор значений внутри массива объектов 
//     posts.forEach(post => {
//         // Создание основного тега-контейнера для КАЖДОЙ статьи
//         let article = document.createElement("article");
//         // Создание заголовка и его наполнение
//         let h2 = document.createElement("h2");
//         h2.innerText = post.title;
//         // Создание основного текста и его наполнение
//         let p = document.createElement("p");
//         p.innerText = post.body;
//         // Добавление элементов в контейнер
//         article.append(h2, p);
//         // Добавление контейнера на страницу
//         document.body.querySelector("main").append(article);
//     });
// });

//http://www.omdbapi.com/?apikey=b9468d4d&
/*
Search: Array(10)
0: {Title: 'Hello, My Name Is Doris', Year: '2015', imdbID: 'tt3766394', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BNDZlM2ZjMz…TQ5MmIyXkEyXkFqcGdeQXVyMTU3NDU4MDg2._V1_SX300.jpg'}
1: {Title: 'Hello, Dolly!', Year: '1969', imdbID: 'tt0064418', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BODJmZmFiNz…mEyYjNiXkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SX300.jpg'}
2: {Title: 'Hello Mini', Year: '2019–', imdbID: 'tt9454892', Type: 'series', Poster: 'https://m.media-amazon.com/images/M/MV5BNTFiOTkyNj…zJjOTEwXkEyXkFqcGdeQXVyMTE0Nzg1NjQ2._V1_SX300.jpg'}
3: {Title: 'Hello Ladies', Year: '2013–2014', imdbID: 'tt2378794', Type: 'series', Poster: 'https://m.media-amazon.com/images/M/MV5BNjYxMjI3MzY3NF5BMl5BanBnXkFtZTgwMTgyNzg3MDE@._V1_SX300.jpg'}
4: {Title: 'Hello Mary Lou: Prom Night II', Year: '1987', imdbID: 'tt0093176', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BZGFmZjQ0ZT…TcyODY0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'}
5: {Title: 'Hello I Must Be Going', Year: '2012', imdbID: 'tt2063666', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BZDI0MjQ1M2…DNlZTI1XkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_SX300.jpg'}
6: {Title: 'Hello Tomorrow!', Year: '2023–', imdbID: 'tt14596212', Type: 'series', Poster: 'https://m.media-amazon.com/images/M/MV5BMDNkM2I5OD…DA2MGNjXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_SX300.jpg'}
7: {Title: 'Hello Ladies: The Movie', Year: '2014', imdbID: 'tt3762944', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMTQ5MjYxMjkwOV5BMl5BanBnXkFtZTgwODE3MjY0MzE@._V1_SX300.jpg'}
8: {Title: 'Hello Ghost', Year: '2010', imdbID: 'tt1848926', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BYjZlYTBlZW…mM2OGU3XkEyXkFqcGdeQXVyNjI4NDY5ODM@._V1_SX300.jpg'}
9: {Title: 'Hello Brother', Year: '1999', imdbID: 'tt0233856', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMjk1MDczMG…TcyNjczXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg'}
length: 10
*/
/*
getJson("http://www.omdbapi.com/?apikey=b9468d4d&s=hello").then((value) => {
    console.log(value);
});



    /*
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    td1.innerText = "Name:";
    tr.appendChild(td1);
    var td2 = document.createElement('td');
    td2.innerText = userObj.name;
    tr.appendChild(td2);

    document.body.querySelector("main").appendChild(tr);
    */

// GET example:
// https://jsonplaceholder.typicode.com/users?id=1&username=Bret
// https://jsonplaceholder.typicode.com/posts?userId=4