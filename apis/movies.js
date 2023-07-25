const url = 'https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '634b5ae667mshdd7a7d3611bdf50p1fdaa9jsnd146607128ed',
		'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
	}
};

async function movies() {  
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
    
}
movies()


