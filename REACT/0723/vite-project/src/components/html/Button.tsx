import { twMerge } from "tailwind-merge";

type TButtonProps = React.ComponentPropsWithoutRef<"button">;

const Button = ({ className, children, ...rest }: TButtonProps) => {
  return (
    <>
      <button
        className={twMerge(
          "w-[77px] h-[44px] rounded-[8px] font-medium text-[14px] cursor-pointer text-white",
          className
        )}
        {...rest}
      >
        {children}
      </button>
    </>
  );
};
export default Button;
