export default class FormatHelper {
  static numberToWords(input) {
    const parts = [
      "",
      "هزار",
      "میلیون",
      "میلیارد",
      "تریلیون",
      "کوادریلیون",
      "کویینتیلیون",
      "سکستیلیون",
    ];
    const numbers = {
      0: [
        "",
        "صد",
        "دویست",
        "سیصد",
        "چهارصد",
        "پانصد",
        "ششصد",
        "هفتصد",
        "هشتصد",
        "نهصد",
      ],
      1: [
        "",
        "ده",
        "بیست",
        "سی",
        "چهل",
        "پنجاه",
        "شصت",
        "هفتاد",
        "هشتاد",
        "نود",
      ],
      2: ["", "یک", "دو", "سه", "چهار", "پنج", "شش", "هفت", "هشت", "نه"],
      two: [
        "ده",
        "یازده",
        "دوازده",
        "سیزده",
        "چهارده",
        "پانزده",
        "شانزده",
        "هفده",
        "هجده",
        "نوزده",
      ],
      zero: "صفر",
    };
    const delimiter = " و ";

    let string = input + ""; // covert to string.

    string = string
      .split("")
      .reverse()
      .join("")
      .replace(/\d{3}(?=\d)/g, "$&,")
      .split("")
      .reverse()
      .join("")
      .split(",")
      .map((separated) => Array(4 - separated.length).join("0") + separated);

    let result = [];
    for (let iThree = 0; iThree < string.length; iThree++) {
      const three = string[iThree];
      let resultThree = [];

      for (let index = 0; index < three.length; index++) {
        const digit = three[index];
        if (index === 1 && digit === "1") {
          resultThree.push(numbers.two[three[2]]);
        } else if (
          (index !== 2 || three[1] !== "1") &&
          numbers[index][digit] !== ""
        ) {
          resultThree.push(numbers[index][digit]);
        }
      }

      resultThree = resultThree.join(delimiter);
      result.push(resultThree + " " + parts[string.length - iThree - 1]);
    }

    result = result
      .filter((part) => part.trim() !== "")
      .join(delimiter)
      .trim();

    if (result === "") {
      result = numbers.zero;
    }

    return result;
  }
  static numberSeperator(number) {
    if (typeof number === "string") {
      return number?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
  static toPersianString(str) {
    if (typeof str === "string") {
      return str
        .replace(/1/g, "۱")
        .replace(/2/g, "۲")
        .replace(/3/g, "۳")
        .replace(/4/g, "۴")
        .replace(/5/g, "۵")
        .replace(/6/g, "۶")
        .replace(/7/g, "۷")
        .replace(/8/g, "۸")
        .replace(/9/g, "۹")
        .replace(/0/g, "۰");
    } else {
      return str
        .toString()
        .replace(/1/g, "۱")
        .toString()
        .replace(/2/g, "۲")
        .toString()
        .replace(/3/g, "۳")
        .toString()
        .replace(/4/g, "۴")
        .toString()
        .replace(/5/g, "۵")
        .toString()
        .replace(/6/g, "۶")
        .toString()
        .replace(/7/g, "۷")
        .toString()
        .replace(/8/g, "۸")
        .toString()
        .replace(/9/g, "۹")
        .toString()
        .replace(/0/g, "۰");
    }
  }
  static toEnglishString(str) {
    if (typeof str === "string") {
      return str
        .replace(/۱/g, "1")
        .replace(/۲/g, "2")
        .replace(/۳/g, "3")
        .replace(/۴/g, "4")
        .replace(/۵/g, "5")
        .replace(/۶/g, "6")
        .replace(/۷/g, "7")
        .replace(/۸/g, "8")
        .replace(/۹/g, "9")
        .replace(/۰/g, "0");
    } else {
      return str
        .toString()
        .replace(/۱/g, "1")
        .toString()
        .replace(/۲/g, "2")
        .toString()
        .replace(/۳/g, "3")
        .toString()
        .replace(/۴/g, "4")
        .toString()
        .replace(/۵/g, "5")
        .toString()
        .replace(/۶/g, "6")
        .toString()
        .replace(/۷/g, "7")
        .toString()
        .replace(/۸/g, "8")
        .toString()
        .replace(/۹/g, "9")
        .toString()
        .replace(/۰/g, "0");
    }
  }
}
