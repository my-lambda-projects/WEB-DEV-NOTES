import { useState } from 'react';
import {
  NavLink,
  Route,
  Switch,
  Redirect,
  useParams,
  useHistory,
  useRouteMatch
} from 'react-router-dom';
// movie data that we use in this app
import { movies } from './MovieData';
import styles from './App.module.css';

const Admin = (props) => (
  <div className={styles.blackStyle}>
    <h1>Hi {props.name}! Welcome to Admin</h1>
  </div>
);

const NotAdmin = (props) => {
  const history = useHistory();
  return (
    <div className={styles.blackStyle}>
      <h1>Hi {props.name}! You Are Not Authorized</h1>
      <button onClick={() => history.push('/')}>Home</button>
    </div>
  );
};

const PageNotFound = () => {
  return (
    <div className={styles.blackStyle}>
      <h1>Page not found</h1>
    </div>
  );
};

const Home = () => (
  <div className={styles.orangeStyle}>
    <h1>Home</h1>
  </div>
);

const Stocks = (props) => {
  const history = useHistory();
  return (
    <div className={styles.orangeStyle}>
      <h1>Stocks</h1>
      <button onClick={() => history.push('/')}>Home</button>
    </div>
  );
};

const Movies = (props) => {
  const { url, path } = useRouteMatch();
  return (
    <div className={styles.orangeStyle}>
      <h1>Movies</h1>
      <nav>
        {/* create NavLinks for each movie title */}
        {movies.map((movie) => (
          <NavLink
            activeStyle={{ color: 'red', fontStyle: 'italic' }}
            key={movie.id}
            to={`${url}/${movie.id}`}
          >
            {movie.title}
          </NavLink>
        ))}
      </nav>

      {/* Use parameters to pass the id to MovieDetail */}
      <Route exact path={`${path}/:id`} component={MovieDetail} />
    </div>
  );
};

const MovieDetail = (props) => {
  const { id } = useParams();
  // using the parameter find the id in the array of movies the corresponds and place object value in the variable
  const movie = movies.find((movie) => parseInt(id) === parseInt(movie.id));

  // if there is no movie redirect back to HOME
  if (!movie) {
    return <Redirect to="/" />;
  }

  return (
    <div
      style={{ border: '1px solid purple', margin: '10px', padding: '10px' }}
    >
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
    </div>
  );
};

const App = () => {
  const [name, setName] = useState('JD');
  const [isAuthorized, setIsAuthorized] = useState(false);

  return (
    <div className={styles.mainStyle}>
      <nav className={styles.navStyle}>
        {/* full page reload */}
        <a href="/">Home Anchor</a>

        <NavLink exact activeClassName="is-active" to="/">
          Home
        </NavLink>
        <NavLink activeClassName="is-active" to="/stocks">
          Stocks
        </NavLink>
        <NavLink activeClassName="is-active" to="/movies">
          Movies
        </NavLink>
        <NavLink activeClassName="is-active" to="/admin">
          Admin
        </NavLink>
      </nav>
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/stocks" component={Stocks} />
          <Route path="/movies" component={Movies} />

          <Route path="/admin">
            {isAuthorized ? <Admin name={name} /> : <NotAdmin name={name} />}
          </Route>

          <Route path="/not-admin" component={NotAdmin} />

          <Route path="*" component={PageNotFound} />
        </Switch>
      </>
    </div>
  );
};

export default App;
