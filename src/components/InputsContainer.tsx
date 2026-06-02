import Button from "./ui/Button.tsx";
import Input from "./ui/Input.tsx";

function InputsContainer() {
	return (
		<div className="flex w-2/3 flex-col gap-2">
			<Input
				name="new-entry-name"
				label="New Entry Name: "
				placeholder="Enter name of new entry on X axis..."
				autoFocus={true}
				className="text-md w-full rounded-md bg-neutral-50 px-3 py-1 text-neutral-800 outline-1 outline-neutral-400 placeholder:text-neutral-400 focus:outline-2 focus:outline-neutral-700 focus:placeholder:text-neutral-500"
				containerClassName="flex text-nowrap gap-2 text-md items-center"
			/>

			<Input
				name="new-entry-value"
				label="New Entry Value: "
				placeholder="Enter value of new entry on X axis..."
				className="text-md w-full rounded-md bg-neutral-50 px-3 py-1 text-neutral-800 outline-1 outline-neutral-400 placeholder:text-neutral-400 focus:outline-2 focus:outline-neutral-700 focus:placeholder:text-neutral-500"
				containerClassName="flex text-nowrap gap-2 text-md items-center"
			/>

			<Button className="rounded-md bg-stone-300 px-4 py-2 outline-0 duration-75 hover:brightness-90 focus:brightness-90 focus-visible:outline-2 focus-visible:outline-stone-800">
				<span>Add</span>
			</Button>
		</div>
	);
}

export default InputsContainer;
