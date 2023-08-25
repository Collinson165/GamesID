import { getLatestGames } from "../igdb";

export default async function handler(req, res) {
    try {
        const games = await getLatestGames();
        res.status(200).json(games);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get Latest games'});
    }
}