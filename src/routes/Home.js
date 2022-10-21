import { NavLink, Outlet } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <main style={{ textAlign: 'center' }}>
        <h2>
          {' '}
          <NavLink to="/">Black Sabbath</NavLink>
        </h2>
      </main>
      <nav style={{ textAlign: 'center' }}>
        <NavLink to="vocals">Vocals</NavLink> |{'  '}
        <NavLink to="guitar">Guitar</NavLink> |{'  '}
        <NavLink to="bass">Bass</NavLink> |{'  '}
        <NavLink to="drums">Drums</NavLink>{' '}
      </nav>
      <Outlet />
    </div>
  );
};

export default Home;
