export class Color {
  color: string = "";
  constructor(color: string) {
    this.color = color;
  }
  get rgb() {
    return this.color
      .match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i)
      ?.slice(1)
      .map((e) => parseInt(e, 16))
      .join(",");
  }
  static random() {
    const code = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
    ];
    const hex = new Array(6)
      .fill(null)
      .map(() => code[Math.floor(Math.random() * 16)])
      .join("");
    return `#${hex}`;
  }
}

export const Colors: { [key: string]: Color } = {
  primary: new Color("#ff6d00"),
  "dark-primary": new Color("#ff5722"),
  orange: new Color("#ff6d00"),
  "dark-orange": new Color("#ff5722"),
  gray: new Color("#707070"),
  white: new Color("#ffffff"),
  black: new Color("#000000"),
};
