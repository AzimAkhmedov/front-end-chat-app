import Banner from "./Banner";
import s from "./style.module.scss";
import { Input,InputAdornment,IconButton, FormControlLabel,Checkbox,} from "@mui/material";
import { VisibilityOff, Visibility,LockOutlined, PhoneOutlined,} from "@mui/icons-material";
import { useForm, SubmitHandler } from "react-hook-form";
import { PatternFormat } from "react-number-format";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import {Logo} from "../../components";

interface Inputs {
  mobile: string;
  password: string;
}
const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const onSubmit: SubmitHandler<Inputs> = (data) =>{ console.log("test");}

  return (
    <div className={s.root + " container"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Logo/>
        <div className={s.form_item + " " + s.form_title}>
          <h2>Sign in</h2>
          <p>
            If you don't have an account register <br />
            You can <NavLink to={"/registration"}>Register here !</NavLink>
          </p>
        </div>
        <div className={s.form_item}>
          <sub>Phone number</sub>
          <PatternFormat
            sx={{ letterSpacing: "1px" }}
            customInput={Input}
            {...register('mobile',{required:true})}
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

          <div className={s.checkbox}>
            <FormControlLabel control={<Checkbox />} sx={{fontSize:"12px"}} label="Remember me" />
            <p>Forgot Password ?</p>
          </div>
        </div>

        <button onClick={()=>{
          handleSubmit(onSubmit)
          console.log("test");
          
        }} type="submit" >Login</button>
      </form>
      <Banner />
    </div>
  );
};

export default Login;
