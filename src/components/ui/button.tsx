type ButtonProps = {
  label: string;
  variant?: "primary" | "secondary" | "CTA";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

export function Button({
  label,
  variant = "primary",
  onClick,
  disabled,
  className,
}: ButtonProps) {
  const styles = {
    primary: "bg-blue-400 text-white hover:bg-blue-500",
    secondary: "bg-white text-blue-600",
    CTA: "bg-[#FFDE00] text-black text-xs md:text-base lg:text-2xl hover:bg-[#B3A125]",
  };

  const disabledStyles =
    "bg-gray-400 text-gray-200 cursor-not-allowed opacity-50 hover:scale-100";

  return (
    <button
      className={`
        ${variant === "CTA" ? "w-full h-full" : "w-32"} 
        px-4 py-2 rounded-lg transition 
        ${disabled ? disabledStyles : styles[variant]} 
        ${className || ""}
      `}
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
    >
      {label}
    </button>
  );
}