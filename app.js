import { Telegraf, Markup } from "telegraf";
import dotenv from "dotenv";
import { catBugalter } from "./controllers/bugalter.js";
import { catDecaration } from "./controllers/decoration.js";
import { catWashing } from "./controllers/washing.js";
import { catSupplier } from "./controllers/supplier.js";
import { catMarketing } from "./controllers/marketing.js";
import { catSales } from "./controllers/sales.js";
import { sendRek, userStore } from "./store/userStore.js";

dotenv.config();
var arr = [];
var select;
var step;
var data = sendRek();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.on("message", async (ctx) => {
  const userName = ctx.message.from.first_name;
  const chatId = ctx.message.chat.id;

  if (ctx.message.text === "/start" || ctx.message.text === "🚫 Cancel") {
    arr = [
      "Bugalteriya bo`limi",
      "Pardozlash bo`limi",
      "Yuvish bo`limi",
      "Dostavka bo`limi",
      "Marketing bo`limi",
      "Savdo bo`limi",
    ];
    select = "";
    step = 0;

    const sendMsg = `
          Assalomu alaykum ${userName}  \n⚜️"ISHONCH"  Gilam yuvish korxonasiga ishga taklif qilamiz!\n👥20 yoshdan 30 yoshgacha\n➖Yigit va qizlar uchun  \n📲Online tarzda anketa to'ldiring va bizning safimizga qo'shiling!  \n🔘Qulayliklar:\n ▫️Ahil va inoq jamoa.\n▫️Shaxsiy rivojlanish uchun imkoniyat.\n▫️Korxona hisobidan bepul tushlik.\n▫️Ish ko'lamiga qarab rag'batlantirish va bonuslar.\n▫️Yaxshi oylik daromad.\n▫️O'qish va tajriba olish imkoniyati  \n🔘 Talab etiladi:  \n▫️Ishga ma’suliyatlilik\n▫️Xushmuomilalik\n▫️Natijaviylik
          `;

    const buttons = Markup.keyboard([
      ["Ishonch korxonasi bo'sh ish o'rinlari ⚡️"],
      ["Biz haqimizda 💠", "Admin bilan bog`lanish 👨‍💻"],
    ]).resize();

    await ctx.telegram.sendMessage(chatId, sendMsg, buttons);
  }

  if (ctx.message.text === "Biz haqimizda 💠") {
    await ctx.telegram.sendMessage(
      chatId,
      "https://telegra.ph/KOMPANIYAMIZ-TARIXI-10-23"
    );
  }

  if (ctx.message.text === "Admin bilan bog`lanish 👨‍💻") {
    await ctx.telegram.sendMessage(
      chatId,
      "<b> 💻 Admin: @businessman_bunyodbek \n 📞 Tel: +998997270657 </b>",
      { parse_mode: "HTML" }
    );
  }

  if (ctx.message.text === "Ishonch korxonasi bo'sh ish o'rinlari ⚡️") {
    step++;
    const buttons = Markup.keyboard([["Ha", "Yo'q"]]).resize();
    const msg = `Siz bilan yaqindan tanishish va dunyo qarashingizni bilishimiz uchun savollar berishimizga rozimisiz?`;
    await ctx.telegram.sendMessage(chatId, msg, buttons);
  }

  if (ctx.message.text === "Ha" && step === 1) {
    const buttons = Markup.keyboard([
      ["💶 Bugalteriya bo`limi", "📈 Marketing bo`limi"],
      ["⚜  Pardozlash bo`limi", "💦 Yuvish bo`limi"],
      ["🪩 Savdo bo`limi", "🚙 Dostavka bo`limi"],
      ["🚫 Cancel"],
    ]).resize();
    await ctx.telegram.sendMessage(chatId, `Kategoriyani tanglang`, buttons);
  }
  if (ctx.message.text === "Yo'q" && step === 1) {
    const buttons = Markup.keyboard([["🚫 Cancel"]]).resize();
    await ctx.telegram.sendMessage(
      chatId,
      `Bosh menyuga qaytish uchun Cancel tugmasini bosing`,
      buttons
    );
  }

  if (
    ctx.message.text === "💶 Bugalteriya bo`limi" ||
    ctx.message.text === "⚜  Pardozlash bo`limi" ||
    ctx.message.text === "💦 Yuvish bo`limi" ||
    ctx.message.text === "🪩 Savdo bo`limi" ||
    ctx.message.text === "🚙 Dostavka bo`limi" ||
    ctx.message.text === "📈 Marketing bo`limi"
  ) {
    const str = ctx.message.text;
    const string = str.slice(3, str.length);
    select = arr.filter((v) => v === string);
    step = 0;
  }
  if (select) {
    switch (select[0]) {
      case "Bugalteriya bo`limi":
        step++;
        catBugalter(ctx, step, select);
        break;
      case "Pardozlash bo`limi":
        step++;
        catDecaration(ctx, step, select);
        break;
      case "Yuvish bo`limi":
        step++;
        catWashing(ctx, step, select);
        break;
      case "Dostavka bo`limi":
        step++;
        catSupplier(ctx, step, select);
        break;
      case "Marketing bo`limi":
        step++;
        catMarketing(ctx, step, select);
        break;
      case "Savdo bo`limi":
        step++;
        catSales(ctx, step, select);
        break;
    }
  }
});

bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
