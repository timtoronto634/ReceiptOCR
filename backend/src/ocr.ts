import * as fs from "fs";
import { requestGoogleVisionAPI } from "./requests";

export const triggerOcr = (imagePath: string): object => {
  // get image from imagePath
  //   const response: object = requestGoogleVisionAPI(imagePath);
  // mock response
  const response: object = JSON.parse(
    fs.readFileSync("textdetection_result_saved.json", "utf8")
  );
  console.log(response);
  const result = response;
  return result;
};

// write here if you have your own OCR engine
