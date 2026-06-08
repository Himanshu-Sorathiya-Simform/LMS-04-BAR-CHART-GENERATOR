import { useModal } from "@himanshu-sorathiya/react-kit";
import { useBar } from "../../hooks/useBar.ts";
import type { Point } from "../../types/types.ts";
import Button from "../ui/Button.tsx";
import Icon from "../ui/Icon.tsx";

interface DeleteModalProps {
	bar: Point;
}

function DeleteModal({ bar }: DeleteModalProps) {
	const { closeModal } = useModal();
	const { dispatch } = useBar();

	if (!bar) return;

	function handleBarDelete() {
		if (!bar) return;

		dispatch({ type: "DELETE_POINT", payload: String(bar.id) });

		closeModal();
	}

	return (
		<div className="m-auto flex flex-col gap-7">
			<p className="text-xl">Delete "{bar.name}"?</p>

			<p>Please confirm deletion of {bar.name}.</p>

			<div className="flex justify-end gap-2">
				<Button
					className="rounded-md bg-stone-300 px-4 py-2 outline-0 duration-75 hover:brightness-90 focus:brightness-90 focus-visible:outline-2 focus-visible:outline-stone-800"
					onClick={closeModal}
				>
					Cancel
				</Button>

				<Button
					className="rounded-md bg-orange-300 px-4 py-2 outline-0 hover:brightness-90 focus:brightness-90 focus-visible:outline-2 focus-visible:outline-orange-800"
					onClick={handleBarDelete}
				>
					Delete
				</Button>
			</div>

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

export default DeleteModal;
