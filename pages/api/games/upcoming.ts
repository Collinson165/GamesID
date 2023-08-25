import { getUpcomingGames } from "../igdb";

export default async function handler(req, res) {
    try {
        const games = await getUpcomingGames();
        res.status(200).json(games);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get Upcoming games'});
    }
}