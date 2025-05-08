//fileManager.js
import fs from "fs/promises";
import path from "path";
import { logError, logSuccess } from "./helpers.js";
import { nit } from "./config.js";

export async function copiarArchivo(origen, destino, nombreArchivo, carpeta) {
  const carpetaDestino = path.resolve(destino, nombreArchivo);
  const rutaArchivoOrigen = path.resolve(origen, `${nombreArchivo}.pdf`);
  const nombreFinal =
    carpeta === "FAC"
      ? `${nombreArchivo}.pdf`
      : `${carpeta}_${nit}_${nombreArchivo}.pdf`;

  const rutaArchivoDestino = path.resolve(carpetaDestino, nombreFinal);

  try {
    await fs.mkdir(carpetaDestino, { recursive: true });
    await fs.copyFile(rutaArchivoOrigen, rutaArchivoDestino);
    await logSuccess(carpeta, nombreArchivo);
    console.log(
      `✅ Archivo ${nombreFinal} copiado correctamente dentro de ${nombreArchivo}.`
    );
  } catch (err) {
    console.error(`❌ Error al copiar ${carpeta}_${nit}_${nombreArchivo} en ${nombreArchivo}:`, `No encontrado, revisar ${carpeta}`);
    await logError(carpeta, nombreArchivo, err);
  }
}
