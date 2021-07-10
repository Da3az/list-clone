import Image from 'next/image';
import {ThumbUpIcon} from "@heroicons/react/outline";


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

function Thumbnail({result}:{result:Ithumbnail}){
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
    return (
        <div key={result.id} className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
            <Image 
                layout='responsive'
                height={1080}
                width={1920}
                src={
                    `${BASE_URL}${result.backdrop_path || result.poster_path}`
                }
            />

            <div className="p-2">
                <p className="truncate max-w-md">{result.overview}</p>
                <h2 className="mt-1 text-2xl text-white transition-all
                duration-100 ease-in-out group-hover:font-bold text-hulu_ dark:text-white">
                    {result.title || result.original_name}
                </h2>
                <p className="flex items-center opacity-0 group-hover:opacity-100">
                    {result.release_date || result.first_air_date} ●{" "}
                    <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
                </p>
            </div>
        </div>
    )
}

export default Thumbnail
