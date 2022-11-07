import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div>
        <Link to="sample1">sample1</Link>
      </div>
      <div>
        <Link to="sample2">sample2</Link>
      </div>
    </div>
  );
};

export default Home;
