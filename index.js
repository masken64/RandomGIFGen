const gif = document.querySelector("#gifcontainer");
//api key public becuase its free tier and rate limited to 100 calls per hour so not an issue
async function getCats(){
  try{
  const keyword = await prompt("enter a keyword");
  const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=zz4wzmlG06dqGdYdNm6GsiJEaOiL5gS0&s=${keyword}`,{mode: "cors",},);
  const catData = await response.json();
  gif.src = catData.data.images.original.url;
}catch(err){
  console.error(err);
  gif.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzB2aWFodmxzcTRhaHZ6bHYxYmVncG85YWVoa2gxcnZqeGZpMXBuaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sE1fbQPozKg3q5I2W2/giphy.gif";
}
}
getCats();
