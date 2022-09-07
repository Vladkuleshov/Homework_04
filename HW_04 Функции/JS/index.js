/* 1.Напиши функцию map(fn, array), которая принимает на вход функцию и массив, и обрабатывает каждый элемент массива этой функцией, возвращая новый массив.
2.Перепишите функцию, используя оператор '?' или '||'
Следующая функция возвращает true, если параметр age больше 18. В ином случае она задаёт вопрос confirm и возвращает его результат.
1	function checkAge(age) {
2	if (age > 18) {
3	return true;
4	} else {
5	return confirm('Родители разрешили?');
6	} } */

const arr = [5, 6, 7, 8, 9];

const sum = (i) => {return arr[i] + 10};
function map (fn, array) {
	const arr1 = [];
	for (let i = 0; i < array.length; i++) {
		arr1[i] = fn(i);
	}
	return arr1
}
console.log(map(sum, arr));

function checkAge(age) {
	age > 18 ? true : confirm('Родители разрешили?');
	return
}
const age1 = checkAge(parseInt(prompt('Введите свой возраст')));
console.log(age1);