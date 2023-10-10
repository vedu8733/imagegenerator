let form = document.querySelector("form")
let searchresult = document.querySelector(".searchresult")
let showmore = document.querySelector(".fotteritem");
let search = document.querySelector(".searchtext");
let searchbtn= document.querySelector(".search")

let code = "tAFuATDtsNLfDA_q7eBwQZKcSV3h34ZqlY8xKiVzYcs"

let page = 1;
let inputdata = "";

async function searchimage() {
   inputdata = search.value;
   const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${code}&orientation=landscape&per_page=9`
   console.log("fetching results")
   const response = await fetch(url)
   const data = await response.json()
   // console.log(data);
   const results = data.results;
   console.log(results)

   if (page == 1) {
      searchresult.innerHTML = ""
   }

   results.map((result) => {
      const maindiv = document.createElement("div");
      maindiv.classList.add("item")
      const img = document.createElement("img");
      img.src = result.urls.small;
      const para = document.createElement("p");
      para.textContent = result.alt_description;
      maindiv.appendChild(img);
      maindiv.appendChild(para);
      searchresult.appendChild(maindiv);



   });




   showmore.style.display = "block";


}

form.addEventListener("submit", (e) => {
   e.preventDefault()
   page = 1;
   searchimage();
   // console.log("vedu", page)

})

showmore.addEventListener("click", (e) => {

   page++;
   

   searchimage();
   // console.log(page)

})

searchbtn.addEventListener("click", (e) => {
   e.preventDefault()
   page = 1;
   searchimage();

})

