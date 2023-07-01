import { Link, useLocation } from "react-router-dom";
import { routes } from "../Routes/utils/routes";
import { useGlobalContext } from "./utils/global.context";

const Card = ({ item }) => {
  
  const {dentistsStates,dentistsDispatch} = useGlobalContext();

  const location = useLocation();
  const isFavsRoute = location.pathname === '/favs';

  const addFav = () => {
    const dentistAlreadyExists = dentistsStates.favs.find((element) => element.id === item.id )
    !dentistAlreadyExists && dentistsDispatch({type: 'ADD_FAV', payload: item})
  }
  return (
    <>
      <Link className="card" to={`${routes.detail}/${item.id}`}>
        <img src="./images/doctor.jpg" alt="dentist_photo" style={{ width: '150px' }} />
        <h1 className={`text-card ${dentistsStates.the}`}>{item.name}</h1>
        <h3 className="text-card">{item.username}</h3>
        <h3 className="text-card">{item.id}</h3>
      </Link>
      {!isFavsRoute && (<button onClick={addFav} className="favButton">
      ⭐
        </button>)}
    </>
  );
};


export default Card;
