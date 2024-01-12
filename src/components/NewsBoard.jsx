import React, {useEffect, useState} from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ()=> {
    const [articles,setArticles] = useState([]);
    
    const getNews = async()=> {
        try {
            const getNews = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`)
            const newsData = await getNews.json()

            console.log(newsData.articles)
            setArticles(newsData.articles)

        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(()=>{
        getNews()
    }, [])

    return(
        <>
            <h2 className="text-center my-4">Top Headlines</h2>
            <div className="container">
                <div className="row">
                    {articles.map((article, index)=>{
                        return <NewsItem key={index} description={article.description} title={article.title} src={article.urlToImage} url={article.url}/>
                    })}
                </div>
            </div>
        </>
    )
}

export default NewsBoard