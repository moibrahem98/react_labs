import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Input } from "../../components";

export const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const history = useHistory();

  const submitMsg = () => {
    console.log(email);
    console.log(msg);
    history.push("/students");
  };

  return (
    <>
      <h1>Contact Us</h1>
      <div className="container d-flex justify-content-center col-10">
        <div className="card p-3 mt-4 col-8" style={{ height: "30vh" }}>
          <Input
            placeholder="Enter Your Email"
            value={email}
            setValue={setEmail}
          />
          <Input
            placeholder="Enter Your Message"
            value={msg}
            setValue={setMsg}
          />
          <button className="btn btn-primary m-2 col-2" onClick={submitMsg}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};
