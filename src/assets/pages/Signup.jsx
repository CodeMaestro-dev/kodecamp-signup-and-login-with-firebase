import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../utils/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";

import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";

export default function Signup() {
  const TOKEN = localStorage.getItem("authToken");
  const [page, setPage] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const NAVIGATE = useNavigate()

  useEffect(() => {
    if (TOKEN) {
      NAVIGATE("/app");
    }
  });

  const handlePagination = (e) => {
    e.preventDefault();
    setPage(page + 1);
  };

  const handleSubmit = (e) => {
    setErrorEmail("");
    setErrorPassword("");
    const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const PASSWORD_REGEX =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    e.preventDefault();

    if (!email.match(EMAIL_REGEX)) {
      return setEmail("Please fill in a correct email");
    } else if (!password.match(PASSWORD_REGEX)) {
      return setErrorPassword("Use a stronger password");
    } else {
      setErrorEmail("");
      setErrorPassword("");

      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          setPage(page + 1);
          localStorage.setItem(
            "authToken",
            res.user.proactiveRefresh.user.accessToken
          );
        })
        .catch((error) => {
          setErrorEmail("User already exists. Consider Login in.");
          setErrorPassword("User already exists. Consider Login in.");
          console.error(error);
        });
    }
  };

  if (page === 0) {
    return (
      <Page1
        handleSubmit={handleSubmit}
        setEmail={setEmail}
        setPassword={setPassword}
        errorEmail={errorEmail}
        errorPassword={errorPassword}
      />
    );
  } else if (page === 1) {
    return <Page2 handlePagination={handlePagination} />;
  } else if (page === 2) {
    return <Page3 handlePagination={handlePagination} />;
  } else if (page === 3) {
    return <Page4 handlePagination={handlePagination} />;
  } else if (page === 4) {
    return <Page5 handlePagination={handlePagination} />;
  }
}
