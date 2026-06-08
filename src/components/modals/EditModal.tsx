import { useModal } from "@himanshu-sorathiya/react-kit";
import { useState } from "react";
import { useBar } from "../../hooks/useBar.ts";
import type { Point } from "../../types/types.ts";
import { validate } from "../../utils/validateFormResponse.ts";
import Button from "../ui/Button.tsx";
import Icon from "../ui/Icon.tsx";
import Input from "../ui/Input.tsx";

interface EditModalProps {
	bar: Point;
}

function EditModal({ bar }: EditModalProps) {
	const { closeModal } = useModal();
	const { dispatch } = useBar();

	const [error, setError] = useState("");

	if (!bar) return;

	function handleFormSubmit(e: React.SubmitEvent<HTMLFormElement>) {
		e.preventDefault();

		if (!bar) return;

		const formData = new FormData(e.currentTarget);
		const barNameVal = formData.get("bar-name");
		const barValueVal = formData.get("bar-value");

		if (typeof barNameVal !== "string" || typeof barValueVal !== "string")
			return;

		const { isValid, error } = validate([
			["name", barNameVal],
			["value", barValueVal],
		]);

		if (isValid === true) {
			dispatch({
				type: "UPDATE_POINT",
				payload: { ...bar, name: barNameVal, value: +barValueVal },
			});

			closeModal();
		} else {
			setError(error);
		}
	}

	return (
		<div className="relative flex flex-col gap-7">
			<p className="text-xl">Edit "{bar.name}" bar</p>

			<form
				onSubmit={handleFormSubmit}
				className="flex flex-col gap-4"
			>
				<p className="text-red-600">{error}</p>

				<Input
					name="bar-name"
					label="Bar Name"
					defaultValue={bar.name ?? ""}
					placeholder="Enter Bar Name here..."
					autoFocus={true}
					className="rounded-full bg-neutral-50 px-3 py-2 text-xl text-neutral-800 outline-1 outline-neutral-400 placeholder:text-neutral-400 focus:outline-2 focus:outline-neutral-700 focus:placeholder:text-neutral-500"
					containerClassName="flex gap-1 text-sm flex-col"
				/>

				<Input
					name="bar-value"
					label="Bar Value"
					defaultValue={bar.value ?? ""}
					placeholder="Enter Bar Value here..."
					className="rounded-full bg-neutral-50 px-3 py-2 text-xl text-neutral-800 outline-1 outline-neutral-400 placeholder:text-neutral-400 focus:outline-2 focus:outline-neutral-700 focus:placeholder:text-neutral-500"
					containerClassName="flex gap-1 text-sm flex-col"
				/>

				<div className="mt-2 flex justify-end gap-2">
					<Button
						className="rounded-md bg-stone-300 px-4 py-2 outline-0 duration-75 hover:brightness-90 focus:brightness-90 focus-visible:outline-2 focus-visible:outline-stone-800"
						onClick={closeModal}
					>
						Cancel
					</Button>

					<Button
						type="submit"
						className="rounded-md bg-orange-300 px-4 py-2 outline-0 hover:brightness-90 focus:brightness-90 focus-visible:outline-2 focus-visible:outline-orange-800"
					>
						Update
					</Button>
				</div>
			</form>

			<Button
				className="absolute top-0 right-0 rounded-full p-1 outline-0 duration-75 hover:bg-stone-200 focus:bg-stone-200 focus-visible:outline-1 focus-visible:outline-stone-800"
				onClick={closeModal}
			>
				<Icon
					id="close"
					className="h-6 w-6"
				/>
			</Button>
		</div>
	);
}

export default EditModal;
