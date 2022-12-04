# React-catbow-scrollview

#### ScrollView is using [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

#### [npm](https://www.npmjs.com/package/react-catbow-scrollview)

```javascript
 $ npm i react-catbow-scrollview
```

#### Option

```javascript
const option = {
	imgUrl: './images/004/', //  Address before image
	videoImageCount: 754, // Total-number-of-images
	startNum: 10000, // Image-path-start-number
	extension: '.jpg', // Available-with-any-image-extension
	scrollAreaY: 50000, // scrollArea,
	top: 20 // top: 20px
	viewPort: {
		// all-imgTag-styles-available
		width: '500px',
	},
};
// Render
<ScollView option={option} viewItem={<Components />} />;
// viewItem is optional
// you can render Components in ScollView
```

#### ❉❉ The image address path must have consecutive numbers.

#### ❉❉ If you host an image with S3, you can receive it with consecutive numbers.

#### ❉❉ Or, you just need to have an image inside the project.

<br/>

| option          | discription                                  | type           |
| --------------- | -------------------------------------------- | -------------- |
| imgUrl          | Address before image                         | String         |
| videoImageCount | Total-number-of-images                       | String         |
| startNum        | Image-path-start-number                      | Number         |
| extension       | Available-with-any-image-extension           | String         |
| scrollAreaY     | scrollArea                                   | Number         |
| viewPort?       | img-style                                    | Object         |
| top?            | css style top                                | Number         |
| viewItem?       | Jsx components can be rendered in ScrollVIew | JSX Components |

## How to use <span style='color:red;'>viewItem</span> option

#### you can try Components styling,

#### You must use css <sapn style='color:blue;'>'position: absolute'</sapn> at the top of Components

```javascript
function Hello() {
	return (
		<div style={{ top: '10px', position: 'absolute' }}>
			<h1 style={{ fontSize: '5rem' }}>hello world</h1>
			<h1 style={{ marginTop: '600px', fontSize: '5rem' }}>
				React-catbow-ScrollView
			</h1>
		</div>
	);
}

function App() {
	const option = {
		videoImageCount: 754,
		imgUrl: './images/004/',
		startNum: 10000,
		extension: '.jpg',
		scrollAreaY: 4970,
		top: 30,
		viewPort: {
			width: '550px',
			height: '550px',
			margin: '100px 100px',
			borderRadius: '9999px',
		},
	};
	return <ScrollView option={option} viewItem={<Hello />} />;
}
```

<img src='https://i.ibb.co/vZV4zxT/scroll-View.gif' style='height:200px; border: 1px solid black; padding:10px'/>

[Test Img Zip](https://www.icloud.com/iclouddrive/0632q_553w-ITb-4_xEdpXqig#004)

<br/>

#### [Catbow Docs](https://catbow.github.io/catbow-docs/)
