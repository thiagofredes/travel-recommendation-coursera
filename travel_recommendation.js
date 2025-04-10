const recommendationsAPI = "travel_recommendation_api.json";

async function search(searchTerm) {
    let searchTermLoweCase = searchTerm.toLowerCase();
    let response;

    switch (searchTermLoweCase) {
        case "beach":
        case "beaches":
            response = await fetchRecommendation("beaches");
            break;

        case "temple":
        case "temples":
            response = await fetchRecommendation("temples");
            break;

        case "country":
        case "countries":
            response = await fetchRecommendation("countries");
            break;
    }

    return response;
}

async function fetchRecommendation(term) {
    let recommendation;
    await fetch(recommendationsAPI)
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return response.json();
        })
        .then(json => {
            recommendation = json[term];
        });

    return recommendation;
}