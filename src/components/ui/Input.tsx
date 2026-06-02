import { type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	label?: string;
}

function Input({ name = "", label = "", ...props }: InputProps) {
	return (
		<div className="flex flex-col gap-1 text-lg">
			{label && <label htmlFor={props.id}>{label}</label>}

			<input
				{...props}
				name={name}
				className={`rounded-full px-5 py-3 text-xl transition ${props.className}`}
			/>
		</div>
	);
}

export default Input;
