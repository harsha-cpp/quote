const quotes = [
  {
    quote: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci"
  },
   {
    quote: "Good morning! Remember, every line of code you write is a step towards creating something amazing. Keep coding and stay inspired!",
    author: "HARSHA"
  },
  {
    quote: "First, solve the problem. Then, write the code.",
    author: "John Johnson"
  },
  {
    quote: "Programs must be written for people to read.",
    author: "Harold Abelson"
  },
  {
    quote: "Make it work, make it right, make it fast.",
    author: "Kent Beck"
  },
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay"
  }
];

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET,OPTIONS"
};

exports.handler = async function (event) {
  const method =
    event?.requestContext?.http?.method || event?.httpMethod || "GET";

  if (method === "OPTIONS") {
    return {
      statusCode: 204,
      headers,
      body: ""
    };
  }

  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(quote)
  };
};
