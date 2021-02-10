import * as dayjs from 'dayjs';
import * as c from 'colorette';

let line: string;
export function info(text: string): void {
	return console.log(
		c.cyan('mitsuha: ')
		+ c.dim(dayjs().format('HH:mm:ss:SSS'))
		+ c.blue(' INFO    ')
		+ '> '
		+ text);
}
export function success(text: string): void {
	return console.log(
		c.cyan('mitsuha: ')
		+ c.dim(dayjs().format('HH:mm:ss:SSS'))
		+ c.green(' SUCCESS ')
		+ '> '
		+ text);
}
export function warn(text: string): void {
	return console.log(
		c.cyan('mitsuha: ')
		+ c.dim(dayjs().format('HH:mm:ss:SSS'))
		+ c.yellow(' WARNING ')
		+ '> '
		+ text);
}
export function error(text: string): void {
	return console.log(
		c.cyan('mitsuha: ')
		+ c.bgRed(dayjs().format('HH:mm:ss:SSS'))
		+ c.red(' ERROR   ')
		+ '> '
		+ text)
}

