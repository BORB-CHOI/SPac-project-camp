import { twMerge } from "tailwind-merge";

type TInputProps = React.ComponentPropsWithoutRef<"input">;

const Input = ({ className, ...rest }: TInputProps) => {
  return (
    <>
      <input
        className={twMerge(
          "w-[240px] h-[44px] rounded-[8px] px-[16px] py-[14px] inter font-medium text-[14px] placeholder-text-[#ACACAC] border border-[#4F4F4F] outline-none",
          className
        )}
        {...rest}
      />
    </>
  );
};
export default Input;
