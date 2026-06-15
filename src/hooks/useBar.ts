import { useContext } from "react";
import { BarContext } from "../context/BarProvider.tsx";

function useBar() {
	const context = useContext(BarContext);

	if (!context) {
		throw new Error("useBar must be used inside BarProvider context.");
	}

	return context;
}

export { useBar };
