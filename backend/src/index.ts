import { handleHttpRequest } from "./ocr";

const main = () => {
  const sampleRequest = {
    data: {
      name: "mybasket_black_bkgr",
      image: "base64image",
    },
  };
  const requestData = sampleRequest;
  const imageName = requestData.data.name;
  const originalImageFolderPath = "../images/originals/";
  const result = handleHttpRequest(originalImageFolderPath + imageName);
  return;
};

main();
