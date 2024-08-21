const url = "https://v2.jokeapi.dev/joke/Any?safe-mode";

const btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    const joke = await fetchJoke();
    displayJoke(joke);
});

async function fetchJoke() {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data.type === "single" ? data.joke : `${data.setup} - ${data.delivery}`;
    } catch (err) {
        console.error("Error: ", err);
        return "Couldn't fetch a joke. Try again!";
    }
}

function displayJoke(joke) {
    const jokeDiv = document.querySelector("#joke");
    jokeDiv.innerHTML = `<p>${joke}</p>`;
}
