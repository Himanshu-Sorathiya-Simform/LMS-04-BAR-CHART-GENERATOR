import { type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	label?: string;
	containerClassName?: string;
}

function Input({
	name = "",
	label = "",
	containerClassName = "",
	...props
}: InputProps) {
	return (
		<div className={containerClassName}>
			{label && <label htmlFor={props.id}>{label}</label>}

			<input
				{...props}
				name={name}
				className={`transition ${props.className}`}
			/>
		</div>
	);
}

export default Input;
