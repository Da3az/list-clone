import Thumbnail from './Thumbnail';
import FlipMove from "react-flip-move";

interface Ithumbnail{
    backdrop_path:string,
    poster_path:string,
    overview:string,
    title:string,
    original_name:string,
    release_date:string,
    first_air_date:string,
    id:number,
    vote_count:number
}

interface Iresults{
    page:number,
    results:Array<Ithumbnail>,
    total_page:number,
    total_results:number
}
    

function Results({results}:{results:Iresults}) {
    return (
        <FlipMove className="px-5 my-5 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
            {results.results.map(result=>(
                <Thumbnail key={result.id} result={result}/>
            ))}
        </FlipMove>
    )
}

export default Results
