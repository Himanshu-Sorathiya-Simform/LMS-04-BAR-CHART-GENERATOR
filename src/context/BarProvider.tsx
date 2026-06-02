import {
	type ActionDispatch,
	type ReactNode,
	createContext,
	useReducer,
} from "react";
import { initialData } from "../data.ts";
import { type DataActionState, dataReducer } from "../reducer/dataReducer.ts";
import type { Data } from "../types/types.ts";

type BarContext = {
	data: Data;
	dispatch: ActionDispatch<[action: DataActionState]>;
};

const BarContext = createContext<BarContext | null>(null);

interface BarProviderProps {
	children: ReactNode;
}

function BarProvider({ children }: BarProviderProps) {
	const [data, dispatch] = useReducer(dataReducer, initialData);

	const contextValue = { data, dispatch };

	return <BarContext value={contextValue}>{children}</BarContext>;
}

export { BarContext, BarProvider };
