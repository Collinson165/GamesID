import axios from 'axios';
import { useContext, useState } from 'react';
import GameCard from './GameCard';
import { SearchContext } from '../context/searchContext';
import useFetch from '../hooks/useFetch';

export interface ApiSearchObject {
    id: number;
    name: string;
    summary: string;
    cover: cover;
    release_date: release_date
    ;
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

    // const { data, loading, error } = useFetch<any[]>(`/api/api?searchTerm=${searchTerm}`)

    const handleSearch = async  () => {
        // if (data){
        //     setSearchResult(data)
        //     console.log(data)
        // }
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
                    className='py-2 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500'
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