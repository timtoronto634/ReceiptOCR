export type ApiVisionResponse = {
  faceAnnotations?: any[];
  landmarkAnnotations?: any[];
  logoAnnotations?: any[];
  labelAnnotations?: any[];
  textAnnotations?: any[];
  localizedObjectAnnotations?: any[];
  safeSearchAnnotation?: any;
  imagePropertiesAnnotation?: any;
  error?: any;
  cropHintsAnnotation?: any;
  fullTextAnnotation?: fullTextAnnotation;
  webDetection?: any;
  productSearchResults?: any;
  context?: any;
};

type fullTextAnnotation = {
  pages?: object[];
  text?: string;
};
