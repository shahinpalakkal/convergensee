import React, { useEffect } from 'react';
const Head = ({ script = [] }) => {
	useEffect(() => {
		const scriptTags = script.map(({ data, src, tag = 'script', ...attr }) => {
			const scriptTag = document.createElement(tag);
			try {
				if (data) scriptTag.innerHTML = data;
				if (src) scriptTag.src = src;
				scriptTag.type = 'text/javascript';
				Object.entries(attr).forEach(([key, value]) => scriptTag.setAttribute(key, value));
				document.head.append(scriptTag);
			} catch (e) {
				console.log(e);
			}
			return scriptTag;
		});
		return () => scriptTags.forEach((ele) => ele.remove());		
	}, []);
	return (
		<div></div>
	);
};
export default Head;
