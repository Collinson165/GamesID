import { useRouter } from "next/router";
import { NextPage } from "next";
import axios from "axios";
import { useEffect, useState } from "react";

interface GamesPageProps {
    
}


const GamePage: NextPage<GamesPageProps> = () => {
    const router = useRouter();
    const { gameId } = router.query;
    const [game, setGame ] = useState({name: 'default'});

    useEffect( () => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/games/${gameId}`)
                setGame(response.data)
            }catch(error){
                console.log('errorrrr', error);

            }
            
        }

        fetchData();
    })
    
    


    return (
        <div>
            <h1>Game ID: { gameId }</h1>
            <p>{game && game.name}</p>
        </div>
    )
}


export default GamePage;