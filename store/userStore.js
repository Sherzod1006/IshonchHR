import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const userStore = (ctx) => {
  const { id } = ctx.message.chat;
  const obj = {
    chatId: id,
    isAdmin: false,
  };
  const db = fs.readFileSync(path.join(__dirname, "/store.json"), "utf8");
  const data = JSON.parse(db);
  const res = data.find(
    (v) => v.chatId === obj.chatId || v.chatId !== parseInt(process.env.adminId)
  );
  if (!res) {
    data.push(obj);
    fs.writeFileSync(path.join(__dirname, "/store.json"), JSON.stringify(data));
  }
};

export const sendRek = () => {
  const db = fs.readFileSync(path.join(__dirname, "/store.json"), "utf8");
  const data = JSON.parse(db);
  return data;
};
