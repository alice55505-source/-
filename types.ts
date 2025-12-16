export enum Audience {
  TEENS = "青少年",
  COLLEGE = "大專生",
  YOUNG_ADULT = "青年",
  MIDDLE_AGED = "中年",
  GOSPEL_FRIENDS = "福音朋友",
  MIXED = "混和場合",
  ELDERLY = "年長聖徒"
}

export enum Level {
  ONE = 1,
  TWO = 2,
  THREE = 3
}

export interface CardQuestion {
  id: string;
  text: string;
  category: string; // e.g., "破冰", "經歷", "信仰"
  level: Level;
}

export interface CardConfig {
  audience: Audience;
  count: number;
  customBackImage: string | null; // Base64 Data URL of the cropped image
  categoryRatios: Record<string, number>; // Key: Category Name, Value: Percentage
}

export interface GeneratedCardSet {
  cards: CardQuestion[];
  config: CardConfig;
}