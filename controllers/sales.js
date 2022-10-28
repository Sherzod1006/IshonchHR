import imgDownloader from "../pdf/image.js";
import { users } from "../root/index.js";
import { Markup } from "telegraf";

export const catSales = async (ctx, step, select) => {
  const chatId = ctx.message.chat.id;
  if (step === 1) {
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Ism,familiyangizni  kiriting</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 2) {
    users[5].ism = ctx.message.text;
    return await ctx.telegram.sendMessage(chatId, "<b>Manzilingiz </b>", {
      parse_mode: "html",
    });
  }
  if (step === 3) {
    users[5].manzil = ctx.message.text;
    return await ctx.telegram.sendMessage(chatId, "<b>Telefon raqamingiz</b>", {
      parse_mode: "html",
    });
  }
  if (step === 4) {
    users[5].telefon = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Yoshingizni kiriting: </b>",
      { parse_mode: "html" }
    );
  }
  if (step === 5) {
    users[5].yoshi = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Mutaxassisligingiz </b>",
      { parse_mode: "html" }
    );
  }
  if (step === 6) {
    users[5].mutahasislik = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Qaysi tillarni bilasiz </b>",
      { parse_mode: "html" }
    );
  }
  if (step === 7) {
    users[5].tilBilishi = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Ma`lumotingiz qanday ?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 8) {
    users[5].malumoti = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Turmush qurganmisiz ?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 9) {
    users[5].oilali = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Nechta farzandingiz bor? </b>",
      { parse_mode: "html" }
    );
  }
  if (step === 10) {
    users[5].farzandlari = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Qayerda yashaysiz (alohida yoki ota-onangiz bilan)? </b>",
      { parse_mode: "html" }
    );
  }
  if (step === 11) {
    users[5].yashashJoyi = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Telegram, Instagram, Facebook, Youtube qaysi ijtimoiy tarmoqda faolsiz?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 12) {
    users[5].ijtmoiyTarmoqlar = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Yolg'on gapirib turasizmi? </b>",
      { parse_mode: "html" }
    );
  }
  if (step === 13) {
    users[5].yolgon_rost = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Qanday yaxshi odatlaringiz bor?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 14) {
    users[5].yaxshiOdatlar = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Qanday yomon odatlaringiz bor?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 15) {
    users[5].yomonOdatlar = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Dunyoda yaxshi insonlar ko'pmi yoki yomon insonlar ko'pmi?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 16) {
    users[5].yaxshiOdam = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Dunyoda boylar ko'pmi yoki kambag'allarmi? </b>",
      { parse_mode: "html" }
    );
  }
  if (step === 17) {
    users[5].boyKambagal = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Piyodalar o'tish yo'lagida qizil chiroqda o'tasizmi?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 18) {
    users[5].peshahot = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Siz ishga reallik bilan qaraysizmi yoki vijdonan qaraysizmi?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 19) {
    users[5].ishgaqarashi = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Sizda qanday muammolar bor(masalan:qarz yoki boshqalar)?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 20) {
    users[5].muamolari = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Oilangiz haqida gapirib bering, ota onangiz borligi, oilada nechta farzand ekanligingiz haqida.</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 21) {
    users[5].oilasihaqida = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Siz ishga kirishda kim qaror qabul qiladi?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 22) {
    users[5].qaror = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Qaysi korxona, yoki tashkilotlarda va qaysi lavozimlarda ishlagansiz?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 23) {
    users[5].ishTajribasi = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Oldingi boshlig‘ingiz qanday inson edi?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 24) {
    users[5].avvalgiBoshliq = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Boshlig‘ingiz telefon raqamini bera olasizmi (Ha yoki Yo`q)</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 25) {
    users[5].boshliqNomer = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Avvalgi ish joyingizda kollektiv qanday edi?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 26) {
    users[5].avvalgiKallektiv = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Nima uchun ishdan ketdingiz?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 27) {
    users[5].sababIshdanKetish = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Ohirgi oylarda oylik daromadingiz qancha edi? </b>",
      { parse_mode: "html" }
    );
  }
  if (step === 28) {
    users[5].ohirgiDaromadlar = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Sizga oylik maosh yaxshimi yoki ish bay maosh yaxshimi?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 29) {
    users[5].ishBay = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Salomatligingiz 100% da qancha belgilaysiz</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 30) {
    users[5].salomatlik = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Ohirgi 3 yil ichida eng katta erishgan yutug‘ingiz nima?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 31) {
    users[5].ohirgiEngkattayutuq = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Bizni korxonada ishlashdan maqsadingiz nima ?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 32) {
    users[5].ishdanMaqsad = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Xayotda o‘z oldingizga qo‘ygan maqsadingiz nima ?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 33) {
    users[5].hayotMaqsad = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Korxonamizga qanday yordam bera olasiz?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 34) {
    users[5].korhonagaYordam = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Bizning korxonada eng kami qancha oylik maoshga ishlay olasiz?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 35) {
    users[5].oylikHohlash = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Bizning korxonada qancha vaqt ishlay olasiz ?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 36) {
    users[5].qanchaIshlayolish = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Bizning korxonada qachondan ish boshlay olasiz?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 37) {
    users[5].qachonIshBoshlash = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Qanday kompyuter dasturlarini bilasiz?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 38) {
    users[5].dasturlarniBilish = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Rasmingizni yuboring (Selfi ko’rinishida yoki 3x4):</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 39) {
    await ctx.telegram.sendMessage(
      chatId,
      "<b>Sizning anketangiz hodimlarimizga muvaffaqiyatli jo‘natildi. Mutahassislarimiz tomonidan ko'rib chiqiladi va tanlov asosida suhbatga chaqiriladi:</b>",
      { parse_mode: "html" }
    );
    const button = Markup.keyboard([["🚫 Cancel"]]).resize();
    await imgDownloader(ctx, select);
    return await ctx.telegram.sendMessage(
      chatId,
      "Bosh menyuga qaytish uchun Cancel tugmasini bosing",
      button
    );
  }
};
