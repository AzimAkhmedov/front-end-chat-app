import React, { useState } from "react";
import s from "./style.module.scss";
import Banner from "./Banner";
import { Logo } from "../../components";
import { NavLink } from "react-router-dom";
import { IconButton, Input, InputAdornment } from "@mui/material";
import {
  LockOutlined,
  Visibility,
  VisibilityOff,
  PeopleOutline,
  EmailOutlined,
} from "@mui/icons-material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { registration } from "../../store/reducers";
import Verification from "./Popup";
interface Inputs {
  username: string;
  email: string;
  password: string;
  // confirmPassword: string;
}
const Registration = () => {
  const dispatch = useAppDispatch();
  const modalState = true;
  // useAppSelector(
  //   (state) => state.reducerSlice.verificationModal
  // );
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setConfirmPassword] = useState<boolean>(false);
  const { register, handleSubmit } = useForm<Inputs>();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setConfirmPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    dispatch(registration(data));

  return modalState ? (
    <Verification />
  ) : (
    <div className={s.root + " container"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Logo />
        <div className={s.form_item + " " + s.form_title}>
          <h2>Sign in</h2>
          <p>
            If you already have an account register <br />
            You can <NavLink to={"/login"}>Login here !</NavLink>
          </p>
        </div>
        <div className={s.form_item}>
          <sub>Email</sub>
          <Input
            type="email"
            sx={{ letterSpacing: "1px" }}
            startAdornment={
              <InputAdornment position="start">
                <EmailOutlined sx={{ width: "18px", height: "18px" }} />
              </InputAdornment>
            }
            {...register("email")}
          />
        </div>
        <div className={s.form_item}>
          <sub>Username</sub>
          <Input
            {...register("username")}
            sx={{ letterSpacing: "1px" }}
            startAdornment={
              <InputAdornment position="start">
                <PeopleOutline sx={{ width: "18px", height: "18px" }} />
              </InputAdornment>
            }
          />
        </div>
        <div className={s.form_item}>
          <sub>Password</sub>
          <Input
            {...register("password")}
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? (
                    <VisibilityOff sx={{ width: "14px", height: "14px" }} />
                  ) : (
                    <Visibility sx={{ width: "14px", height: "14px" }} />
                  )}
                </IconButton>
              </InputAdornment>
            }
            startAdornment={
              <InputAdornment position="start">
                <LockOutlined sx={{ width: "18px", height: "18px" }} />
              </InputAdornment>
            }
          />
        </div>
        <div className={s.form_item}>
          <sub>Confirm Password</sub>
          <Input
            type={showConfirmPassword ? "text" : "password"}
            sx={{ letterSpacing: "1px" }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showConfirmPassword ? (
                    <VisibilityOff sx={{ width: "14px", height: "14px" }} />
                  ) : (
                    <Visibility sx={{ width: "14px", height: "14px" }} />
                  )}
                </IconButton>
              </InputAdornment>
            }
            startAdornment={
              <InputAdornment position="start">
                <LockOutlined sx={{ width: "18px", height: "18px" }} />
              </InputAdornment>
            }
          />
        </div>

        <button type="submit">Register</button>
      </form>
      <Banner />
    </div>
  );
};

export default Registration;
