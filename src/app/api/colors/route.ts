import "server-only";
import { cache } from "react";
import { NextResponse } from "next/server";
import { GoogleSpreadsheet } from "google-spreadsheet";
import ColorModel from "./ColorModel";

export const revalidate = 3600;

export async function GET() {
  const rows = await getSheetRows();

  const colors: ColorModel[] = rows.map((row) => ({
    isAvailable: row.get("Disponible") === "TRUE",
    id: row.get("ID"),
    name: row.get("Nombre"),
    hex: row.get("Hexadecimal"),
    brand: row.get("Marca"),
    type: row.get("Tipo"),
  }));

  // Filter by available colors
  const availableColors = colors.filter((color) => color.isAvailable);

  return NextResponse.json(availableColors);
}

const getSheetRows = cache(async () => {
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_DOC_ID as string, {
    apiKey: process.env.GOOGLE_PRIVATE_KEY as string,
  });

  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[0];
  const rows = await sheet.getRows();

  return rows;
});
