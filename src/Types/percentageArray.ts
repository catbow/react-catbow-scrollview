const percentageArray = () => {
	const arry: number[] = [];
	let count = 100;
	for (let i = 0; i <= count; i++) {
		arry.push(i / 100);
	}
	return arry;
};

export default percentageArray;
