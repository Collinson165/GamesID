import axios from "axios"
import dotenv from 'dotenv'

dotenv.config();

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
            `\r\nfields *, name*, summary*, cover.url, cover.image_id, cover.height, cover.width; search "${query}"; limit 30; where version_parent = null;\r\n`,
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
            `fields name, summary, storyline, cover.url; where id = ${id};`,
            { headers }
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
            `fields name, cover.url cover.image_id, release_dates; sort release_dates.date asc; limit 30;`,
            { headers }
        );
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
            `fields *, name*, summary*, cover.url, cover.image_id, cover.height, cover.width, release_dates; sort first_release_date desc; limit 30;`,
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
            `fields *,name*, cover.url, cover.image_id, release_dates; where rating > 80; sort aggregated_rating desc; limit 50;`,
            { headers },
        );
        return response.data;
    } catch(error) {
        console.error('Error getting Latest games:', error);
        throw new Error('Failed to get Latest games');
    }
}