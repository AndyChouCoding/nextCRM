import { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "Save" | "Edit" | "Delete" | "Login" | "Cancel";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  loading?: boolean;
  children?:ReactNode;
  className?:string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "Login",
  size = "md",
  icon,
  loading,
  className,
  children,
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  const varianStyle = {
    Save: "bg-green-600 text-white hover:bg-green-700",
    Edit: "bg-yellow-500 text-white hover:bg-yellow-600",
    Delete: "bg-red-600 text-white hover:bg-red-700",
    Login: "bg-blue-600 text-white hover:bg-blue-700",
    Cancel: "bg-gray-300 text-black hover:bg-gray-400",
  };
  const sizeStyle = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 text-base",
    lg: "h-12 px-6 text-lg",
  };
   const combinedClassName =
    `${base} ${varianStyle[variant]} ${sizeStyle[size]} ${className}`.trim();


  return (
    <>
      <button
        className={combinedClassName}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading ? (
          <span className="animate-pulse">Loading...</span>
        ) : (
          <>
            {icon && <span className="mr-2">{icon}</span>}
            {children}
          </>
        )}
      </button>
    </>
  );
};

export default Button;
