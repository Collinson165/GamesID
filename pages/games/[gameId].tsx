/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { NextPage } from "next";
import axios from "axios";
import { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import Vibrant from "node-vibrant";
import 'react-circular-progressbar/dist/styles.css';

interface GamesPageProps {
    
}


const GamePage: NextPage<GamesPageProps> = () => {
    const router = useRouter();
    const { gameId } = router.query;
    const [game, setGame ] = useState<any>(null);

    // const vibrant = Vibrant.from(`https://images.igdb.com/igdb/image/upload/t_720p/${game ? game[0].screenshots[0].image_id : 'fwjvpiu2ircdq5afkm1o'}.jpg`)
    // vibrant.getPalette((err, palette) => {
    //   if(err){
    //     console.log('vibrant error')

    //   }else {
    //     const accentColor = palette?.Vibrant?.hex
    //     console.log(accentColor);
    //   }
    // })

    const backgroundStyle = {
      backgroundImage: `url(https://images.igdb.com/igdb/image/upload/t_720p/${game ? game[0].screenshots[0].image_id : ''}.jpg)`,
      // backgroundSize: '100% 100%',
      // filter: 'blur(1px)',
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/games/gameId?ID=${gameId}`)
                console.log(response.data)
                setGame(response.data)
            }catch(error){
                console.log('errorrrr', error);

            }
            
        }

        fetchData();
    }, [gameId])

    const convertTimeStampToYear = (timestamp) => {
        const date = new Date(timestamp * 1000)
        return date.getFullYear()
    }
    
    


    return (    
      <div className="min-h-screen">
      {/* Blurred background overlay */}
      <div style={backgroundStyle} className="absolute bg-cover md:bg-full inset-auto w-full h-full filter backdrop-grayscale bg-gradient-to-t to-gray-200 from-black  opacity-40 z-10"></div>

      {/* Content container */}
      <div className="min-h-screen grid place-items-center font-mono relative z-20">
    
      <div className="rounded-md bg-gray-800 shadow-lg m-10 bg-opacity-90">
      <div className="md:flex px-4 leading-none max-w-4xl">
          <div className="flex-none ">
            <img
            src={game ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${game[0].cover.image_id}.jpg` : `https://images.igdb.com/igdb/image/upload/t_thumb/undefined.jpg`}
            alt={game ? game[0].name: ''}
            className="h-72 w-56 rounded-md transform -translate-y-4 border-4 border-gray-300 shadow-lg"
          />           
          </div>

        <div className="flex-col text-gray-300">
  
          <p className="pt-4 text-2xl font-bold">{game && game[0].name}({game && convertTimeStampToYear(game[0].first_release_date)})</p>
          <hr className="hr-text" data-content="" />
          <div className="text-md flex justify-between px-4 my-2">
            <span className="font-bold">{game && game[0].involved_companies[0].company.name} | {game && game[0].genres.map(item => `${item.name}, `)}</span>
            <span className="font-bold"></span>
          </div>
          <p className="hidden md:block px-4 my-4 text-sm text-left">{game && game[0].summary}</p>
          <p className="md:hidden px-4 my-4 text-sm text-center">{game && game[0].summary}</p>
          
          <p className="flex text-md px-4 my-2">
            Rating: {game && Math.round(game[0].total_rating)}
            <span className="font-bold px-2">|</span>
            Platforms: {game && game[0].platforms.map(item => `${item.name}, `)}
          </p>
          
          <div className="text-xs">
            <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">TRAILER</button>
            
            <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">WEBSITE</button>
            
            <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">STEAM</button>
          </div>
        {/* <p>ICON BTNS</p> */}
        
        </div>
      </div>

      <div className="flex justify-between items-center px-4 mb-4 w-full">
        <div className="flex">
        <i className="material-icons mr-2 text-red-600">favorite_border</i>
        <i className="material-icons text-blue-600">remove_red_eye</i>
        </div>
        <div className="flex">
          <i className="material-icons ml-2 text-yellow-600">sentiment_very_satisfied</i>
          <i className="material-icons ml-2 text-yellow-600">sentiment_neutral</i>
          <i className="material-icons ml-2 text-yellow-600">sentiment_very_dissatisfied</i>
            <i className="material-icons ml-2 text-yellow-600">star_outline</i>
          <i className="material-icons ml-2 text-yellow-600">star_half</i>
          <i className="material-icons ml-2 text-yellow-600">star</i>           
          
        </div>
      </div>

    </div>
    
  </div>
  <div className="px-6 py-6 bg-gradient-to-t from-gray-900 to-black">
      <p>{game && game[0].storyline}</p>
      <div className="flex justify-center items-center">
        <div className="w-28 p-2">
          <CircularProgressbar value={game && Math.round(game[0].total_rating)} text={`${game && Math.round(game[0].total_rating)}%`} />
          <p className="text-sm text-center">{game && game[0].total_rating_count} average</p>
        </div>
        <div className="w-28 p-2">
          <CircularProgressbar value={game && Math.round(game[0].rating)} text={`${game && Math.round(game[0].rating)}%`} />
          <p className="text-sm text-center">{game && game[0].rating_count} member</p>
        </div>
        <div className="w-28 p-2">
          <CircularProgressbar value={game && Math.round(game[0].aggregated_rating)} text={`${game && Math.round(game[0].aggregated_rating)}%`} />
          <p className="text-sm text-center">{game && game[0].aggregated_rating_count} critics</p>
        </div>
        
      </div>
      
    </div>
      
  </div>

    )
}


export default GamePage;