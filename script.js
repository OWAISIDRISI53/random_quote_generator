let qoute = document.getElementById("qoute")
let author = document.getElementById("author")

let gen_quote = document.getElementById("gen_quote")

const url = 'https://quotes15.p.rapidapi.com/quotes/random/';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c12ef31a82msh8000c38044c4b4bp1976c6jsn40e1e8312c7e',
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
    }
};

async function getRandomQuote() {
    try {
        qoute.innerHTML = "Loading...."
        author.innerHTML = "Loading...."
        const response = await fetch(url, options)
        const result = await response.text()
        const result_qoute = Array(JSON.parse(result))
        const author_name = (result_qoute[0].originator.name);
        qoute.innerHTML = `"${result_qoute[0].content}"`
        author.innerHTML = author_name
    } catch (error) {
        console.log(error);
    }
}
getRandomQuote()

gen_quote.addEventListener("click", getRandomQuote)
