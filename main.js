

var quotes = fetch("https://quote-garden.herokuapp.com/api/v3/quotes")
    .then(function (response) {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    })
    .then(function (data) {
        var quotes = document.getElementsByClassName("quote");
        console.log("quotes", quotes);
        for (let i = 0; i < quotes.length; i++) {
            console.log("data.data[i]", data.data[i]);
            quotes[i].innerHTML = data.data[i].quoteText;
        }
    })
    .catch(function (error) {
        console.warn("Something went wrong.", error);
    });
