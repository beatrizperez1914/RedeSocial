import React,{useState} from 'react';
import Home from './Pages/Home';
import Menu from './Pages/Menu';

  const MENU_LIST = [
    {id: 'novoVideo', title: 'Feed' },
    {id: 'videoList', title: 'Novo Post' },
  ]


function App() {
  const [menuId, setMenuId] = useState(MENU_LIST[1].id);

  const handleClick = (evento) =>{
    setMenuId(evento.target.id);
  }
  return (
    <div>
      <Menu list={MENU_LIST} clickMenu={handleClick}/>
      {
        menuId === 'videoList' ?
        <Home /> :
        <h1>Pagina de cadastro</h1>

      }

    </div>
  );
}

export default App;
