import { useHistory } from "react-router-dom";
import { LOGIN_PAGE } from "../../paths/paths";

function HomeHeader(props) {
  let history = useHistory();

  function handleClick() {
    history.push(LOGIN_PAGE);
  }

  return (
    <>
      <p>Home Header</p>

      <button onClick={handleClick}>Oddaj rzeczy</button>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Zorganizuj zbiórkę
      </button>
    </>
  );
}

export default HomeHeader;
