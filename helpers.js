//helpers.js
import fs from "fs/promises";

const logFileError = "./errores.log";
const logFileSuccess = "./exitosos.log";

export async function logError(carpeta, nombreArchivo, err) {
  const errorMessage = `❌ Error al copiar el archivo ${carpeta} de ${nombreArchivo}:\n`;
  try {
    await fs.appendFile(logFileError, errorMessage);
  } catch (error) {
    console.error("Error al escribir en el archivo de log:", error);
  }
}

export async function logSuccess(carpeta, nombreArchivo) {
  const message = `✅ Archivo ${carpeta} copiado y renombrado correctamente dentro de ${nombreArchivo} \n`;
  try {
    await fs.appendFile(logFileSuccess, message);
  } catch (error) {
    console.error("Error al escribir en el archivo de log:", error);
  }
}
