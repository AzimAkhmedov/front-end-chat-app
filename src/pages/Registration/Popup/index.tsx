import { PatternFormat } from "react-number-format";
import s from "./style.module.scss";
import { Link } from "react-router-dom";
import { Input } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { confirmRegistration } from "../../../store/reducers";

interface Inputs {
  verificationCode: string;
}
const Verification = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const dispatch = useAppDispatch();
  const email = useAppSelector((state) => state.reducerSlice.user.email);
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    dispatch(
      confirmRegistration({
        email,
        verificationCode: data.verificationCode,
      })
    );
  return (
    <div className={s.root}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="title">Check your phone</h1>
        <p>Write your code here.</p>
        <Input
          {...register("verificationCode", { maxLength: 6, minLength: 6 })}
          disableUnderline
          placeholder="*** ***"
        />
        <p>
          The code didn`t come? Press this <Link to={"/"}>link</Link>
        </p>
        <div className="form-actions">
          <button type="reset">Cancel</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Verification;
