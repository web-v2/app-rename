//listFacturas.js
import fs from "fs";
import path from "path";

const pathDirectorio = path.resolve(
  "D:\\APPs\\xampp\\htdocs\\Server\\Projects-Javascript\\app-rename\\Entradas\\FAC"
);

export function getDirectories(directorio) {
  return fs
    .readdirSync(directorio)
    .filter((file) => fs.lstatSync(path.join(directorio, file)).isDirectory());
}

export function getFiles(directorio) {
  try {
    return fs
      .readdirSync(directorio)
      .map((archivo) => path.parse(archivo).name);
  } catch (error) {
    console.error("❌ Error al leer el directorio:", error);
    return [];
  }
}

export const archivos = getFiles(pathDirectorio);
