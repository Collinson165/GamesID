import axios from "axios";
import dotenv from 'dotenv';

dotenv.config()

const Client_ID = process.env.CLIENT_ID
const Authorization = process.env.AUTHORIZATION

export default async function handler(req, res) {
    try {
        const { searchTerm } = req.query;
        const response = await axios.post(
            'https://api.igdb.com/v4/games',
            `fields name,summary,cover.url,release_date.human; search "${ searchTerm }"; limit 50;`,
            {
                headers: {
                    'Client-ID': Client_ID,
                    'Authorization': Authorization,
                },
            }
        );
        res.status(200).json(response.data);
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}