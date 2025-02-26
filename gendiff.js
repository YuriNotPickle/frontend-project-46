#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program
	.name('gendiff')
	.description('Compares two configuration files and shows a difference.')
	.version('1.0.0', '-V, --version', 'output the version number')
	.option('-f, --format <type>', 'output format', 'stylish') // Опция для выбора формата
	.arguments('<filepath1> <filepath2>') // Аргументы для путей к файлам
	.helpOption('-h, --help', 'output usage information');

program.parse(process.argv);
