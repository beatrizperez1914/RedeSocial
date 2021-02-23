import React from 'react';
import './style.css'

const Home  = () => {
    return (
        <div className="header">
            <div className="description-line">
                <h2> Feed </h2>
                <div className="line"></div>
            </div>
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
                                <img alt="url" src="https://images.unsplash.com/photo-1573246123716-6b1782bfc499?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=660&q=80"></img>

                                <div className="title-container">
                                    <img className="avatar" alt="avatar" src="https://yt3.ggpht.com/ytc/AAUvwnht6c9eAFl7xdGc798TcXnHz0xZhwM9tmQ99AqO1g=s68-c-k-c0x00ffffff-no-rj"></img>
                                  <h3>Titulo post</h3>
                                </div>
                            </div>
                    </div>
    )
}

export default Home