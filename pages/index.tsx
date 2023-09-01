import GameSearch from '../components/GamesSearch'
import Example from '../components/Example'
import Header from '../components/Header'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { getLatestGames } from './api/igdb';
import useFetch from '../hooks/useFetch';
import GameCard from '../components/GameCard';

export default function Home() {
  const [latestGames, setLatestGames] = useState([]);
  const [upcomingGames, setUpcomingGames] = useState([]);

  const { data: latest, loading: loadingLatest, error: errorLatest } = useFetch<any[]>('/api/games/latest')
  const { data: upcoming, loading: loadingUpcoming, error: errorUpcoming } = useFetch<any[]>('/api/games/upcoming')
  const { data: top, loading: loadingTop, error: errorTop } = useFetch<any[]>('/api/games/top')

  console.log(latest)
  console.log(upcoming)
  console.log(top)

  // useEffect(() => {
  //   const fetchLatestGames =  async () => {
  //     try{
  //       const response = await axios.get(`/api/games/latest`)
  //       console.log(response.data)
  //     }catch(error){
  //       console.log('errorrrr', error)
  //     }
  //   }
  //   const fetchUpcomingGames =  async () => {
  //     try{
  //       const response = await axios.get(`/api/games/upcoming`)
  //       console.log(response.data)
  //     }catch(error){
  //       console.log('errorrrr', error)
  //     }
  //   }
  //   const fetchTopGames =  async () => {
  //     try{
  //       const response = await axios.get(`/api/games/top`)
  //       console.log(response.data)
  //     }catch(error){
  //       console.log('errorrrr', error)
  //     }
  //   }

  //   fetchLatestGames();
  //   fetchUpcomingGames();
  //   fetchTopGames();
  // })
  return (
    
    <div className="min-h-screen bg-gray-300 dark:bg-gray-800">
    <header className="bg-gray-400 dark:bg-gray-900 shadow">
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300"></h1>
    </div>
    </header>
    <main>
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <div className='min-h-screen px-2 py-12 lg:px-8'>
        <GameSearch />
        
        {top && <h1 className='py-10 text-xl font-bold'>Top Games</h1>}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6'>
            {top && top.map((game) => (
              <div key={game.id} className='flex justify-center'>
                <GameCard game={game}/>
              </div>
                
            ))}
          </div>

          {upcoming && <h1 className='py-10 text-xl font-bold'>Upcoming Games</h1>}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
            {upcoming && upcoming.map((game) => (
              <div key={game.id} className='flex justify-center'>
                <GameCard game={game}/>
              </div>
                
            ))}
          </div>

          {latest && <h1 className='py-10 text-xl font-bold'>Latest Games</h1>}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
            {latest && latest.map((game) => (
              <div key={game.id} className='flex justify-center'>
                <GameCard game={game}/>
              </div>
                
            ))}
          </div>
      </div>  
    </div>
    </main>
</div>
  )
}
