import ScrollView from '../Types/ScrollView';

function App() {
	const option = {
		videoImageCount: 754, // 이미지 개수
		imgUrl: './images/004/', // 이미지 앞 주소
		startNum: 10000, // 이미지 시작 넘버
		extension: '.JPG', // 이미지 확장자
		scrollAreaY: '50000px', // 스크롤 공간 확보
		viewPort: {
			// img style
			width: '500px',
		},
	};

	return (
		<div className='App'>
			hi
			<ScrollView option={option} />
		</div>
	);
}

export default App;
