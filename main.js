
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://imdb-top-100-movies.p.rapidapi.com/');
xhr.setRequestHeader('X-RapidAPI-Key','b4728b60bemsh5c88222e38052bbp1b1f1cjsnb870a9647ade');
// xhr.setRequestHeader('X-RapidAPI-Key','449c5e03cfmshbe9be48b8beac87p17cca3jsn7bb1770b1ed2');
xhr.setRequestHeader('X-RapidAPI-Host','imdb-top-100-movies.p.rapidapi.com');

xhr.onreadystatechange = () => {
if(xhr.readyState == 4 && xhr.status == 200) {
	const response = JSON.parse(xhr.responseText)
	var movies = "";
	var movieDetail = "";
	console.log(response)
	
	for( let  i = 1;i < response.length ; i++)
	{
		
		movies += `<li> 
		<h5>${i} ${response[i].title} </h5>
		</li>`
		if(i < 10){
			movieDetail += `<section>
            <img src= "${response[i].image[0][1]}">
            <h3>${response[i].title}</h3>
            <p>Release Year: ${response[i].year}</p>
           
            <p>Plot Summary: ${response[i].description}</p>
        </section> <hr><br>`;
		}

		// output +=`
		// <div style ="width: 30%; margin: 8px;">
		// 	<img src="${response.array[i].image.url}"style="width: 100% height: 350px;"/>
		// </div>
		// `


	}
	document.getElementById("movies").innerHTML = movies;	
	document.getElementById("moviesDetail").innerHTML = movieDetail;	
}
}
xhr.send();
