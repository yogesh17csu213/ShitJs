import React, { createContext, useContext, useReducer } from "react";

import mainReducer from "./Reducers";
import { isPromise } from "../utils/index";

// Creating Context
export const DataContext = createContext({});
export const DataDispatchContext = createContext(null);

// Export useContext
export const useDataContext = () => {
	return useContext(DataContext);
};

// Dispatch call function
export function useDataDispatch() {
	return useContext(DataDispatchContext);
}

// Initializing Global States
export let GlobalData = {
	promise: null,
	done: false,
	num: 0,
};

// Context Provider
export function DataProvider({ children, data }) {
	const [contextData, dispatch] = useReducer(mainReducer, data);
	return (
		<DataContext.Provider value={contextData}>
			<DataDispatchContext.Provider value={dispatch}>
				{children}
			</DataDispatchContext.Provider>
		</DataContext.Provider>
	);
}

// All Api Data Calls
export function useData({ apiCall, name }) {
	const ctx = useContext(DataContext);
	if (ctx !== null) {
		ctx[`${name}`] = apiCall()
			.then((data) => {
				ctx[`${name}`] = data;
				GlobalData = {
					...GlobalData,
					[name]: { data: data.data, status: data.status },
				};
				return data.data;
			})
			.catch((e) => {
				console.log(e);
				return e;
			});
	}
}

// Get Server side data for all api calls
export const getServerData = (dataKey, repo) => {
	const ctx = useContext(DataContext);
	if (typeof window === `undefined`) {
		if (!ctx[`${dataKey}`]) {
			useData({ apiCall: repo, name: dataKey });
		}
		if (isPromise(ctx[`${dataKey}`])) {
			throw ctx[`${dataKey}`];
		}
	}
};
