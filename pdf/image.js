import axios from "axios";
import fs from "fs";
import { pdfCreator } from "./index.js";
import cloudinary from "cloudinary";

const imgDownloader = async (ctx, select) => {
  var fileId = ctx.message.photo[2].file_id;

  // await ctx.telegram.sendPhoto(-1001899266832, fileId);
  // await ctx.telegram.sendPhoto(ctx.message.from.id, fileId);

  //download sended photo in telegram bot
  ctx.telegram.getFileLink(fileId).then((url) => {
    axios({ url, responseType: "stream" }).then((response) => {
      return new Promise((resolve, reject) => {
        response.data
          .pipe(fs.createWriteStream(`./assets/image.png`))
          .on("finish", () => {
            // connection cloudinary db (upload image get url)
            cloudinary.config({
              cloud_name: "dax5cx2sv",
              api_key: "873411688578949",
              api_secret: "EA4zltRMZnrQHGpk083-qJf0S7s",
              secure: true,
            });

            cloudinary.v2.uploader
              .upload("assets/image.png")
              .then(async (result) => {
                await pdfCreator(result.url, ctx, select);
                console.log("Saved image");
              })
              .catch((e) => console.log(e.message));
          })
          .on("error", (e) => console.log("Dont`t saved:" + e.message));
      });
    });
  });
};

export default imgDownloader;
