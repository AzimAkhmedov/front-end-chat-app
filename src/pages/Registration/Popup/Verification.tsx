import { PatternFormat } from "react-number-format";
import s from "./style.module.scss";
import { Link } from "react-router-dom";
const Verification = () => {
  return (
    <div className={s.root}>
      <form>
        <h1 className="title">Check your phone</h1>
        <p>Write your code here.</p>
        <PatternFormat
          format="### ###"
          allowEmptyFormatting
          mask="*"
          name=""
          id=""
        />
        <p>
          The code didn`t come? Press this <Link to={"/"}>link</Link>
        </p>
      </form>
    </div>
  );
};

export default Verification;
