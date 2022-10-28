import pdf from "pdf-creator-node";
import fs from "fs";
import { users } from "../root/index.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

export const pdfCreator = async (url, ctx, select) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  let htmlFile = "";
  let data;

  switch (select[0]) {
    case "Bugalteriya bo`limi":
      htmlFile = "bugalter";
      data = [users[0]];
      break;
    case "Pardozlash bo`limi":
      htmlFile = "pardozlash";
      data = [users[1]];
      break;
    case "Yuvish bo`limi":
      htmlFile = "yuvish";
      data = [users[2]];
      break;
    case "Dostavka bo`limi":
      htmlFile = "dastavka";
      data = [users[3]];
      break;
    case "Marketing bo`limi":
      htmlFile = "marketing";
      data = [users[4]];
      break;
    case "Savdo bo`limi":
      htmlFile = "savdo";
      data = [users[5]];
      break;
  }

  const html = fs.readFileSync(`html/${htmlFile}.html`, "utf-8");
  const pdF = path.join(__dirname, "/src", "users.pdf");

  data[0].rasm = url;

  const options = {
    format: "A4",
    orientation: "portrait",
    border: "10mm",
  };

  const documents = {
    html: html,
    data: {
      users: data,
    },
    path: "./pdf/src/users.pdf",
    type: "",
  };

  pdf.create(documents, options).then(async (res) => {
    console.log(res);
    try {
      await ctx.telegram.sendDocument(
        -1001820251845,
        { source: pdF },
        {
          caption: `\nProfil nomi:<a href="tg://user?id=${ctx.message.chat.id}">${ctx.message.chat.first_name}</a>\nLavozimi: #${htmlFile}\nBizdan olmoqchi bo'lgan oyligi: ${data[0].oylikHohlash}\nTel:${data[0].telefon}\nManzili : #${data[0].manzil} \n`,
          parse_mode: "HTML",
        }
      );
    } catch (err) {
      console.log(err.message);
    }
  });
};
