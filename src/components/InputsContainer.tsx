import { type ActionDispatch, useState } from "react";
import type { DataActionState } from "../reducer/dataReducer.ts";
import { validate } from "../utils/validateTodoFormResponse.ts";
import Button from "./ui/Button.tsx";
import Input from "./ui/Input.tsx";

function InputsContainer({
	handleCreate,
}: {
	handleCreate: ActionDispatch<[action: DataActionState]>;
}) {
	const [error, setError] = useState("");

	function handleFormSubmit(e: React.SubmitEvent<HTMLFormElement>) {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);
		const nameVal = formData.get("new-entry-name");
		const valueVal = formData.get("new-entry-value");

		if (typeof nameVal !== "string" || typeof valueVal !== "string") return;

		const { isValid, error } = validate([
			["name", nameVal],
			["value", +valueVal],
		]);

		if (isValid === true) {
			setError("");
			handleCreate({
				type: "ADD_POINT",
				payload: {
					name: nameVal,
					value: +valueVal,
				},
			});

			e.currentTarget.reset();
		} else {
			setError(error);
		}
	}

	return (
		<form
			onSubmit={handleFormSubmit}
			className="flex w-2/3 flex-col gap-2"
		>
			<p className="text-red-600">{error}</p>

			<Input
				name="new-entry-name"
				label="New Entry Name: "
				placeholder="Enter name of new entry on X axis..."
				autoFocus={true}
				className="w-full rounded-md bg-neutral-50 px-3 py-1 text-neutral-800 outline-1 outline-neutral-400 placeholder:text-neutral-400 focus:outline-2 focus:outline-neutral-700 focus:placeholder:text-neutral-500"
				containerClassName="flex text-nowrap gap-2  items-center"
			/>

			<Input
				name="new-entry-value"
				label="New Entry Value: "
				placeholder="Enter value of new entry on X axis..."
				className="w-full rounded-md bg-neutral-50 px-3 py-1 text-neutral-800 outline-1 outline-neutral-400 placeholder:text-neutral-400 focus:outline-2 focus:outline-neutral-700 focus:placeholder:text-neutral-500"
				containerClassName="flex text-nowrap gap-2  items-center"
			/>

			<Button className="self-center rounded-md bg-stone-300 px-8 py-2 text-sm outline-0 duration-75 hover:brightness-90 focus:brightness-90 focus-visible:outline-2 focus-visible:outline-stone-800">
				<span>Add</span>
			</Button>
		</form>
	);
}

export default InputsContainer;
