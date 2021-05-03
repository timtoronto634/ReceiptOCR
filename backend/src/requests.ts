import fs from 'fs';
import vision from '@google-cloud/vision';
// send image to Vision API

export const requestGoogleVisionAPI = async (image: string): Promise<object> =>  {

    // Creates a client
    const client = new vision.ImageAnnotatorClient();

    /**
     * TODO(developer): Uncomment the following line before running the sample.
     */
    // const fileName = 'Local image file, e.g. /path/to/image.png';
    const fileName = image;

    // Performs text detection on the local file
    const [result] = await client.textDetection(fileName);
    console.log("result is: ", console.log(result))
    fs.writeFileSync('result_saved.json', JSON.stringify(result));
    const detections = result.textAnnotations;
    console.log('Text:');
    detections.forEach(text => console.log(text));

    return {};
}