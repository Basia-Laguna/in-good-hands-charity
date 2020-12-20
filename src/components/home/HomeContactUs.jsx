import { useState } from "react";

function HomeContactUs(props) {
  const [name, setName] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [message, setMessage] = useState("");
  const [isMessageValid, setIsMessageValid] = useState(true);

  const [isSucessVisible, setIsSuccessVisible] = useState(false);

  function isInputValid() {
    let isValid = true;

    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (/\s/.test(name)) {
      console.log("Name validation failed");
      setIsNameValid(false);
      isValid = false;
    }
    if (!emailRegex.test(email)) {
      console.log("Email validation failed");
      setIsEmailValid(false);
      isValid = false;
    }
    if (message.length < 120) {
      console.log("Message validation failed");
      setIsMessageValid(false);
      isValid = false;
    }
    return isValid;
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Wszystko spoko");

    const requestObject = { name, email, message };
    console.log(requestObject);

    // Walidacja
    if (isInputValid()) {
      // Metoda do wysyłania:
      fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // obiekt jest javascriptowy, musimy go zserializować czyli zmutować na json
        body: JSON.stringify(requestObject),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.status === "success") {
            setIsSuccessVisible(true);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  return (
    <>
      <div>HomeContactUs</div>
      {isSucessVisible && (
        <h1>
          Wiadomość została wysłana! <br /> Wkrótce się skontaktujemy!
        </h1>
      )}
      <form className="Form" onSubmit={handleSubmit}>
        <input
          className="input-name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        {!isNameValid && <p>Niedobre imię</p>}
        <input
          className="input-name"
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        {!isEmailValid && <p>Niedobry email</p>}
        <input
          className="input-name"
          type="text"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        {!isMessageValid && <p>Za krótko!</p>}
        <input className="input-submit" type="submit"></input>
      </form>
    </>
  );
}

export default HomeContactUs;
