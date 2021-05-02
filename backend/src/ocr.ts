import { requestGoogleVisionAPI } from './requests';

// do ocr

const getResponse = (imageBase64: string): object => {
    // trigger API
    const response: object = requestGoogleVisionAPI(imageBase64);
    return response;
}

export const triggerOcr = (imagePath: string): object => {   
    // get image from imagePath
    const imageBase64 = imagePath;
    const response: object = getResponse(imageBase64);
    const result = response;
    return response;
}






// write here if you have your own OCR engine