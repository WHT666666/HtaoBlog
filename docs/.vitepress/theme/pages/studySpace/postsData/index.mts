import { data as AIData } from "./AI.data.mjs";
import { data as frontData } from "./front.data.mjs";
import { data as backData } from "./back.data.mjs";
import { data as listData } from "./list.data.mjs";

export const data = {
  list: listData,
  frontend: frontData,
  backend: backData,
  AI: AIData,
};
console.log(data);
