//index.js
import { archivos } from "./listFacturas.js";
import { destino, origen, carpetas } from "./config.js";
import { copiarArchivo } from "./fileManager.js";

async function facturas() {
  await Promise.all(
    carpetas.map((dir) =>
      Promise.all(
        archivos.map((file) =>
          copiarArchivo(`${origen}/${dir}`, destino, file, dir)
        )
      )
    )
  );
}

facturas();
