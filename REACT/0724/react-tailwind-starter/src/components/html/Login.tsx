import { useRef, useState } from "react";
import Input from "./Input";
import CheckBox from "./CheckBox";
import Button from "./Button";

const Login = () => {
  const [type, setType] = useState("Sign"); // Sign or Login
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [agree2, setAgree2] = useState(false);
  const nameEl = useRef<HTMLInputElement>(null);
  const emailEl = useRef<HTMLInputElement>(null);
  const passwordEl = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email.trim() === "") {
      alert("이메일을 입력해주세요");
      emailEl.current?.focus();
      return;
    }

    if (password.trim() === "") {
      alert("비밀번호를 입력해주세요");
      passwordEl.current?.focus();
      return;
    }

    const loginValid = email.trim() === "" || password.trim() === "" || !agree;
    const signValid = loginValid || name.trim() === "";

    if ((type === "Login" && loginValid) || (type === "Sign" && signValid)) {
      alert("입력값 빔");
      return;
    }

    alert(type === "Sign" ? "Signup Success" : "Login Success");
  };
  return (
    <>
      <div className="item-middle bg-black">
        <div className="w-[375px] bg-white py-10 px-[25px] inter">
          <h1 className="text-xl font-bold text-[#4f4f4f] mb-[10px]">
            {type} Into App
          </h1>
          <p className="text-sm text-[#4F4F4F] mb-5">
            Please enter your details to continue.
          </p>
          <form className="flex flex-col gap-4" onSubmit={onSubmitHandler}>
            {type === "Sign" && (
              <Input
                ref={nameEl}
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            )}
            <Input
              ref={emailEl}
              type="email"
              placeholder="someone@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              ref={passwordEl}
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <CheckBox
              checked={agree}
              onToggle={() => setAgree((prev) => !prev)}
            >
              I agree with terms and policies.
            </CheckBox>
            <CheckBox
              checked={agree2}
              onToggle={() => setAgree2((prev) => !prev)}
            >
              I agree with terms and policies.
            </CheckBox>
            <div className="flex flex-col gap-4 mt-4">
              <Button type="submit" className="bg-[#4F4F4F]">
                {type === "Sign" ? "Sign In" : "Log In"}
              </Button>
              <Button
                type="button"
                className="border border-[#4F4F4F] text-[#4f4f4f]"
                onClick={() => {
                  setName("");
                  setEmail("");
                  setPassword("");
                  setType((prev) => (prev === "Login" ? "Sign" : "Login"));
                }}
              >
                Go To Log In
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
