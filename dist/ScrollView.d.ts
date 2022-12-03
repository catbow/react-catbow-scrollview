/// <reference types="react" />
interface TypeScrollView {
    imgUrl: string;
    startNum: number;
    videoImageCount: number;
    extension: string;
    scrollAreaY: number;
    viewPort?: any;
    top?: number;
}
/**
 *
 * @param option
 * @property {imgUrl} string -> Address before image
 * @property {videoImageCount} number -> Total-number-of-images
 * @property {startNum} number -> Image-path-start-number,
 * @property {extension} string -> Available-with-any-image-extension,
 * @property {scrollAreaY} number -> scrollArea-only-px,
 * @property {viewPort?} imgStyle -> all-imgTag-styles-available
 * @property {top?} number||rem -> position top
 * @param viewItem? JSX.Element
 */
export default function ScrollView({ option, viewItem, }: {
    option: TypeScrollView;
    viewItem?: JSX.Element;
}): JSX.Element;
export {};
