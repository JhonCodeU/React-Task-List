import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const Header = ({ showCompletedTasks, changeShowCompletedTasks }) => {

  const toggleCompletedTask = () => {
    changeShowCompletedTasks(!showCompletedTasks);
  }

  return (
    <header className="header">
      <h1 className='header__titulo'>Task list</h1>
      {showCompletedTasks ?
        <button
          className='header__boton'
          onClick={() => toggleCompletedTask()}
        >
          No show completed
          <FontAwesomeIcon className='header__icono-boton' icon={faEyeSlash} />
        </button>
        :
        <button
          className='header__boton'
          onClick={() => toggleCompletedTask()}
        >
          Show completed
          <FontAwesomeIcon className='header__icono-boton' icon={faEye} />
        </button>
      }
    </header>
  );
}

export default Header;