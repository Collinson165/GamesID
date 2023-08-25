import axios from "axios";

export default async function handler(req, res) {
    try {
        const { searchTerm } = req.query;
        const response = await axios.post(
            'https://api.igdb.com/v4/games',
            `fields name,summary,cover.url,release_date.human; search "${ searchTerm }"; limit 50;`,
            {
                headers: {
                    'Client-ID': '074qm4f50uqew1t1n7xw27d0xke5dq',
                    'Authorization': 'Bearer 850suag05yv2kyswn6nkayi92lbqkn',
                },
            }
        );
        res.status(200).json(response.data);
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}