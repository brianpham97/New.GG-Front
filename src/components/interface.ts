export interface Page {
  changePage: (
    page: number,
    direction?: "forward" | "back",
    role?: any,
    category?: any
  ) => void;
}

export interface Skin {
  num: number;
  name?: string;
}

export interface Attributes {
  name: string;
  num: number;
  role: string;
}