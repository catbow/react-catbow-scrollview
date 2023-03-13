/// <reference types="react" />
interface TypeScrollView {
	videoImageCount: number;
	imgUrl: string;
	startNum: number;
	extension: string;
	scrollAreaY: string;
	viewPort?: any;
}
export default function ScrollView({
	option,
}: {
	option: TypeScrollView;
}): JSX.Element;
export { TypeScrollView };
