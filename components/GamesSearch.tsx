import axios from 'axios';
import { useContext, useState } from 'react';
import GameCard from './GameCard';
import { SearchContext } from '../context/searchContext';



const GameSearch = () => {
    const [ searchTerm, setSearchTerm ] = useState< string >('');
    const { setSearchResult, searchResults } = useContext(SearchContext);
    const handleSearch = async  () => {
        try{ 
            const response = await axios.get(`/api/games/search?searchTerm=${searchTerm}`);
            console.log(response)
            setSearchResult(response.data);
            console.log(searchResults)
        }catch (error){
            console.log(error)
            console.error(error);
        }
    };

    return (
        <>
            <div className='flex flex-col items-center justify-center'>
                <div className='pb-6'>
                    <input
                    type="text"
                    placeholder='Search Games'
                    className='py-2 px-1 dark:bg-gray-400 md:px-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button onClick={handleSearch} className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r-md transition-colors duration-300'>Search</button>
                </div>
                

                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
                    {searchResults && searchResults.map((game) => (
                        <div key={game.id} className='flex justify-center'>
                            <GameCard game={game}/>
                        </div>
                        
                    ))}
                </div>
               
            </div>
            
        </>
        
    );
};

export default GameSearch;