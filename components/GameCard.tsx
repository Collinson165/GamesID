/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

interface GameCardProps {
    game: any;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
    const convertTimeStampToYear = (timestamp) => {
        const options: any = {year: 'numeric', month: 'long', day: 'numeric'};
        const date = new Date(timestamp * 1000)
        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date)
        return formattedDate;
    }
    
    
    return (
        <Link href={`/games/[gameId]`} as={`/games/${game.id}`}>
            <div className="max-w-sm rounded-md overflow-hidden shadow-lg w-full h-fit relative">
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