import "./styles.css";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
interface IuserAuth {
  authType: "login" | "signup" | undefined;
}

export default function UserAuth({ authType }: IuserAuth) {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    console.log(login);
  }, [login, password]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLogin("");
    setPassword("");
    navigate('/new-post'); 
  };

  return (
    <>
      <div className="login-container">
        {authType === "login" ? <h1>Login</h1> : <h1>Criar conta</h1>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Login"
            value={login}
            onChange={handleChangeLogin}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={handleChangePassword}
          />
          <input
            type="submit"
            value={authType === "login" ? "Entrar" : "Criar conta"}
          />
        </form>
        {authType === "login" ? (
          <NavLink to="/signup">Criar conta</NavLink>
        ) : (
          <NavLink to="/login">Já tenho conta</NavLink>
        )}
      </div>
    </>
  );
}
