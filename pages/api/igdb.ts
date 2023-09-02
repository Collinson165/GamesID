import axios from "axios"
import dotenv from 'dotenv'

dotenv.config();

const today = Math.floor(new Date().getTime() / 1000)

const BASE_URL = 'https://api.igdb.com/v4';
const clientID = process.env.CLIENT_ID;
const authorization = process.env.AUTHORIZATION;
const headers = {
    'Client-ID': clientID,
    'Authorization': authorization,
    'Content-Type': 'text/plain',
}

export async function searchGames(query:string) {
    try {
        const response = await axios.post(
            `${BASE_URL}/games`,
            `\r\nfields *, name, cover.url, cover.image_id; search "${query}"; limit 30; where version_parent = null;\r\n`,
            {
                headers: {
                    'Client-ID': clientID,
                    'Authorization': authorization,
                    'Content-Type': 'text/plain',
                } 

            }
        );
        console.log(JSON.stringify(response.data))
        return response.data;
    } catch (error) {
        console.error('Error Searching games:', error);
        throw new Error('Failed to search games');
    }
    
}

export async function getGameById(id:string){
    try {
        const response = await axios.post(
            `${BASE_URL}/games`,
            `fields *, name, summary, storyline, cover.image_id, genres.name, involved_companies.company.*, platforms.name, screenshots.image_id, artworks.image_id; where id = ${id};`,
            {headers}
               
        );
        return response.data;
    } catch (error) {
        console.error('Error getting game by ID:', error);
        throw new Error('Failed to get game by ID');
    }
} 

export async function getUpcomingGames(){
    try{
        const response = await axios.post(
            `${BASE_URL}/games`,
            // `fields game.name, game.cover.image_id, human, date; where date > ${today} & category = 0; limit 50;`,
            `fields name, cover.image_id, first_release_date, aggregated_rating, rating; where first_release_date != null & first_release_date > ${today}; sort first_release_date asc; limit 50;`,
            { headers }
        );
        // const gameData = response.data.map(item => ({
        //     ...item,
        //     ...item.game
        // }))
        // return gameData;
        return response.data;
    } catch(error) {
        console.error('Error getting upcoming games:', error);
        throw new Error('Failed to get Upcoming games');
    }
}

export async function getLatestGames(){
    try{
        const response = await axios.post(
            `${BASE_URL}/games`,
            `fields name, cover.image_id, first_release_date, aggregated_rating, rating; where first_release_date != null & first_release_date < ${today} & rating > 0; sort first_release_date desc; limit 50;`,
            { headers },
        );
        return response.data;
    } catch(error) {
        console.error('Error getting Latest games:', error);
        throw new Error('Failed to get Latest games');
    }
}

export async function getTopGames(){
    try{
        const response = await axios.post(
            `${BASE_URL}/games`,
            `fields *,name*, cover.url, cover.image_id, first_release_date, release_dates.date; where rating > 85 & aggregated_rating > 85; sort aggregated_rating desc; limit 100;`,
            { headers },
        );
        return response.data;
    } catch(error) {
        console.error('Error getting Latest games:', error);
        throw new Error('Failed to get Latest games');
    }
}