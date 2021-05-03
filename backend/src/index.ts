import { handleHttpRequest } from "./ocr";
import fs from "fs";

const main = () => {
  //   const convertedImageFolderPath = "../../images/converteds/";
  const sampleRequest = {
    data: {
      name: "mybasket_black_bkgr",
      image: "base64image",
    },
  };
  const requestData = sampleRequest;
  const imageName = requestData.data.name;
  //   const imageCvtName = imageName + "_cvt";
  //   const imageCvtPath = convertedImageFolderPath + imageCvtName;
  //   if (!fs.existsSync(imageCvtPath)) {
  //     // save base64 image
  //     fs.writeFileSync(imageCvtPath, requestData.data.image);
  //   }
  const originalImageFolderPath = "../images/originals/";
  const result = handleHttpRequest(originalImageFolderPath + imageName);
  console.log("result ======", result);
  return;
};

main();
