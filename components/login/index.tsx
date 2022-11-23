import { useState } from "react";
import { sendCode, getToken } from "../../lib/api";
import router from "next/router";
export function Login() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const handleEmailForm = (e: any) => {
    e.preventDefault();
    const target = e.target as any;
    const email = target.email.value;

    setEmail(email);
    sendCode(email);
  };
  const handleCodeForm = async (e: any) => {
    e.preventDefault();
    const target = e.target as any;
    const code = target.code.value;
    try {
      await getToken(email, code);
      router.push("/users");
    } catch (error) {
      console.log(error);
      setError("un errorsito surgio");
    }
  };
  const emailFormStyle = {
    // display: email ? "none" : "",
  };
  const codeFormStyle = {
    // display: email ? "" : "none",
  };
  return (
    <div>
      <form style={emailFormStyle} onSubmit={handleEmailForm}>
        <label htmlFor="">Email</label>
        <input type="email" name="email" />
        <button>Enviar</button>
      </form>
      <form style={codeFormStyle} onSubmit={handleCodeForm}>
        <label htmlFor="">Código</label>
        <input type="text" name="code" />
        <button>Enviar</button>
      </form>
    </div>
  );
}
