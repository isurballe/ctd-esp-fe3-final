import axios from 'axios';
import React, { useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../Components/utils/global.context';


//Este componente debera ser estilado como "dark" o "pght" dependiendo del theme del Context

const Detail = () => {
  const {dentistsStates, dentistsDispatch} = useGlobalContext()

  const params = useParams();

  const urlDetail = `https://jsonplaceholder.typicode.com/users/${params.id}`;

  useEffect(() => {
    axios(urlDetail).then((res) => dentistsDispatch({type:'GET_DENTIST', payload: res.data}));
  }, []);

  return (
    <>
      <h1>Detail Dentist id </h1>
        <section>
          <article>
            <img src="/images/doctor.jpg" alt="dentist_photo" style={{ width: '150px' }} />
          </article>
          <article>
            <p>{dentistsStates.dentist.name}</p>
            <p>{dentistsStates.dentist.email}</p>
            <p>{dentistsStates.dentist.phone}</p>
            <p>{dentistsStates.dentist.website}</p>
          </article>
          
        </section>
    </>
  )
}

export default Detail