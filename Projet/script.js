
const searchInput = document.getElementById('search');
const results = document.getElementById('results');

let countries;
let searchTerm = '';

const fetchCountries = async() => {
   countries = await fetch(
      'https://raw.githubusercontent.com/thierno953/API/main/api.json').then(res =>
       res.json());
};

const showCountries = async() => {
   await fetchCountries();

   
   results.innerHTML = (
      countries
      .filter(item => item.Country.toLowerCase().includes(searchTerm.toLowerCase()
      ))
      .map(item => (
        
         `
         <li class="item">
         <p class="item-item">${item.Country}</p>
         <div class="item-dates>
           <p class="item-date">${item[2002]}</p>
           <p class="item-date">${item[2003]}</p>
           <p class="item-date">${item[2004]}</p>
           <p class="item-date">${item[2005]}</p>
           <p class="item-date">${item[2006]}</p>
           <p class="item-date">${item[2007]}</p>
           <p class="item-date">${item[2008]}</p>
           <p class="item-date">${item[2009]}</p>
           <p class="item-date">${item[2010]}</p>
           <p class="item-date">${item[2011]}</p>
           <p class="item-date">${item[2012]}</p>
         </div>
         </li>
         
         `

      )).join('')
   );
};
showCountries();

 searchInput.addEventListener('input', (e) => {
    searchTerm = e.target.value;
    showCountries();
 });
 