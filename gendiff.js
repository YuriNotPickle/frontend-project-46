#!/usr/bin/env node

import { Command } from 'commander';
import path from 'path';
import { readFileSync } from 'fs';
import parseFile from './src/parsers.js';

const program = new Command();

program
	.name('gendiff')
	.description('Compares two configuration files and shows a difference.')
	.version('1.0.0', '-V, --version', 'output the version number')
	.option('-f, --format <type>', 'output format', 'stylish')
	.arguments('<filepath1> <filepath2>')
	.action((filepath1, filepath2, options) => {
		// Получаем абсолютные пути к файлам
		const absolutePath1 = path.resolve(process.cwd(), filepath1);
		const absolutePath2 = path.resolve(process.cwd(), filepath2);

		// Читаем и парсим файлы
		const data1 = parseFile(absolutePath1);
		const data2 = parseFile(absolutePath2);

		// Выводим результат (пока просто для демонстрации)
		console.log('Parsed data from file 1:', data1);
		console.log('Parsed data from file 2:', data2);
		console.log('Selected format:', options.format);
	})
	.helpOption('-h, --help', 'output usage information');

program.parse(process.argv);
