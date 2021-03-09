import React, { useState } from 'react';
import './style.css'

const DEFAULT_LIST = [
    {
        title: 'Primeiro Post da pagina ',
        imageurl: 'https://images.unsplash.com/photo-1573246123716-6b1782bfc499?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=660&q=80',
        userAvatar: 'https://yt3.ggpht.com/ytc/AAUvwnht6c9eAFl7xdGc798TcXnHz0xZhwM9tmQ99AqO1g=s68-c-k-c0x00ffffff-no-rj',
        date: new Date,
        description: 'Amo coisa saudável, amo essa rotina Amo coisa saudável, amo essa rotina Amo coisa saudável, amo essa rotina Amo coisa saudável, amo essa rotina Amo coisa saudável, amo essa rotina Amo coisa saudável, amo essa rotina Amo coisa saudável, amo essa rotina Amo coisa saudável, amo essa rotina Amo coisa saudável, amo essa rotina Amo coisa saudável, amo essa rotina Amo coisa saudável, amo essa rotina Amo coisa saudável, amo essa rotina Amo coisa saudável, amo essa rotina Amo coisa saudável, amo essa rotina Amo coisa saudável, amo essa rotina Amo coisa saudável, amo essa rotina Amo coisa saudável, amo essa rotina Amo coisa saudável, amo essa rotina Amo coisa saudável, amo essa rotina Amo coisa saudável, amo essa rotina Amo coisa saudável, amo essa rotina Amo coisa saudável, amo essa rotina Amo coisa saudável, amo essa rotina Amo coisa saudável, amo essa rotina '
    },
    {
        title: 'Primeiro Post da pagina ',
        imageurl: 'https://images.unsplash.com/photo-1612884133038-b1f2b8e87980?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        userAvatar: 'https://yt3.ggpht.com/ytc/AAUvwnht6c9eAFl7xdGc798TcXnHz0xZhwM9tmQ99AqO1g=s68-c-k-c0x00ffffff-no-rj',
        date: new Date,
        description: 'Amo coisa saudável, amo essa rotina nossaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    },
    {
        title: 'Primeiro Post da pagina ',
        imageurl: 'https://images.unsplash.com/photo-1602882547632-fd009b7784c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        userAvatar: 'https://yt3.ggpht.com/ytc/AAUvwnht6c9eAFl7xdGc798TcXnHz0xZhwM9tmQ99AqO1g=s68-c-k-c0x00ffffff-no-rj',
        date: new Date,
        description: 'Amo coisa saudável, amo essa rotina nossaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa ahahahahaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    }
]
const Home  = () => {
    const [list, setList] = useState(DEFAULT_LIST)
    return (
        <div className="header">
            <div className="description-line">
                <h2> Feed </h2>
                <div className="line"></div>
            </div>
            {
                list.map(row =>
                    <Card {...row}/>     
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