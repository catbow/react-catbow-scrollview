"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const percentageArray_1 = __importDefault(require("./percentageArray"));
function ScrollView({ option }) {
    const { videoImageCount, imgUrl, startNum, extension, viewPort, scrollAreaY, } = option;
    const observerRef = (0, react_1.useRef)(null);
    const [ratio, setRatio] = (0, react_1.useState)(0);
    const imgNum = videoImageCount <= Math.round((ratio * videoImageCount) / 100)
        ? videoImageCount
        : Math.round((ratio * videoImageCount) / 100);
    const imgScr = `${imgUrl}${startNum + imgNum}${extension}`;
    (0, react_1.useEffect)(() => {
        const option = {
            root: null,
            rootMargin: `${scrollAreaY} 0px 0px 0px`,
            threshold: (0, percentageArray_1.default)(),
        };
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (ratio === 100)
                    return;
                if (entry.isIntersecting) {
                    setRatio(Math.round(entry.intersectionRatio * 100));
                }
            });
        }, option);
        if (observerRef.current)
            observer.observe(observerRef.current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ style: { position: 'sticky', height: '100%', top: '0px' } }, { children: (0, jsx_runtime_1.jsx)("img", { style: viewPort, src: imgScr, alt: 'ScrollView' }) })), (0, jsx_runtime_1.jsx)("div", { style: { height: scrollAreaY }, ref: observerRef })] }));
}
exports.default = ScrollView;
