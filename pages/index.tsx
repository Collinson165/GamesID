import GameSearch from '../components/GamesSearch'
import Example from '../components/Example'
import Header from '../components/Header'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { getLatestGames } from './api/igdb';

export default function Home() {
  const [latestGames, setLatestGames] = useState([]);
  const [upcomingGames, setUpcomingGames] = useState([]);

  useEffect(() => {
    const fetchLatestGames =  async () => {
      try{
        const response = await axios.get(`/api/games/latest`)
        console.log(response.data)
      }catch(error){
        console.log('errorrrr', error)
      }
    }
    const fetchUpcomingGames =  async () => {
      try{
        const response = await axios.get(`/api/games/upcoming`)
        console.log(response.data)
      }catch(error){
        console.log('errorrrr', error)
      }
    }
    const fetchTopGames =  async () => {
      try{
        const response = await axios.get(`/api/games/top`)
        console.log(response.data)
      }catch(error){
        console.log('errorrrr', error)
      }
    }

    fetchLatestGames();
    fetchUpcomingGames();
    fetchTopGames();
  })
  return (
    <div className='min-h-screen px-6 py-12 lg:px-8'>
      <GameSearch />
    </div>
  )
}
