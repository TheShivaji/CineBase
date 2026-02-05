import React, { useState , useEffect } from 'react'

export const useFetch = (apiPath) => {
  const [data, setdata] = useState([])
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${import.meta.env.VITE_API_KEY}`

  useEffect(() => {
  async function featchMovie() {
    const response = await fetch(url)
    const json = await response.json();
    setdata(json.results)

  }
  featchMovie()
  }, [url])

  return (
    {data}
  )
}
