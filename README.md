# React-catbow-scrllview

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
	extension: '.JPG', // Available-with-any-image-extension
	scrollAreaY: '50000px', // scrollArea,
	top: 20 // top: 20px
	viewPort: {
		// all-imgTag-styles-available
		width: '500px',
	},
};
// use
<ScollView option={option} viewItem={<Components />} />;
```

### ❉❉ The image address path must have consecutive numbers.

| option          | discription                                   | type           |
| --------------- | --------------------------------------------- | -------------- |
| imgUrl          | Address before image                          | String         |
| videoImageCount | Total-number-of-images                        | String         |
| startNum        | Image-path-start-number                       | Number         |
| extension       | Available-with-any-image-extension            | String         |
| scrollAreaY     | scrollArea                                    | Number         |
| viewPort        | img-style                                     | Object         |
| top             | css style top                                 | Number         |
| viewItem        | Jsx components can be rendered in ScrollVIew. | JSX Components |

<br/>

#### [Catbow Docs](https://catbow.github.io/catbow-docs/)
