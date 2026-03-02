"use client"
import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/pagination';

export default function NewsCarousel() {

    const [articles, setArtciles] = useState([])

    useEffect(() => {

        fetch("/api/news")
        .then(res => res.json())
        .then(data => setArtciles(data.response.results));
    }, [])

return (
  <>
  
  <Swiper 
  direction={'vertical'}
  slidesPerView={1}
  spaceBetween={30}
  mousewheel={true}
  pagination={{
    clickable: true,
  }}
  modules={[Mousewheel, Pagination]}
  className="mySwiper"
  style={{ height: "100%" }}
  
>

  {articles.map((article, i ) => (

    <SwiperSlide key={i}>

  {article.fields?.thumbnail && (
    <img 
    src={article.fields.thumbnail}
    alt={article.webTitle}
    style={{ width: "75%"}}
    />
  )}

    </SwiperSlide>
  )

)}
  </Swiper>
  </>
);
}