/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { ApiSearchObject } from "./GamesSearch";
import Link from "next/link";

interface GameCardProps {
    game: any;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
    const convertTimeStampToYear = (timestamp) => {
        const date = new Date(timestamp * 1000)
        return date.getFullYear()
    }
    
    
    return (
        <Link href={`/games/[gameId]`} as={`/games/${game.id}`}>
            {/* <div className="bg-white rounded-lg shadow-lg p-4 w-fit">
                <img src={game.cover && game.cover.url} alt={game.name} height={120} width={90} className="object-cover mb-4 rounded" />
                <h2 className="text-sm font-bold mb-2">{game.name}</h2>
                <p className="text-gray-600">{game.releaseYear}</p>

            </div> */}
            <div className="max-w-sm rounded-md overflow-hidden shadow-lg w-full h-fit relative">
            {/* <img src={game.cover && game.cover.url} alt={game.name} height={120} width={90} className="w-full" /> */}
            <img src={game.cover ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.image_id}.jpg` : `https://images.igdb.com/igdb/image/upload/t_thumb/undefined.jpg`} alt={game.name} height="800" width={600} className="w-full" />
            <div className="px-4 py-2">
                <div className="font-bold text-sm mb:text-xl mb-1 overflow-hidden overflow-ellipsis whitespace-nowrap transition hover:overflow-visible">{game.name}</div>
                <p className="text-gray-700 text-base">{game.first_release_date ? convertTimeStampToYear(game.first_release_date) : game.human || ''}</p>
            </div>
            <div className="px-4 pt-2 pb-1">
                <button className="absolute bg-opacity-40 top-0 right-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                    {game.aggregated_rating ? Math.round(game.aggregated_rating): Math.round(game.rating) || 'No Rating'}
                </button>
            </div>
        </div>
        </Link>
        
    )
}

export default GameCard;