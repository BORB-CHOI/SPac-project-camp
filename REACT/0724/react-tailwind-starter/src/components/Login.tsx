import Button from "./html/Button";
import CheckBox from "./html/CheckBox";
import Input from "./html/Input";

export default function Login() {
  return (
    <div className="item-middle bg-black">
      <div className="w-[375px] bg-white py-10 px-[25px] inter">
        <h1 className="text-xl font-bold text-[4f4f4f] mb-[10px]">
          Sgin Into App
        </h1>
        <p className="text-sm text-[4f4f4f] mb-5">
          Please Enter your details to continue.
        </p>
        <form action="" className="flex flex-col gap-4">
          <Input type="text" placeholder="Enter Your Name" />
          <Input type="text" placeholder="someone@example.com" />
          <Input type="text" placeholder="Enter Password" />
          <CheckBox>I agree with terms and policies.</CheckBox>
          <div className="flex flex-col gap-4 mt-4">
            <Button className="bg-[#4F4F4F]">Sign In</Button>
            <Button className="border border-[#4F4F4F] text-[#4F4F4F]">
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
