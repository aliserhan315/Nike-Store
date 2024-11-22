const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none transition-transform duration-300 ease-in-out
        ${
          backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor}`
            : "bg-coral-red text-white border-coral-red"
        } rounded-full ${fullWidth ? "w-full" : ""} 
        hover:scale-105 hover:shadow-md active:scale-95`} // Hover and click effects
    >
      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full bg-white w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
