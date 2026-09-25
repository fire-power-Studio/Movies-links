/*
    MOVIE LINKS
    ===========
    Add legitimate/authorized movie websites here.

    Replace the "#" URLs with the actual official URLs
    you are permitted to link to.
*/

const movieSites = [

    {
        name: "1Flex",
        description: "Movie and TV entertainment website.",
        category: "Movies & TV",
        url:"https://www.1flex.org/"
    },

    {
        name: "Cinema.BZ",
        description: "Movie and TV entertainment website.",
        category: "Movies & TV",
        url: "https://cinema.army/"
    },

    {
        name: "Popcorn Movie",
        description: "Movie and TV entertainment website.",
        category: "Movies & TV",
        url: "https://popcornmovies.ac/"
    },

    {
        name: "Netplay",
        description: "Movie and TV entertainment website.",
        category: "Movies & TV",
        url: "https://netplayz.top/"
    },

    {
        name: "Pantyflix",
        description: "Movie and TV entertainment website.",
        category: "Movies & TV",
        url: "https://pantyflix.com/"
    },

    {
        name: "Moviejoy",
        description: "Movie and TV entertainment website.",
        category: "Movies & TV",
        url: "https://moviesjoy.sx/home"
    },

    {
        name: "Flixeo",
        description: "Movie and TV entertainment website.",
        category: "Movies & TV",
        url: "https://flixeo.tv/movies"
    },

    {
        name: "Myflixer",
        description: "Movie and TV entertainment website.",
        category: "Movies & TV",
        url: "https://myflixerfree.us/home"
    },

    {
        name: "movy/",
        description: "Movie and TV entertainment website.",
        category: "Movies & TV",
        url: "https://www.movy.sx/"
    },

    {
        name: "Netprime",
        description: "Movie and TV entertainment website.",
        category: "Movies & TV",
        url: "https://netprime.bz/"
    },

    {
        name: "Streamex",
        description: "Movies, TV shows and manga.",
        category: "Movies,TV",
        url: "https://streamex.ws/home"
    },
    
    {
    name:"7movies",
    description:"Movies, TV shows.",
    category:"Movies & TV",
    url:"https://7movies.ac/"
}

];

/* =========================
   CREATE WEBSITE CARDS
========================= */

const movieGrid = document.getElementById("movieGrid");
const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");


function displaySites(sites) {

    movieGrid.innerHTML = "";

    if (sites.length === 0) {
        noResults.style.display = "block";
        return;
    }

    noResults.style.display = "none";


    sites.forEach((site, index) => {

        const card = document.createElement("div");

        card.className = "movie-card";


        card.innerHTML = `

            <div>

                <div class="card-number">
                    ${String(index + 1).padStart(2, "0")}
                </div>

                <div class="card-icon">
                    🎬
                </div>

                <h3>
                    ${site.name}
                </h3>

                <p>
                    ${site.description}
                </p>

                <p style="margin-top:8px;">
                    ${site.category}
                </p>

            </div>


            <a
                href="${site.url}"
                class="visit-button"
                target="_blank"
                rel="noopener noreferrer"
            >
                Visit Website →
            </a>

        `;


        movieGrid.appendChild(card);

    });

}


/* =========================
   SEARCH
========================= */

searchInput.addEventListener("input", function () {

    const searchTerm =
        this.value.toLowerCase().trim();


    const filteredSites =
        movieSites.filter(site =>

            site.name
                .toLowerCase()
                .includes(searchTerm)

            ||

            site.description
                .toLowerCase()
                .includes(searchTerm)

            ||

            site.category
                .toLowerCase()
                .includes(searchTerm)

        );


    displaySites(filteredSites);

});


/* =========================
   INITIAL DISPLAY
========================= */

displaySites(movieSites);