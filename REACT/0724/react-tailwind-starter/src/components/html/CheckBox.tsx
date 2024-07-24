import { useId } from "react";

type TCheckBoxProps = React.ComponentPropsWithoutRef<"input"> & {
  onToggle?: () => void;
};
const CheckBox = ({ children, onToggle, ...rest }: TCheckBoxProps) => {
  const uuid = useId();

  return (
    <>
      <div className="flex items-center gap-2 relative">
        <input
          type="checkbox"
          id={uuid}
          className="appearance-none w-5 h-5 border border-[#4F4F4F] rounded-[5px] bg-white checked:bg-[#4F4F4F] peer/agree"
          onChange={onToggle}
          {...rest}
        />
        <label htmlFor={uuid} className="text-sm inter">
          {children}
        </label>
        <svg
          width="13"
          height="9"
          viewBox="0 0 13 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden peer-checked/agree:block absolute ml-[3px]"
          onClick={onToggle}
        >
          <path
            d="M11.799 0.76665C11.7246 0.691685 11.6362 0.632184 11.5387 0.591578C11.4413 0.550973 11.3367 0.530067 11.2311 0.530067C11.1255 0.530067 11.021 0.550973 10.9235 0.591578C10.8261 0.632184 10.7376 0.691685 10.6633 0.76665L4.70466 6.73325L2.20125 4.22184C2.12405 4.14726 2.03292 4.08863 1.93306 4.04927C1.8332 4.00992 1.72657 3.99062 1.61925 3.99248C1.51193 3.99433 1.40603 4.01731 1.30759 4.06009C1.20915 4.10288 1.1201 4.16463 1.04552 4.24183C0.970951 4.31903 0.912313 4.41016 0.872959 4.51002C0.833605 4.60989 0.814306 4.71652 0.816162 4.82384C0.818019 4.93116 0.840996 5.03706 0.883781 5.1355C0.926565 5.23394 0.98832 5.32299 1.06552 5.39756L4.1368 8.46884C4.21115 8.54381 4.29961 8.60331 4.39708 8.64391C4.49454 8.68452 4.59908 8.70542 4.70466 8.70542C4.81025 8.70542 4.91479 8.68452 5.01225 8.64391C5.10972 8.60331 5.19818 8.54381 5.27253 8.46884L11.799 1.94237C11.8802 1.86748 11.945 1.77658 11.9893 1.6754C12.0336 1.57423 12.0565 1.46497 12.0565 1.35451C12.0565 1.24406 12.0336 1.1348 11.9893 1.03362C11.945 0.932447 11.8802 0.841547 11.799 0.76665V0.76665Z"
            fill="white"
          />
        </svg>
      </div>
    </>
  );
};
export default CheckBox;
