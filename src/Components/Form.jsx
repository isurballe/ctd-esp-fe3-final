import React from "react";


const Form = ({handleSubmit, setRequest}) => {
  
  //Aqui deberan implementar el form completo con sus validacione
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label >Ingrese su nombre</label>
        <input type='text' onBlur={(e) => setRequest((state) =>({...state, name: e.target.value}))}/>
        <label >Ingrese su correo electrónico</label>
        <input type='text' onBlur={(e) => setRequest((state) =>({...state, email: e.target.value}))}/>
        <button>enviar</button>
      </form>
    </div>
  );
};

export default Form;