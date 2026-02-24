"use client"
import { useState, useEffect } from "react"

export default function NewsCarousel() {

    const [data, setData] = useState([])

    useEffect(() => {

        fetch("/api/news")
        .then(res => res.json())
        .then(setData)
    }, [])

return (
  <div>
    {data.response?.results?.map((article, i) => (
      <div key={i}>
        <img src={article.fields.thumbnail} alt={article.webTitle} />
        <h2>{article.webTitle}</h2>
        <p>{article.fields?.trailText}</p>
        <a href={article.webUrl}>Read</a>
      </div>
    ))}
  </div>
)}