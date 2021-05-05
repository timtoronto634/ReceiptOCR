import { triggerOcr } from "./ocr";

const main = (): void => {
  const originalImageFolderPath = "../images/originals/";
  const sampleRequest = {
    data: {
      name: "mybasket_black_bkgr",
      image: "base64image",
    },
  }; // TODO remove this sample
  const requestData = sampleRequest; // TODO do sth for requested data
  const imageName = requestData.data.name;
  const result = triggerOcr(originalImageFolderPath + imageName);
  console.log(result);
  return;
};

main();
