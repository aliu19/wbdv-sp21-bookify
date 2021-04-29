import {Link} from "react-router-dom";

const Home = () => {
  return (
      <div>
        <h1>Home</h1>
        <Link to="/search">
          Search
        </Link>
        <br/>
        <Link to="login">
          Login
        </Link>
      {/*  TODO change to logout button when logged in
      TODO recent reviews*/}
      </div>
  )
}
export default Home