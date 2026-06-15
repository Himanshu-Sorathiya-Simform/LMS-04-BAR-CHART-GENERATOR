import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	label?: string;
	onClick?: () => void;
	className?: string;
	children: React.ReactNode;
}

function Button({
	label = "",
	onClick = () => {},
	className = "",
	children,
	...props
}: ButtonProps) {
	return (
		<button
			{...props}
			className={`flex cursor-pointer items-center justify-center transition ${className}`}
			onClick={onClick}
			aria-label={label}
		>
			{children}
		</button>
	);
}

export default Button;
