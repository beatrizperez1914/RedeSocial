import React, { useState, useEffect} from 'react';
import './style.css';
import '../../services/api';
import api from '../../services/api';



const Home  = () => {
    const [list, setList] = useState([])

    useEffect(() => {
        api.getVideoList()
        .then(list =>{
            console.log('list', list)
            setList(list)

        })
        
    },[])

    return (
        <div className="header">
            <div className="description-line">
                <h2> Feed </h2>
                <div className="line"></div>
            </div>
            {
                list.map(row =>
                    <Card key={row.id} {...row}/>     
                    )
            }
        </div>
    )
    } 

const Card =({title,imageurl, userAvatar, date, description}) =>{
    return(
        <div className="home-container">
                            <div className="home-card">
                                <img alt="url" src={imageurl}></img>
                                <div className="title-container">
                                    <img className="avatar" alt="avatar" src={userAvatar}></img>
                                    <div className="title-box">
                                        <h1>{title}</h1>
                                        <h2>publicado em: {date.toLocaleDateString('pt-br')}</h2>
                                    </div>
                                </div>
                                <p>{description}</p>
                            </div>
                    </div>
    )
}

export default Home