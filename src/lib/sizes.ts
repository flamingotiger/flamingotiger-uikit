export class Size {
  size: number;
  constructor(size: number) {
    this.size = size;
  }
  get rem() {
    return this.size / 16 + "rem";
  }
  get px() {
    return this.size / 16 + "px";
  }
}

export const Sizes = {
  xs: new Size(12),
  sm: new Size(14),
  md: new Size(16),
  lg: new Size(18),
  xlg: new Size(22),
  xxlg: new Size(24),
};
