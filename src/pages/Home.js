import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>서울 단기 기상 예보</h1>
      <h2>아침 단기 기상 예보 (오전 8시 이후에만 확인 가능)</h2>
      <Link to="/about">성북구 정릉 3동 </Link>
      <h2>낮 단기 기상 예보 (오후 2시 이후에만 확인 가능)</h2>
      <Link to="/evening">성북구 정릉 3동 </Link>
      <h2>밤 단기 기상 예보 (오후 8시 이후에만 확인 가능)</h2>
      <Link to="/night">성북구 정릉 3동 </Link>
    </div>
    


  );
};

export default Home;