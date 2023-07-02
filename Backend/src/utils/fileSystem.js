import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

export function readFile(path) {
  try {
    return JSON.parse(
      readFileSync(join(process.cwd(), 'Backend', 'src', 'models', path))
    );
  } catch (err) {
    console.log(err.message);
  }
}

export function writeFile(path, content) {
  try {
    return JSON.parse(
      writeFileSync(
        join(process.cwd(), 'Backend', 'src', 'models', path),
        JSON.stringify(content, null, 4)
      )
    );
  } catch (err) {
    console.log(err.message);
  }
}
