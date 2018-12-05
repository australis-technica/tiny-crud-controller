import encoding from "encoding-down";
import levelup from "levelup";
import jsonDown from "./json-down";
import MemDown from "memdown";
/** */
export const JsonDb = (location: string): any => levelup(encoding(new jsonDown(location),{
  valueEncoding: "json"
}),
);
/** */
export const MemDb: any = (location?: string) => levelup(encoding(new MemDown(location), {
  valueEncoding: "json"
}));

export { default } from "./create-store";
