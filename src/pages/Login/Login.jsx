import { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { verifyUser } from "../../Data/user";
import "./Login.css";

function Login({ setToken, setRole }) {
  const userRef = useRef();
  const passRef = useRef();

  const handleLogin = () => {
    const user = userRef.current.value.trim();
    const pass = passRef.current.value.trim();

    userRef.current.value = "";
    passRef.current.value = "";

    const userInfo = verifyUser(user, pass);

    if (userInfo === null) {
      alert("Wrong user or password");
      userRef.current.focus();
    } else {
      setToken(userInfo.token);
      setRole(userInfo.role);
    }
  };

  return (
    <div className="login-container">
      <h2 className="text-primary font-weight-bold">Login</h2>
      <Form>
        <Form.Group controlId="username">
          <Form.Label>User</Form.Label>
          <Form.Control
            type="text"
            placeholder="user"
            ref={userRef}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="pass"
            ref={passRef}
          />
        </Form.Group>

        <Button className="btn btn-primary mt-3" onClick={handleLogin}>
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
