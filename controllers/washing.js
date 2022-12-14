import imgDownloader from "../pdf/image.js";
import { users } from "../root/index.js";
import { Markup } from "telegraf";

export const catWashing = async (ctx, step, select) => {
  const chatId = ctx.message.chat.id;
  if (step === 1) {
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Ism,familiyangizni  kiriting</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 2) {
    users[2].ism = ctx.message.text;
    return await ctx.telegram.sendMessage(chatId, "<b>Manzilingiz </b>", {
      parse_mode: "html",
    });
  }
  if (step === 3) {
    users[2].manzil = ctx.message.text;
    return await ctx.telegram.sendMessage(chatId, "<b>Telefon raqamingiz</b>", {
      parse_mode: "html",
    });
  }
  if (step === 4) {
    users[2].telefon = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Yoshingizni kiriting: </b>",
      { parse_mode: "html" }
    );
  }
  if (step === 5) {
    users[2].yoshi = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Mutaxassisligingiz </b>",
      { parse_mode: "html" }
    );
  }
  if (step === 6) {
    users[2].mutahasislik = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Qaysi tillarni bilasiz </b>",
      { parse_mode: "html" }
    );
  }
  if (step === 7) {
    users[2].tilBilishi = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Ma`lumotingiz qanday ?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 8) {
    users[2].malumoti = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Turmush qurganmisiz ?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 9) {
    users[2].oilali = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Nechta farzandingiz bor? </b>",
      { parse_mode: "html" }
    );
  }
  if (step === 10) {
    users[2].farzandlari = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Qayerda yashaysiz (alohida yoki ota-onangiz bilan)? </b>",
      { parse_mode: "html" }
    );
  }
  if (step === 11) {
    users[2].yashashJoyi = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Yolg'on gapirib turasizmi? </b>",
      { parse_mode: "html" }
    );
  }
  if (step === 12) {
    users[2].yolgon_rost = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Qanday yaxshi odatlaringiz bor?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 13) {
    users[2].yaxshiOdatlar = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Qanday yomon odatlaringiz bor?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 14) {
    users[2].yomonOdatlar = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Sizda qanday muammolar bor(masalan:qarz yoki boshqalar)?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 15) {
    users[2].muamolari = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Siz ishga kirishda kim qaror qabul qiladi?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 16) {
    users[2].qaror = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Qaysi korxona, yoki tashkilotlarda va qaysi lavozimlarda ishlagansiz?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 17) {
    users[2].ishTajribasi = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Avvalgi ish joyingizda kollektiv qanday edi?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 18) {
    users[2].avvalgiKallektiv = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Nima uchun ishdan ketdingiz?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 19) {
    users[2].sababIshdanKetish = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Ohirgi oylarda oylik daromadingiz qancha edi? </b>",
      { parse_mode: "html" }
    );
  }
  if (step === 20) {
    users[2].ohirgiDaromadlar = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Sizga oylik maosh yaxshimi yoki ish bay maosh yaxshimi?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 21) {
    users[2].ishBay = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Salomatligingiz 100% da qancha belgilaysiz</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 22) {
    users[2].salomatlik = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Bizning korxonada eng kami qancha oylik maoshga ishlay olasiz?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 23) {
    users[2].oylikHohlash = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Bizning korxonada qancha vaqt ishlay olasiz ?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 24) {
    users[2].qanchaIshlayolish = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Bizning korxonada qachondan ish boshlay olasiz?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 25) {
    users[2].qachonIshBoshlash = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Siz uchun tozalik qanchalik muhim? (necha foiz%)</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 26) {
    users[2].tozalik = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Siz o???zingizni qanchalik erinchoq deb o???ylaysiz? (necha foiz%)</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 27) {
    users[2].erinchoq = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Siz qanday korxonada ishlagan bo???lar edingiz? </b>",
      { parse_mode: "html" }
    );
  }
  if (step === 28) {
    users[2].qandayKorxona = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Siz o???zingizni qanchalik ma???suliyatli yoki ma???suliyatsiz deb o???ylaysiz?</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 29) {
    users[2].masuliyat = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Siz qanchalik darajada e???tiborlisiz? (Necha foiz?)</b>",
      { parse_mode: "html" }
    );
  }
  if (step === 30) {
    users[2].etiborli = ctx.message.text;
    return await ctx.telegram.sendMessage(
      chatId,
      "<b>Rasmingizni yuboring (Selfi ko???rinishida yoki 3x4):</b>",
      { parse_mode: "html" }
    );
  }

  if (step === 31) {
    await ctx.telegram.sendMessage(
      chatId,
      "<b>Sizning anketangiz hodimlarimizga muvaffaqiyatli jo???natildi. Mutahassislarimiz tomonidan ko'rib chiqiladi va tanlov asosida suhbatga chaqiriladi:</b>",
      { parse_mode: "html" }
    );
    const button = Markup.keyboard([["???? Cancel"]]).resize();
    await imgDownloader(ctx, select);
    return await ctx.telegram.sendMessage(
      chatId,
      "Bosh menyuga qaytish uchun Cancel tugmasini bosing",
      button
    );
  }
};
