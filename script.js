window.onload = function() {
    /* une fonction qui prend en paramètre un nombre 
    et affiche dans le catalogue le film associé 
    à ce nombre */
    for (var i = 0; i < Array.length; i++) {
        createFilms(i);
    }
    function createFilms(number) {
        var someFilms = filmsData[number];

        // creation d'un film
        var film = document.createElement("div");
        film.className = "film";
        film.id = number + "-film";

        // creation de l'image
        var image = document.createElement("img");
        image.src = someFilm.image;
        image.alt = someFilm.title;

        // creation du titre du film
        var titre = document.createElement("h3");
        titre.innerHTML = someFilm.title;

        films.appendChild(image);
        films.appendChild(titre);
        document.getElementById("films").appendChild(film);
    }

    var input = document.getElementsByTagName("input");
    var films = document.getElementById('films');
    input[0].addEventListener("keyup", recherche);
    input[1].addEventListener("mouseup", checkbox);
    films.addEventListener("mouseover", survoleFilm);
    films.addEventListener("mouseout", finSurvol);
    films.addEventListener("click", selectionFilm);

    function recherche(event) {
        var inputValue = event.target.value;
        inputValue = inputValue.toLocaleLowerCase();

        console.log(inputValue);

        if (inputValue == "") {
            // input est vide
        } else {
            // input n'est pas vide
            for (var i = 0; i < filmsData.length; i++) {
                var titre = filmsData[i].title;
                titre = titre.toLocaleLowerCase();
                var film = document.getElementById(i + "-film");

                if (titre.includes(inputValue) == false) {
                    film.style.display = "none";
                } else {
                    film.style.display = "inline-block";
                }
            }
        } // fin fontion recherche

        function checkbox(event) {
            var details = document.getElementById("details");
            if (event.target.checked) {
                details.style.display = "none";
            } else {
                details.style.display = "block";
            }
        }
        function survoleFilm(event) {
            var elementSurvolee = event.target.parentNodes;
            var identifiantFilm = elementSurvolee.id;
            var position;
            if (identifiantFilm == "catalogue") {
                return;
            } else if (identifiantFilm.length == 6) {
                position = identifiantFilm[0];
            } else if (identifiantFilm.length == 7) {
                position = identifiantFil[0]+identifiantFilm[1];
            } else {
                return;
            }


            var description = filmsData[position].text;
            document.getElementById("details").innerHTML = description;
            // console.log(description);
        } // fin fonction survolFilm

        function finSurvol(event) {
            document.getElementById("details").innerHTML = "";
        }

        function selectionFilm(event) {
            var film = event.target.parentNode;
            var select1 = document.getElementById("selection1");
            var select2 = document.getElementById("selection2");
            film.addEventListener("mouseover", survoleFilm);
            film.addEventListener("mouseout", finSurvol);

            var select1Child = select1.childNodes;
            var select2Child = select2.childNodes;

            if (select1Child.length == 1) {
                select1.insertBefore(film, select1Child[0]);
            } else if (select2Child.length == 1) {
                select2.insertBefore(film, select2Child[0]);
            } else {
                alert("Désolé, vous avez déjà choisi deux films !");
            }
            consoleventlog(select2Child);
        }
    }
}
