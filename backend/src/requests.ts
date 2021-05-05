import fs from "fs";
import vision from "@google-cloud/vision";

export const requestGoogleVisionAPI = async (
  imagepath: string
): Promise<object> => {
  const client = new vision.ImageAnnotatorClient();
  const fileName = imagepath; // TODO do sth if needed
  // Performs text detection on the local file
  const [result] = await client.textDetection(fileName);
  console.log("result is: ", console.log(result));
  fs.writeFileSync("result_saved.json", JSON.stringify(result));
  // const detections = result.textAnnotations;
  // detections.forEach((text) => console.log(text));

  return result;
};
