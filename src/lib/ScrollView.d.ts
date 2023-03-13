import React from 'react';
export interface TypeScrollView {
    imgUrl: string;
    startNum: number;
    videoImageCount: number;
    extension: string;
    scrollAreaY: number;
    viewPort?: React.CSSProperties;
    top?: number;
}
/**
 *
 * @props option
 * @property {imgUrl} string -> Address before image
 * @property {videoImageCount} number -> Total-number-of-images
 * @property {startNum} number -> Image-path-start-number,
 * @property {extension} string -> Available-with-any-image-extension,
 * @property {scrollAreaY} number -> scrollArea-only-px,
 * @property {viewPort?} imgStyle -> all-imgTag-styles-available
 * @property {top?} number||rem -> position top
 * @props viewItem? JSX.Element
 * @props setEjectRatio? SetState
 */
export default function ScrollView({ option, viewItem, setEjectRatio, }: {
    option: TypeScrollView;
    viewItem?: JSX.Element;
    setEjectRatio?: React.Dispatch<React.SetStateAction<number>>;
}): JSX.Element;
