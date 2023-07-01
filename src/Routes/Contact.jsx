import React, { useEffect, useState } from 'react'
import Form from '../Components/Form'
import { validations } from './utils/validations';



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

  const [request, setRequest] = useState({
    name: '',
    email: ''
  })


  const [previousRequestName, setPreviousRequestName] = useState('');

  useEffect(() => {
    if (validations.nameV(request.name)) {
      setPreviousRequestName(request.name);
    }
  }, [request]);

  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(validations.nameV(request.name) && validations.emailV(request.email)){
      setShow(true)
      setError(false)
    }else{
      setError(true)
      setShow(false)
    }
  }
  return (
    <div>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form handleSubmit={handleSubmit} setRequest={setRequest}/>
      {show && <p>Gracias {previousRequestName}, te contactaremos cuando antes vía mail.</p>}
      {error && <p>Por favor verifique su información nuevamente.</p>}
    </div>
  )
}

export default Contact
