import axios from 'axios';
import { useContext, useState } from 'react';
import GameCard from './GameCard';
import { SearchContext } from '../context/searchContext';

export interface ApiSearchObject {
    id: number;
    name: string;
    summary: string;
    cover: cover;
    release_date: release_date;
}

interface cover {
    id: number;
    url: string;
}

interface release_date {
    id: number;
    human: string;
}


const GameSearch = () => {
    const [ searchTerm, setSearchTerm ] = useState< string >('');
    // const [ searchResult, setSearchResult ] = useState< ApiSearchObject[] >([]);
    const { setSearchResult, searchResults } = useContext(SearchContext);

    const handleSearch = async () => {
        try{
            const response = await axios.get(`/api/api?searchTerm=${searchTerm}`);
            setSearchResult(response.data);
            console.log(searchResults)
        }catch (error){
            console.error(error);
        }
    };

    return (
        <>
            <div className='flex items-center'>
                <input
                    type="text"
                    placeholder='Search Games'
                    className='py-2 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={handleSearch} className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r-md transition-colors duration-300'>Search</button>
               
            </div>
            <div>
                {searchResults && searchResults.map((game) => (
                    <GameCard key={game.id} game={game}/>
                ))}
            </div>
        </>
        
    );
};

export default GameSearch;