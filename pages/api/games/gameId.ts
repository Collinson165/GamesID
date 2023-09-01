import { getGameById } from "../igdb";

export default async function handler(req, res) {
    const { ID } = req.query;

    try {
        const game = await getGameById(ID);
        res.status(200).json(game);
        console.log(game);
    } catch (error) {
        console.log('hereeeee')
        res.status(500).json({ error: 'Failed to get game by ID'});
    }
}