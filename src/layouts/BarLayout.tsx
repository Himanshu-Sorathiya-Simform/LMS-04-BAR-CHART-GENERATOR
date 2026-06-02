import BarContainer from "../components/BarContainer.tsx";
import InputsContainer from "../components/InputsContainer.tsx";

function BarLayout() {
	return (
		<div className="flex h-3/4 w-200 flex-col items-center gap-4 rounded-md border border-gray-300 bg-gray-50 p-4">
			<BarContainer />

			<InputsContainer />
		</div>
	);
}

export default BarLayout;
