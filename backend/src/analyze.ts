import { ApiVisionResponse } from "./apitypes";

export const getNecessaryInfo = (response: ApiVisionResponse): string[] => {
  const allText = response.fullTextAnnotation.text;
  const listTexts = allText.split("\n");
  const reTime = new RegExp(/\d+:\d+/);
  const indexOfTime = listTexts.findIndex((element) => {
    return reTime.test(element);
  });
  const reSum = new RegExp(/小計/);
  const indexOfSum = listTexts.findIndex((element) => {
    return reSum.test(element);
  });
  const shoppingContents = listTexts.slice(indexOfTime + 1, indexOfSum);
  const dropNumbers = new RegExp(/^\D+$/);
  let items: string[] = [];
  for (const eachItem of shoppingContents) {
    const itemSplitted = eachItem.split(" ");
    for (const item of itemSplitted) {
      if (dropNumbers.test(item)) items.push(item);
    }
  }

  return items;
};
