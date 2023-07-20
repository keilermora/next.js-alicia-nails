import "server-only";

import { GoogleSpreadsheet } from "google-spreadsheet";
import ColorModel from "./ColorModel";

const ColorsAPI = {
  getAvailableColors: async () => {
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_DOC_ID as string, {
      apiKey: process.env.GOOGLE_PRIVATE_KEY as string,
    });

    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();

    const colors: ColorModel[] = rows.map((row) => ({
      isAvailable: row.get("Disponible") === "TRUE",
      id: row.get("ID"),
      name: row.get("Nombre"),
      hex: row.get("Hexadecimal"),
      brand: row.get("Marca"),
      type: row.get("Tipo"),
    }));

    const availableColors = colors.filter((color) => color.isAvailable);

    return availableColors;
  },
};

export default ColorsAPI;
