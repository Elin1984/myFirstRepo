const btn =document.querySelector("[form");
const input = document.querySelector("[#input]");
const p = document.querySelector("#p");


const OneQuoteApi= "https://api.breakingbadquotes.xyz/v1/quotes";
let data;

async function fetchApi(OneQuoteApi) {
  try {
    const res = await fetch(OneQuoteApi)
    date = await res.json();
    return data;
  } catch (error){
    console.log(error);
  }

}

async function handelSubmit(e){
  e.preventDefault();
  data = await fetchApi(OneQuoteApi);
  console.log(data);
  p.innerHTML = data.map((information) =>{
      return`<h4 class="p1">${information.quote}</h4>`;
  })
}
btn.onsubmit= handelSubmit;



