import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  // const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`)
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.error(err));
  }, []);

  return (
    <></>
  )
};

export default App