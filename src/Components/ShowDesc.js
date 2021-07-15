import React, { useState, useEffect } from "react"
import { useParams } from "react-router"
import Header from "./Header"
import axios from "axios"
import './ShowDesc.css'
export default function ShowDesc() {
    let Id = useParams()
    const [fetchURL] = useState(`https://api.themoviedb.org/3/movie/${Id.id}?api_key=20d913bda50836a3a7c9e7ad70acab65&language=en-US`);
    const [fetchURL2] = useState(`https://api.themoviedb.org/3/movie/${Id.id}/credits?api_key=20d913bda50836a3a7c9e7ad70acab65&language=en-US`)
    const [data, setData] = useState({
        release_date: ''
    });
    const [cast, setCast] = useState('')
    const [director, setDirector] = useState('Cast: ')
    const [isLoading,setIsLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(fetchURL);
                const response2 = await axios.get(fetchURL2);
                if(response.status === 200 && response2.status === 200){
                    setData(response.data);
                    response2.data.cast.map((c) =>
                        {
                            if(c["known_for_department"]=== "Acting") 
                            {
                                setCast(s => s + c.name + ", ");
                            }    
                        });
                    response2.data.crew.map((c) =>
                        {
                            if(c["job"]=== "Director") 
                            setDirector(c.name);
                        });
                    setIsLoading(false);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    }
    , []);
    return (
        isLoading ? <h1>Loading</h1> :
     (
        <>
            <Header isSearchBar={false} />
            <div className="MainContainer">
                <div className="ImgContainer">
                    <img src={(data.backdrop_path) ? 'https://image.tmdb.org/t/p/w500' + data.backdrop_path : "Image.png"} />
                </div>
                <div className="textContainer">
                    <h2>{data.original_title} <span>({data.vote_average})</span></h2>
                    <p>Year: {data.release_date.slice(0,4)} | Duration: {parseFloat(data.runtime / 60).toFixed(2)} | Director: {director}</p>
                    <p>Cast: {cast}</p>
                    <p>Description: {data.overview}</p>
                </div>
            </div>
        </>
    )
    )
}





