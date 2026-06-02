import BarContainer from "../components/BarContainer.tsx";
import InputsContainer from "../components/InputsContainer.tsx";

function BarLayout() {
	return (
		<div className="flex h-11/12 w-156 flex-col items-center gap-4 bg-gray-400">
			<BarContainer />

			<InputsContainer />
		</div>
	);
}

export default BarLayout;
