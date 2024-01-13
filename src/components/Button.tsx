type ButtonProps = {
  label: string;
  disabled: boolean;
  color?: string;
  variant?: "default" | "success" | "danger";
  handleClick: VoidFunction;
};

export function Button({
  label,
  disabled,
  variant = "default",
  handleClick,
}: ButtonProps) {
  let backgroundColor: { default: string; hover: string } = {
    default: "bg-blue-900",
    hover: "bg-blue-700",
  };
  switch (variant) {
    case "success":
      backgroundColor = {
        default: "bg-green-900",
        hover: "bg-green-700",
      };
      break;
    case "danger":
      backgroundColor = { default: "bg-red-900", hover: "bg-red-700" };
      break;
    default:
      backgroundColor;
  }
  const className = `mb-3 rounded-full ${backgroundColor.default} px-6 py-4 uppercase text-white hover:${backgroundColor.hover} disabled:bg-slate-400`;

  return (
    <button className={className} onClick={handleClick} disabled={disabled}>
      {label}
    </button>
  );
}
