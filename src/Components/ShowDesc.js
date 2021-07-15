import React, { useState, useEffect } from "react"
import { useParams } from "react-router"
import Header from "./Header"
import axios from "axios"
import './ShowDesc.css'
export default function ShowDesc() {
    let Id = useParams()
    const [fetchURL, setFetchURL] = useState(`https://api.themoviedb.org/3/movie/${Id.id}?api_key=20d913bda50836a3a7c9e7ad70acab65&language=en-US`);
    const [data, setData] = useState({
        release_date: ''
    });
    const [isLoading,setIsLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(fetchURL);
                if(response.status === 200){
                    setData(response.data);
                    setIsLoading(false);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getData();
        // axios.get(fetchURL).then((res) =>{ 
        //     console.log(res)
        //     setData(res.data)});
            // setIsLoading(false);
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
                    <p>Year: {data.release_date.slice(0,4)} | {Math.round(data.runtime / 60,1)} | Director</p>
                    <p>Cast : Actor 1,Actor 2,......</p>
                    <p>Description: {data.overview}</p>
                </div>
            </div>
        </>
    )
    )
}





