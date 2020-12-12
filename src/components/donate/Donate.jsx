import { Redirect } from "react-router-dom";
import { LOGIN_PAGE } from "../../paths/paths";

function Donate(props) {
  return (
    <>
      <Redirect to={LOGIN_PAGE} />
    </>
  );
}

export default Donate;
