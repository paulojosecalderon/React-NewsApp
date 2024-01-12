import React from "react";
import newsRep from '../assets/newsRep.jpg'

const NewsItem = ({description, url, src, title})=> {
    return(
        <div className="card bg-dark text-light d-inline-block mx-3 my-3 px-4 py-4 mx-auto" style={{maxWidth: "350px"}}>
            <img src={src? src: newsRep} className="card-img-top" alt="News Image"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={url} className="btn btn-primary">Read More</a>
            </div>
        </div>
    )
}

export default NewsItem