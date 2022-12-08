import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers, setAuth } from '../../redux/users/users';
import '../../assets/styles/Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const { users } = useSelector((state) => state.users);

  // const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  let authenticated = false;

  const checkUser = () => {
    const userExist = users.find((user) => user.userUserName === username);
    if (userExist.userUserName === username) {
      authenticated = true;
      dispatch(setAuth(authenticated));
    }

    if (authenticated) {
      navigate('/cars');
    }
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  // state = {
  //   username,
  // // password
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    checkUser();
  };

  return (
    <form className="form-container login" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Username"
        name="username"
        className="form-input"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      {/* <input
        type="password"
        name="password"
        id="password"
        className="form-input"
        placeholder="Password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /> */}
      <button type="submit" className="form-button button">
        Log In
      </button>
    </form>
  );
}

export default Login;
