import { getGameById } from "../igdb";

export default async function handler(req, res) {
    const { gameId } = req.body;

    try {
        const game = await getGameById(gameId);
        res.status(200).json(game);
        console.log(game);
    } catch (error) {
        console.log('hereeeee')
        res.status(500).json({ error: 'Failed to get game by ID'});
    }
}