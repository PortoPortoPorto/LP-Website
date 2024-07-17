import React from 'react';
import { createContext, useRef } from 'react';

//The context object used to share data (refs) across the component tree without prop drilling 
//CONTEXT DOESN'T HOLD DATA. IT PROVIDES A WAY TO PASS DATA THROUGH THE COMPONENT TREE
const RefsContext = createContext();

//provider component (a functional component that wraps around the part of the app which need access to the refs)
//it takes 'children' as a prop, which represents any child components nested within the provider 
//PROVIDER USES THE CONTEXT TO PROVIDE DATA TO ITS DESCENDENTS. IT HOLDS THE ACTUAL DATA AND PASSES IT THROUGH THE 'Value' PROP
export const RefsProvider = ({ children }) => {
	//useRef() creates a ref object which will persist across re-renders 	
	const aboutRef = useRef(null);
	const productsRef = useRef(null);
	const illustrationsRef = useRef(null);
	const wandsRef = useRef(null);
	const contactRef = useRef(null);

//Refs object groups all refs together, so we can pass them as a single value to the RefsContext provider
	const refs = {
		aboutRef,
		productsRef,
		illustrationsRef,
		wandsRef,
		contactRef
	};

//this component makes the 'refs' object available to any child component that consumes this context
	return <RefsContext.Provider value={refs}>{children}</RefsContext.Provider>;

};

export default RefsContext;