"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const percentageArray = () => {
    const arry = [];
    let count = 100;
    for (let i = 0; i <= count; i++) {
        arry.push(i / 100);
    }
    return arry;
};
exports.default = percentageArray;
