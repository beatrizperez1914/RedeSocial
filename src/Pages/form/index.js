import React, { useState } from 'react';
import './style.css';
import api from '../../services/api';

const DEFAULT_LIST = {
    title: '',
    imageurl: '',
    userAvatar: '',
    description: '',
    date: (new Date().toDateString().substr(0,10))

}

const Index = () => {

    const [values, setValues] = useState({DEFAULT_LIST});

    const handlerChange = (evento) =>{
        setValues(values =>({...values,[evento.target.name]:  evento.target.value}))
    }

    const handlerSubmit = (evento) =>{
        evento.preventDefault();
        api.addVideo(values);

    }
    
    return (
        <div className="form-container">
            <div className="description-line"> 
                <h2> Novo de post </h2>
                <div className="line"></div>
            </div>
            <form onSubmit={handlerSubmit}>
                  <FormGroup
                    required 
                    name="title"
                    label="Titulo"
                    onChange={handlerChange}
                    value={values.title}
                />
                <FormGroup
                    required 
                    name="description"
                    label="Descrição"
                    onChange={handlerChange}
                    value={values.description}
                />
                <FormGroup
                    required 
                    name="date"
                    label="Data"
                    onChange={handlerChange}
                    value={values.date}
                    type="date"
                />
                <FormGroup
                   required
                    name="imageUrl"
                    label="Imagem"
                    onChange={handlerChange}
                    value={values.imageurl}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

const FormGroup = ({value, name, onCharge, label, ...others}) => {
    return(
        <div className="form-group">
            <label htmlFor={name}> {label}:</label>
            <input name={name} value={value} onCharge={onCharge} {...others}></input>
        </div>
    )
}

export default Index 

