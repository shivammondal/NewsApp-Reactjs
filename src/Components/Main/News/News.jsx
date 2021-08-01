import React,{useState,useEffect} from 'react';
import './news_style.css';
import {ReactComponent as Arrow}from  '../../../Media/SVG/noun_Arrow.svg'
import axios from 'axios';

const key = 'a987c22aa066451fa03c8cbb7cc9d8c7'

const News =()=>{
    const [articles,setArticles] = useState([]);
    const [index,setIndex] = useState(0);

    const getData= async()=>{
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${key}`)
        setArticles(response.data.articles[index])
        
    }

    useEffect(() => {
     getData()
        
    }, [index])
    console.log(articles)
    const style={
        imageUrl : articles.urlToImage
    }

    const moveLeft=()=>{
        if(index!==0){
            setIndex(index-1);
        }
        else{
            setIndex(0)
        }
        
        
    }
    const moveRight =()=>{

        setIndex(index+1)
    }

    return(
        <>
      
           <div className="news-window" style={{backgroundImage: `url(${style.imageUrl})`}} >
            
       
        
                <Arrow className='arrows left' onClick={moveLeft}/>
            <div className="news-info">
            
                <h1 className="heading">{articles.title}</h1>
                <time>11 May,2021</time>
                <p className="para"> {articles.description} </p>
                <div className="bottom"><a href={articles.url} target='blank'>Read More </a><span className="Author">By: {articles.author}</span></div>
                
               </div>
        <Arrow className='arrows right' onClick={moveRight}/>
        </div>
       
            
       
        </>
    )
}

export default News