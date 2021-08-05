import { useEffect } from 'react';

export default function useSriptLoader(src, fLoaded) {
    useEffect(()=> {
		const script = document.createElement("script");
		script.src = src;
		script.async = true;
		script.onload = () => fLoaded();
	  
		document.body.appendChild(script);
	}, []);

    return null;
}