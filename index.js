const gif = document.querySelector("#gifcontainer");
const keyword = prompt("enter a keyword");




//api key public becuase its free tier and rate limited to 100 calls per hour so not an issue
if (keyword) {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=zz4wzmlG06dqGdYdNm6GsiJEaOiL5gS0&s=${keyword}`,
    {
      mode: "cors",
    },
  )
    .then(handleResponse)
    .then(logResponse);
}

function handleResponse(response) {
  return response.json();
}
function logResponse(response) {
  const currImage = response.data.images.original.url;
  gif.src = currImage;
}
