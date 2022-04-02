import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {

  const onClickButton = () => {
    // if(props.openModal) props.setOpenModal(false);
    // else props.setOpenModal(true);

    props.setOpenModal(prevState => !prevState);
    
  }

  return (
    <button 
      className= {`CreateTodoButton`}
      onClick={onClickButton} 
    >
      +

    </button>
    
  
  
    );
}

export { CreateTodoButton };
