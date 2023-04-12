import { NavLink } from "react-router-dom";
import Banner from "./Banner";
import s from "./style.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
interface Inputs {
  mobile: string;
  password: string;
}
const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className={s.root + " container"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.form_item + " " + s.form_title}>
          <h2>Sign in</h2>
          <p>
            If you don’t have an account register <br />
            You can <NavLink to={"/registration"}>Register here !</NavLink>
          </p>
        </div>
        <div className={s.form_item}>
          <sub>Phone number</sub>
          <input
            type="tel"
            {...register("mobile", {
              required: true,
              maxLength: 20,
              // pattern:/(7|8|9)\d{9}/
            })}
          />
        </div>
        <input type="password" {...register("password", { required: true })} />
        <input type="submit" />
      </form>
      <Banner />
    </div>
  );
};

export default Login;
