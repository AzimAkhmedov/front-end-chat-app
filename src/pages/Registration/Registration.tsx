import React, { useState } from "react";
import s from "./style.module.scss";
import Banner from "./Banner";
import { Logo } from "../../components";
import { NavLink } from "react-router-dom";
import { PatternFormat } from "react-number-format";
import { Checkbox, FormControlLabel, IconButton, Input, InputAdornment } from "@mui/material";
import { LockOutlined, PhoneOutlined, Visibility, VisibilityOff,  PeopleOutline } from "@mui/icons-material";
import { SubmitHandler, useForm } from "react-hook-form";
interface Inputs {
  mobile: string;
  password: string;
}
const Registration = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setConfirmPassword] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () => setConfirmPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const onSubmit: SubmitHandler<Inputs> = (data) =>{ console.log("test");}


  return (
    <div className={s.root + " container"}>
      <form>
        <Logo />
        <div className={s.form_item + " " + s.form_title}>
          <h2>Sign in</h2>
          <p>
          If you already have an account register <br />
            You can <NavLink to={"/login"}>Login here !</NavLink>
          </p>
        </div>
        <div className={s.form_item}>
          <sub>Phone number</sub>
          <PatternFormat
            sx={{ letterSpacing: "1px" }}
            customInput={Input}
            startAdornment={
              <InputAdornment position="start">
                <PhoneOutlined sx={{ width: "18px", height:"18px" }} />
              </InputAdornment>
            }
            format="+998 (##) ### ## ##"
            allowEmptyFormatting
            mask="_"
          />
        </div>
        <div className={s.form_item}>
          <sub>Username</sub>
          <Input
            sx={{ letterSpacing: "1px" }}
            startAdornment={
              <InputAdornment position="start">
                <PeopleOutline sx={{ width: "18px", height:"18px" }} />
              </InputAdornment>
            }
          />
        </div>
        <div className={s.form_item}>
          <sub>Password</sub>
          <Input
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff  sx={{ width: "14px", height:"14px" }} /> 
                  : <Visibility sx={{ width: "14px", height:"14px" }} />}
                </IconButton>
              </InputAdornment>
            }
            startAdornment={
              <InputAdornment position="start">
                <LockOutlined sx={{ width: "18px", height:"18px" }}/>
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
                  {showConfirmPassword ? <VisibilityOff  sx={{ width: "14px", height:"14px" }} /> 
                  : <Visibility sx={{ width: "14px", height:"14px" }} />}
                </IconButton>
              </InputAdornment>
            }
            startAdornment={
              <InputAdornment position="start">
                <LockOutlined sx={{ width: "18px", height:"18px" }}/>
              </InputAdornment>
            }
          />
        </div>


        <button onClick={()=>{
          handleSubmit(onSubmit)
          console.log("test");
          
        }} type="submit" >Register</button>
      </form>
      <Banner />
    </div>
  );
};

export default Registration;
