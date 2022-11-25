import React, { useEffect, useRef, useState } from 'react';
import percentageArray from './percentageArray';
export default function ScrollView({
  option
}) {
  const {
    videoImageCount,
    imgUrl,
    startNum,
    extension,
    viewPort,
    scrollAreaY
  } = option;
  const observerRef = useRef(null);
  const [ratio, setRatio] = useState(0);
  const imgNum = videoImageCount <= Math.round(ratio * videoImageCount / 100) ? videoImageCount : Math.round(ratio * videoImageCount / 100);
  const imgScr = `${imgUrl}${startNum + imgNum}${extension}`;
  useEffect(() => {
    const option = {
      root: null,
      rootMargin: `${scrollAreaY} 0px 0px 0px`,
      threshold: percentageArray()
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
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      height: '100%',
      top: '0px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    style: viewPort,
    src: imgScr,
    alt: "ScrollView"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: scrollAreaY
    },
    ref: observerRef
  }));
}