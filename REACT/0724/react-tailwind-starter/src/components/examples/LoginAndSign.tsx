import { useRef, useState } from "react";
import Button from "../html/Button";
import CheckBox from "../html/CheckBox";
import Input from "../html/Input";

export default function LoginAndSign() {
  // 아 맞다 react hook form을 사용하지 않으면 일일이 전부 useState를 사용해줘야 했다.
  const [isSignUp, setIsSignUp] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAgree, setIsAgree] = useState(false);
  const emailEl = useRef<HTMLInputElement>(null);
  const nameEl = useRef<HTMLInputElement>(null);
  const passwordEl = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

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

    if (isSignUp) {
      if (name && email && password && isAgree) {
        alert("Sign Up Success");
      } else {
        alert("Please Fill All Fields");
      }
    } else {
      if (email && password && isAgree) {
        alert("Log In Success");
      } else {
        alert("Please Fill All Fields");
      }
    }
  };

  return (
    <div className="item-middle bg-black">
      <div className="w-[375px] bg-white py-10 px-[25px] inter">
        <h1 className="text-xl font-bold text-[4f4f4f] mb-[10px]">
          {isSignUp ? "Sign" : "Login"} Into App
        </h1>
        <p className="text-sm text-[4f4f4f] mb-5">
          Please Enter your details to continue.
        </p>
        <form
          action=""
          className="flex flex-col gap-4"
          onSubmit={onSubmitHandler}
        >
          {isSignUp && (
            <Input
              type="text"
              placeholder="Enter Your Name"
              onChange={(e) => setName(e.target.value)}
              ref={emailEl}
            />
          )}
          <Input
            type="text"
            placeholder="someone@example.com"
            onChange={(e) => setEmail(e.target.value)}
            ref={nameEl}
          />
          <Input
            type="text"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            ref={passwordEl}
          />
          <CheckBox onChange={() => setIsAgree((prev) => !prev)}>
            I agree with terms and policies.
          </CheckBox>
          <div className="flex flex-col gap-4 mt-4">
            <Button className="bg-[#4F4F4F]" type="submit">
              {isSignUp ? "Sign In" : "Log In"}
            </Button>
            <Button
              className="border border-[#4F4F4F] text-[#4F4F4F]"
              onClick={() => setIsSignUp((prev) => !prev)}
              type="button"
            >
              Go To {isSignUp ? "Sign In" : "Log In"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
