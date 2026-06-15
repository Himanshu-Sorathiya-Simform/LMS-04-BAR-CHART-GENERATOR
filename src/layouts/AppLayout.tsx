import { BarProvider } from "../context/BarProvider.tsx";
import BarLayout from "./BarLayout.tsx";

function AppLayout() {
	return (
		<main className="flex h-screen w-screen items-center justify-center bg-white p-6">
			<BarProvider>
				<BarLayout />
			</BarProvider>
		</main>
	);
}

export default AppLayout;
