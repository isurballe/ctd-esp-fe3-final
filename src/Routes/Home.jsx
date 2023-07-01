import Card from '../Components/Card'
import { useGlobalContext } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {dentistsStates} = useGlobalContext();

  return (
    <main className="main">
      <h1>Home</h1>
      <div className="card-grid">
          {dentistsStates.data.map((item) => (
              <article key={item.id}>
                <Card item={item}/>
              </article>
            ))}
      </div>
    </main>
  );
}


export default Home