import { searchGames } from "../igdb";

export default async function handler(req, res) {
    const { query } = req.body;

    try {
        const games = await searchGames(query);
        res.status(200).json(games);
    } catch (error) {
        res.status(500).json({ error: 'Failed to search games'});
    }
}