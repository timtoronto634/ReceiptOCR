import * as fs from "fs";
import { requestGoogleVisionAPI } from "./requests";
import { getNecessaryInfo } from "./analyze";
import type { ApiVisionResponse } from "./apitypes";

export const triggerOcr = (imagePath: string): string[] => {
  // get image from imagePath
  //   const response: ApiVisionResponse = requestGoogleVisionAPI(imagePath);
  // mock response
  const response: ApiVisionResponse = JSON.parse(
    fs.readFileSync("textdetection_result_saved.json", "utf8")
  );
  // console.log(response);
  const result = getNecessaryInfo(response);
  return result;
};

// write here if you have your own OCR engine
