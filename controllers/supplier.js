import imgDownloader from "../pdf/image.js";
import { users } from "../root/index.js";
import { Markup } from "telegraf";

export const catSupplier = async (ctx, step, select) => {
  const chatId = ctx.message.chat.id;
  if (step === 1) {
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Ism,familiyangizni  kiriting</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 2) {
    users[3].ism = ctx.message.text;
    return await ctx.telegram.sendMessage(chatId, "<b>Manzilingiz </b>", {
      parse_mode: "html",
    });
  }
  if (step === 3) {
    users[3].manzil = ctx.message.text;
    return await ctx.telegram.sendMessage(chatId, "<b>Telefon raqamingiz</b>", {
      parse_mode: "html",
    });
  }
  if (step === 4) {
    users[3].telefon = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Yoshingizni kiriting: </b>",
      { parse_mode: "html" }
    );
  }
  if (step === 5) {
    users[3].yoshi = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Mutaxassisligingiz </b>",
      { parse_mode: "html" }
    );
  }
  if (step === 6) {
    users[3].mutahasislik = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Qaysi tillarni bilasiz </b>",
      { parse_mode: "html" }
    );
  }
  if (step === 7) {
    users[3].tilBilishi = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Ma`lumotingiz qanday ?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 8) {
    users[3].malumoti = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Turmush qurganmisiz ?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 9) {
    users[3].oilali = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Nechta farzandingiz bor? </b>",
      { parse_mode: "html" }
    );
  }
  if (step === 10) {
    users[3].farzandlari = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Qayerda yashaysiz (alohida yoki ota-onangiz bilan)? </b>",
      { parse_mode: "html" }
    );
  }
  if (step === 11) {
    users[3].yashashJoyi = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Yolg'on gapirib turasizmi? </b>",
      { parse_mode: "html" }
    );
  }
  if (step === 12) {
    users[3].yolgon_rost = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Qanday yaxshi odatlaringiz bor?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 13) {
    users[3].yaxshiOdatlar = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Qanday yomon odatlaringiz bor?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 14) {
    users[3].yomonOdatlar = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Piyodalar o'tish yo'lagida qizil chiroqda o'tasizmi?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 15) {
    users[3].peshahot = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Siz ishga reallik bilan qaraysizmi yoki vijdonan qaraysizmi?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 16) {
    users[3].ishgaqarashi = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Sizda qanday muammolar bor(masalan:qarz yoki boshqalar)?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 17) {
    users[3].muamolari = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Oilangiz haqida gapirib bering, ota onangiz borligi, oilada nechta farzand ekanligingiz haqida.</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 18) {
    users[3].oilasihaqida = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Siz ishga kirishda kim qaror qabul qiladi?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 19) {
    users[3].qaror = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Qaysi korxona, yoki tashkilotlarda va qaysi lavozimlarda ishlagansiz?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 20) {
    users[3].ishTajribasi = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Avvalgi ish joyingizda kollektiv qanday edi?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 21) {
    users[3].avvalgiKallektiv = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Nima uchun ishdan ketdingiz?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 22) {
    users[3].sababIshdanKetish = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Ohirgi oylarda oylik daromadingiz qancha edi? </b>",
      { parse_mode: "html" }
    );
  }
  if (step === 23) {
    users[3].ohirgiDaromadlar = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Sizga oylik maosh yaxshimi yoki ish bay maosh yaxshimi?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 24) {
    users[3].ishBay = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Salomatligingiz 100% da qancha belgilaysiz</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 25) {
    users[3].salomatlik = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Bizni korxonada ishlashdan maqsadingiz nima ?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 26) {
    users[3].ishdanMaqsad = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Bizning korxonada eng kami qancha oylik maoshga ishlay olasiz?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 27) {
    users[3].oylikHohlash = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Bizning korxonada qancha vaqt ishlay olasiz ?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 28) {
    users[3].qanchaIshlayolish = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Bizning korxonada qachondan ish boshlay olasiz?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 29) {
    users[3].qachonIshBoshlash = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Siz insonlar bilan qanchalik darajada kirishimlisiz?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 30) {
    users[3].kirishimli = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Siz o’zingizni ma’suliyatliman deb o’ylaysizmi? (necha foiz%):</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 31) {
    users[3].masuliyat = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Siz mashinani qanchalik darajada avaylab hayday olasiz? (necha foiz%)</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 32) {
    users[3].mashinaHaydash = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Rasmingizni yuboring (Selfi ko’rinishida yoki 3x4):</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 33) {
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
