const API_KEY = process.env.API_KEY;



export const requests =  {
    'fetchTrending': {
        'title': 'Trending',
        'url': `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    'fetchTopRated': {
        'title': 'Top Rated',
        'url': `/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    'fetchActionMovies': {
        'title': 'Action',
        'url': `/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    'fetchComedyMovies': {
        'title': 'Comedy',
        'url': `/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    'fetchHorrorMovies': {
        'title': 'Horror',
        'url': `/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    'fetchRomanceMovies': {
        'title': 'Romance',
        'url': `/discover/movie?api_key=${API_KEY}&with_genres=10749`
    },
    'fetchMystery': {
        'title': 'Mystery',
        'url': `/discover/movie?api_key=${API_KEY}&with_genres=9648`
    },
    'fetchSciFi': {
        'title': 'Sci-Fi',
        'url': `/discover/movie?api_key=${API_KEY}&with_genres=878`
    },
    'fetchWestern': {
        'title': 'Western',
        'url': `/discover/movie?api_key=${API_KEY}&with_genres=37`
    },
    'fetchAnimation': {
        'title': 'Animation',
        'url': `/discover/movie?api_key=${API_KEY}&with_genres=16`
    },
    'fetchTV': {
        'title': 'TV Movie',
        'url': `/discover/movie?api_key=${API_KEY}&with_genres=10770`
    },
};

interface Iprops {
    title:string,
    url:string
}

const getUrl = async(fetchName:string|undefined) => {
    if(fetchName){
        const props:Iprops = Object.entries(requests).filter(el =>{if (el[0] === fetchName) return el[1] })[0][1]
            const requestRes = await fetch(`https://api.themoviedb.org/3${props.url}`)
            .then(res=>res.json())
            .catch(err => console.log(err));
        return {
            results:requestRes,
            genre:props.title
        }   

    }else{
     const requestRes = await fetch(`https://api.themoviedb.org/3${requests.fetchTrending.url}`)
      .then(res=>res.json())
      .catch(err => console.log(err));
        return {
            results:requestRes,
            genre:'Trending'
        }   
    } 


    
  
        
}

export default  getUrl 