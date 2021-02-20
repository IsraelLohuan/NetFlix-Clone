const API_KEY = "9e0d2efa386f9ba5738da47b57b56790";
const API_BASE = "https://api.themoviedb.org/3";
const API_FINAL_URL = "language=pt-BR&api_key=" + API_KEY;

const basicFetch = async (endpoint) => {
    const request = await fetch(API_BASE + endpoint);
    const json = await request.json();
    return json;
};

export default {
    getHomeList: async () => {
        return [
            {
                slug: "originals",
                title: "Originais do Netflix",
                items: await basicFetch("/discover/tv?with_netfwork=213&" + API_FINAL_URL)
            },
            {
                slug: "tranding",
                title: "Recomendados para Você",
                items: await basicFetch("/trending/all/week?" + API_FINAL_URL)
            },
            {
                slug: "toprated",
                title: "Em Alta",
                items: await basicFetch("/movie/top_rated?" + API_FINAL_URL)
            },
            {
                slug: "action",
                title: "Ação",
                items: await basicFetch("/discover/movie?with_genres=28&" + API_FINAL_URL)
            },
            {
                slug: "comedy",
                title: "Comédia",
                items: await basicFetch("/discover/movie?with_genres=35&" + API_FINAL_URL)
            },
            {
                slug: "horror",
                title: "Terror",
                items: await basicFetch("/discover/movie?with_genres=27&" + API_FINAL_URL)
            },
            {
                slug: "romance",
                title: "Romance",
                items: await basicFetch("/discover/movie?with_genres=10749&" + API_FINAL_URL)
            },
            {
                slug: "documentary",
                title: "Documentários",
                items: await basicFetch("/discover/movie?with_genres=99&" + API_FINAL_URL)
            },
        ];
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};

        if(movieId) {
            let endpoint;

            type == "movie" ? endpoint = "/movie/" : endpoint = "/tv/";

            info = await basicFetch(endpoint + movieId + "?" + API_FINAL_URL);
        }
    
        return info;
    }
}