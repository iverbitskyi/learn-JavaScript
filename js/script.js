"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        personalMovieDB.count = +prompt('Скільки фільмів ви вже переглянули?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Скільки фільмів ви вже переглянули?', '');
        }
    },

    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один з останніх переглянутих фільмів?', '').trim(),
                  b = prompt('На скільки оціните його?', '');
            
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Ви переглянули дуже мало фільмів');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Ви чудовий глядач');
        } else if (personalMovieDB.count >= 30) {
            console.log('Ви кіноман!');
        } else {
            console.log('Виникла помилка');
        }
    },

    showMyDB: function() {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш улюблений жанр під номером ${i}`);

            if (genre == '' || genre == null) {
                console.log('Ви ввели некоректні дані, або не ввели їх взагалі');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        // альтернативний варіант
        // for (let i = 1; i < 2; i++) {            
        //     let genres = prompt(`Введіть ваі улюблені жанри через кому`).toLowerCase();

        //     if (genres === '' || genres == null) {
        //         console.log('Ви ввели некоректні дані, або не ввели їх взагалі');
        //         i--;
        //     } else {
        //         personalMovieDB.genres = genres.split(', ');
        //         personalMovieDB.genres.sort();
        //     } 
        // }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Улюблений жанр №${i + 1} - це ${item}`);
        });
    }
};