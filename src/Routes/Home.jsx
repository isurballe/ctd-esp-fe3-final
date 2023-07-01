import Card from '../Components/Card'
import { useGlobalContext } from '../Components/utils/global.context';

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