const apiUrl = "https://your-lambda-url.lambda-url.region.on.aws/";

const quoteButton = document.getElementById("quoteButton");
const statusText = document.getElementById("status");
const quoteCard = document.getElementById("quoteCard");
const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");

async function loadQuote() {
  quoteButton.disabled = true;
  quoteButton.textContent = "Loading...";
  statusText.textContent = "Loading quote...";
  statusText.className = "status is-loading";
  quoteCard.hidden = true;

  try {
    const response = await fetch(apiUrl, {
      method: "GET"
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();

    if (!data.quote || !data.author) {
      throw new Error("Invalid response format");
    }

    quoteText.textContent = `“${data.quote}”`;
    quoteAuthor.textContent = data.author;
    statusText.textContent = "Quote loaded successfully.";
    statusText.className = "status";
    quoteCard.hidden = false;
  } catch (error) {
    console.error(error);
    statusText.textContent =
      "Unable to load a quote. Check the API URL and try again.";
    statusText.className = "status is-error";
    quoteCard.hidden = true;
  } finally {
    quoteButton.disabled = false;
    quoteButton.textContent = "Get Quote";
  }
}

quoteButton.addEventListener("click", loadQuote);
