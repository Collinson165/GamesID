import { searchGames } from "../igdb";

export default async function handler(req, res) {
    const { searchTerm } = req.query;

    try {
        const games = await searchGames(searchTerm);
        res.status(200).json(games);
    } catch (error) {
        res.status(500).json({ error: 'Failed to search games'});
    }
}