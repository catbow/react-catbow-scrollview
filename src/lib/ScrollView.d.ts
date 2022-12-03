/// <reference types="react" />
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
export default function ScrollView({ option }: {
    option: TypeScrollView;
}): JSX.Element;
export {};
