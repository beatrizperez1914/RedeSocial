import React from 'react';
import './style.css'

const Home  = () => {
    return (
        <div className="header">
            <img className="logo" src="/logo.svg"></img> 
            <h2> Feed </h2>
            <div className="line"></div>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
                    
        </div>
    )
} 

const Card =() =>{
    return(
        <div className="home-container">
                            <div className="home-card">
                                <img alt="url" src="https://i.ytimg.com/vi/5qap5aO4i9A/hq720_live.jpg?sqp=CMCkvIEG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBzBk27_ibBK-HO-sOKXWsoKl-OJg"></img>

                                <div className="title-container">
                                    <img className="avatar" alt="avatar" src="https://yt3.ggpht.com/ytc/AAUvwnht6c9eAFl7xdGc798TcXnHz0xZhwM9tmQ99AqO1g=s68-c-k-c0x00ffffff-no-rj"></img>
                                </div>
                                <h3>Titulo post</h3>
                            </div>
                    </div>
    )
}

export default Home