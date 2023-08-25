import axios from "axios"

const BASE_URL = 'https://api.igdb.com/v4';
const clientID = process.env.CLIENT_ID;
const authorization = process.env.AUTHORIZATION;
const headers = {
    'Client-ID': '074qm4f50uqew1t1n7xw27d0xke5dq',
    'Authorization': 'Bearer 850suag05yv2kyswn6nkayi92lbqkn',
}

export async function searchGames(query:string) {
    try {
        const response = await axios.post(
            `${BASE_URL}/games`,
            `search "${query}"; fields name, summary, cover.url; `,
            { headers }
        );
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
            `fields name, cover.url, release_dates; sort release_dates.date asc; limit 30;`,
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
            `fields name, cover.url, release_dates; sort first_release_date desc; limit 30;`,
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
            `fields name, cover.url; where platforms = 6; sort popularity asc; limit 50;`,
            { headers },
        );
        return response.data;
    } catch(error) {
        console.error('Error getting Latest games:', error);
        throw new Error('Failed to get Latest games');
    }
}