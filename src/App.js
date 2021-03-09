import React,{useState} from 'react';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Form from './Pages/form';

  const MENU_LIST = [
    {id: 'videoList', title: 'Feed' },
    {id: 'novoVideo', title: 'Novo Post' },
  ]

function App() {
  const [menuId, setMenuId] = useState(MENU_LIST[1].id);
  const handlerMenuSelect = (evento) => {
    setMenuId(evento.target.id);
  }

  return (
    <div>
      <Menu list={MENU_LIST} clickMenu={handlerMenuSelect} />
      {
        menuId === 'videoList' ?
        <Home /> :
        <Form />

      }

    </div>
  );
}

export default App;
