// var request = new XMLHttpRequest();

// const API_URL = "https://quote-garden.herokuapp.com/api/v3/quotes";
// // const URL = API_URL.replace(":id", id);
// request.open("GET", URL);
// request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
// request.responseType = "json";
// XMLHttpRequest.onload = callback;

// request.onload = function () {
//     // the response status tells us the HTTP status code, if it is 200, it means the response status is "OK"
//     if (this.status === 200) {
//         console.log("response", this.response)
//         // we save the response into a variable
//         // var newCharacterJSON = this.response;
//         // console.log(newCharacterJSON);

//         // // upon studying the response data structure, we know we need to access the "image" JSON key to get the image URL
//         // var imagePath = newCharacterJSON.image;

//         // // now we set the src attribute of our image element to the URL from the reponse
//         // avatar.setAttribute("src", imagePath);

//         // // to get the image description, we access the "name" JSON key
//         // var characterName = newCharacterJSON.name;
//         // if (characterName) {
//         //     // we set the text to show the name we got from the response
//         //     imageDescription.innerHTML = characterName;
//         // } else {
//         //     // if no input has been given, we display the message to choose one
//         //     imageDescription.innerHTML = "Please choose a number";
//         // }
//     } else {
//         // if the response status is different from 200, an error ocurred (the ID may be out of range)
//         // imageDescription.innerHTML = `An error occurred during your request! Choose a different number. Code: ${request.status}`;
//     }
// };

// request.send();

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
