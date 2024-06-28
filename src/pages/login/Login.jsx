import React, { useEffect } from "react";
import "./Login.scss";
import { useGetInputValue } from "../../hooks/useGetInputValue";
import { useSignInMutation } from "../../context/api/userApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {setToken, setUser} from '../../context/slices/authSlice'

const initialState = {
  UserName: "",
  password: "",
};

const Login = () => {
  const { formData, handleChange, setFormData } = useGetInputValue(initialState);
    const [signIn, { data, isLoading, isSuccess }] = useSignInMutation();
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
      if (isSuccess) {
        dispatch(setToken(data?.data?.token));
        dispatch(setUser(data?.data?.user));
        navigate("/admin")
      }
    }, [isSuccess])

    const handleLogIn = (e) => {
      e.preventDefault();
      signIn(formData);
    };

  return (
    <div className="login">
      <form onSubmit={handleLogIn} className="login__form">
        <h2>Login</h2>
        <input
          value={formData.UserName}
          onChange={handleChange}
          name="UserName"
          type="text"
          placeholder="Your username"
          autoComplete="off"
          required
        />
        <input
          value={formData.password}
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="Your password"
          autoComplete="off"
          required
        />
        <button disabled={isLoading}>Login</button>
      </form>
    </div>
  );
};

export default Login;
