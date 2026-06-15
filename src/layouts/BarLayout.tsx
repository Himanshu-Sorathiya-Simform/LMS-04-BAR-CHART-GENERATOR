import BarContainer from "../components/BarContainer.tsx";
import InputsContainer from "../components/InputsContainer.tsx";
import ModalLayout from "./ModalLayout.tsx";

function BarLayout() {
	return (
		<>
			<div className="bar__container flex w-200 flex-col items-center justify-end gap-4 overflow-hidden rounded-md border border-gray-300 bg-gray-50 p-4">
				<BarContainer />

				<p className="h-0.5 w-full bg-gray-400"></p>

				<InputsContainer />
			</div>

			<ModalLayout />
		</>
	);
}

export default BarLayout;
