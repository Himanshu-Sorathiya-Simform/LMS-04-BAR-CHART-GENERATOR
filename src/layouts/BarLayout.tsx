import BarContainer from "../components/BarContainer.tsx";
import InputsContainer from "../components/InputsContainer.tsx";

function BarLayout() {
	return (
		<div className="flex h-3/4 w-200 flex-col items-center justify-end gap-4 overflow-hidden rounded-md border border-gray-300 bg-gray-50 p-4">
			<BarContainer />

			<p className="h-0.5 w-full bg-gray-400"></p>

			<InputsContainer />
		</div>
	);
}

export default BarLayout;
