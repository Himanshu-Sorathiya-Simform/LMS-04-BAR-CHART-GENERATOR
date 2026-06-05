import {
	type ActionDispatch,
	type ReactNode,
	createContext,
	useEffect,
	useReducer,
} from "react";
import { type DataActionState, dataReducer } from "../reducer/dataReducer.ts";
import type { Data } from "../types/types.ts";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage.ts";

type BarContext = {
	data: Data;
	dispatch: ActionDispatch<[action: DataActionState]>;
};

const BarContext = createContext<BarContext | null>(null);

interface BarProviderProps {
	children: ReactNode;
}

function BarProvider({ children }: BarProviderProps) {
	const [data, dispatch] = useReducer(dataReducer, "data", (key) =>
		getLocalStorage<Data>(key),
	);

	useEffect(() => {
		setLocalStorage("data", data);
	}, [data]);

	const contextValue = { data, dispatch };

	return <BarContext value={contextValue}>{children}</BarContext>;
}

export { BarContext, BarProvider };
