import { getNecessaryInfo } from "./analyze";
import * as fs from "fs";

describe("greet", (): void => {
  test("basic", () => {
    const response = JSON.parse(
      fs.readFileSync("textdetection_result_saved.json", "utf8")
    );
    const out1 = [
      "烏龍茶MB",
      "有料レジ袋",
      "(乙東",
      "X",
      "国乙)",
      "みかん",
      "バナナ",
      "ルヴァン黒糖入り",
      "具だくさんうの花",
      "ブルガリアYGプレーン",
      "手巻おにぎり(ツナマヨ",
      "レジ割引",
      "手巻おにぎり",
      "焼鮭)",
    ];
    expect(getNecessaryInfo(response)).toStrictEqual(out1);
  });
});
