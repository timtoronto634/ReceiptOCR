import fs from 'fs';
import { requestGoogleVisionAPI } from './requests';

// do ocr

export const triggerOcr = (base64ImagePath: string): object => {   
    const imageBase64 = fs.readFileSync(base64ImagePath, 'utf8');

    // get image from imagePath
    const response: object = requestGoogleVisionAPI(imageBase64);
    console.log(response);
    const result = response;
    return result;
}

export const handleHttpRequest = (base64ImagePath: string) => {
    triggerOcr(base64ImagePath)   
}




// write here if you have your own OCR engine