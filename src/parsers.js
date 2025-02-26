import { readFileSync } from 'fs';
import path from 'path';

const parseFile = (filepath) => {
	// Определяем формат файла по расширению
	const format = path.extname(filepath).slice(1);

	// Читаем файл
	const fileContent = readFileSync(filepath, 'utf-8');

	// Парсим данные в зависимости от формата
	switch (format) {
		case 'json':
			return JSON.parse(fileContent);
		default:
			throw new Error(`Unsupported file format: ${format}`);
	}
};

export default parseFile;
