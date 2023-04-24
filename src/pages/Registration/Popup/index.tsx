import { PatternFormat } from "react-number-format";
import s from "./style.module.scss";
import { Link } from "react-router-dom";
import { Input } from "@mui/material";
const Verification = () => {
  return (
    <div className={s.root}>
      <form>
        <h1 className="title">Check your phone</h1>
        <p>Write your code here.</p>
        <Input disableUnderline placeholder="*** ***"/>
        <p>
          The code didn`t come? Press this <Link to={"/"}>link</Link>
        </p>
        <div className="form-actions">
          <button >Cancel</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Verification;
