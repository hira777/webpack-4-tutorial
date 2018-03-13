import $ from 'jquery';
import additionCalculator from './modules/addition-calculator';
import taxCalculator from './modules/tax-calculator';

const item1Price = 400;
const item2Price = 600;
const totalPrice = additionCalculator(item1Price, item2Price);
const tax = 1.08;
const priceIncludeTax = taxCalculator(totalPrice, tax);

// eslint-loaderでエラーが出て
// productionモードでビルドできないためコメントアウト
// console.log(priceIncludeTax);
$('body').html(priceIncludeTax);