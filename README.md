# React-catbow-scrllview

#### [npm](https://www.npmjs.com/package/react-catbow-scrollview)

```javascript
 $ npm i react-catbow-scrollview
```

#### Option

```javascript
const option = {
	imgUrl: './images/004/', // 이미지 앞 주소
	extension: '.JPG', // 이미지 확장자
	startNum: 10000, // 이미지 시작 넘버
	videoImageCount: 754, // 이미지 개수
	scrollAreaY: '50000px', // 스크롤 공간 확보
	viewPort: {
		// img style
		width: '500px',
	},
};
```

| option          | discription      | type   |
| --------------- | ---------------- | ------ |
| imgUrl          | path경로         | String |
| extension       | 이미지 확장자    | String |
| startNum        | 이미지 시작 넘버 | Number |
| videoImageCount | 이미지 개수      | String |
| scrollAreaY     | 스크롤 공간 확보 | String |
| viewPort        | img-style        | Object |

%% 이미지 주소 url은 연속된 번호를 가지고 있어야 사용할수 있습니다
