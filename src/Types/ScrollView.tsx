import React, { useEffect, useRef, useState } from 'react';
import percentageArray from './percentageArray';

interface TypeScrollView {
	imgUrl: string;
	startNum: number;
	videoImageCount: number;
	extension: string;
	scrollAreaY: string;
	viewPort?: any;
	viewItem?: any;
}
/**
 *
 * @param option
 * @property {imgUrl} string -> Address before image
 * @property {videoImageCount} number -> Total-number-of-images
 * @property {startNum} number -> Image-path-start-number,
 * @property {extension} string -> Available-with-any-image-extension,
 * @property {scrollAreaY} px -> scrollArea-only-px,
 * @property {viewPort?} imgStyle -> all-imgTag-styles-available
 * @property Example {
 *	imgUrl: './images/004/',
 * 	extension: '.jpg', startNum: 10000,
 *  videoImageCount: 754, scrollAreaY: '50000px',
 *		viewPort: {
 *			width: '500px',
 *		},
 *	}
 */
export default function ScrollView({ option }: { option: TypeScrollView }) {
	const {
		videoImageCount,
		imgUrl,
		startNum,
		extension,
		viewPort,
		viewItem,
		scrollAreaY,
	} = option;
	const observerRef = useRef(null);
	const [ratio, setRatio] = useState(0);
	const imgNum =
		videoImageCount <= Math.round((ratio * videoImageCount) / 100)
			? videoImageCount
			: Math.round((ratio * videoImageCount) / 100);
	const imgScr = `${imgUrl}${startNum + imgNum}${extension}`;

	useEffect(() => {
		const option = {
			root: null,
			rootMargin: `${scrollAreaY} 0px 0px 0px`,
			threshold: percentageArray(),
		};

		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (ratio === 100) return;
				if (entry.isIntersecting) {
					setRatio(Math.round(entry.intersectionRatio * 100));
				}
			});
		}, option);

		if (observerRef.current) observer.observe(observerRef.current);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<div style={{ position: 'sticky', height: '100%', top: '0px' }}>
				<img style={viewPort} src={imgScr} alt='ScrollView' />
				{viewItem}
			</div>
			<div style={{ height: scrollAreaY }} ref={observerRef}></div>
		</div>
	);
}
