type TButtonProps = {
  btnName: string;
  btnBgColor: string;
  btnFont: string;
  btnFontColor: string;
};

const Button = ({
  btnName,
  btnBgColor,
  btnFont,
  btnFontColor,
}: TButtonProps) => {
  return (
    <button
      className={`w-[77px] h-[44px] rounded-[8px] font-medium text-[14px] 
        ${"bg-[" + btnBgColor + "]"} 
        ${"text-[" + btnFontColor + "]"}
        ${btnFont}`}
    >
      {btnName}
    </button>
  );
};
export default Button;
