export interface Page {
  changePage: (
    page: number,
    direction?: "forward" | "back",
    role?: 'top' | 'jung' | 'mid' | 'bot' | 'supp' | undefined,
    category?: "meta" | "thirst" | undefined
  ) => void;
}

export interface Skin {
  num: number;
  name?: string;
}

export interface Attributes {
  name: string;
  num: number;
  role: 'top' | 'jung' | 'mid' | 'bot' | 'supp' | undefined
}