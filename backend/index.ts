import fs from 'fs';
import { handleHttpRequest } from './src/ocr'

const main = () =>  {
    const convertedImageFolderPath = '../../images/converteds/'
    const sampleRequest = {
        'data': {
            'name': 'mybasket_black_bkgr',
            'image': 'base64image'
        }
    }
    const requestData = sampleRequest
    const imageName = requestData.data.name;
    const imageCvtName = imageName + '_cvt';
    const imageCvtPath = convertedImageFolderPath + imageCvtName
    if (!fs.existsSync(imageCvtPath)){
        // save base64 image
        fs.writeFIleSync(imageCvtPath, requestData.data.image);
    }
    const result = handleHttpRequest(imageCvtPath);
    console.log('result ======', result);
    return;
}

main();