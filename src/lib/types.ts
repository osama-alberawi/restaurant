export type SectionId = "hero" | "menu" | "philosophy" | "atmosphere" | "chef" | "visit";

export type SectionTheme = "verdigris-base" | "pine-depth" | "persimmon-peak" | "calcified-field" | "nocturnal-field";

export type MenuCategoryId = "starters" | "salads" | "heritage" | "grill" | "mains" | "desserts" | "beverages";

export interface MenuItem {
  id: string;
  categoryId: MenuCategoryId;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn?: string;
  priceSAR: number;
  ingredients: string[];
  ingredientsEn?: string[];
  dietary?: string[];
  dietaryEn?: string[];
  image?: string;
  pairingNote?: string;
  pairingNoteEn?: string;
}

export interface MenuCategory {
  id: MenuCategoryId;
  titleAr: string;
  titleEn: string;
  subtitleAr: string;
  subtitleEn?: string;
  romanIndex: string;
}

export interface AtmosphereSpace {
  id: string;
  titleAr: string;
  titleEn: string;
  subtitleAr: string;
  subtitleEn?: string;
  descriptionAr: string;
  descriptionEn?: string;
  image: string;
  tag: string;
  tagEn?: string;
  aspect: "landscape" | "portrait" | "panoramic";
}

export interface ChefPhilosophy {
  quoteAr: string;
  quoteEn?: string;
  authorAr: string;
  authorEn?: string;
  roleAr: string;
  roleEn?: string;
  statementAr: string;
  statementEn?: string;
  pillars: {
    index: string;
    titleAr: string;
    titleEn: string;
    descriptionAr: string;
    descriptionEn?: string;
  }[];
}

export interface RestaurantMeta {
  nameAr: string;
  nameEn: string;
  taglineAr: string;
  taglineEn: string;
  storyAr: string[];
  storyEn?: string[];
  hours: {
    daysAr: string;
    daysEn?: string;
    timeAr: string;
    timeEn?: string;
  }[];
  location: {
    cityAr: string;
    cityEn?: string;
    districtAr: string;
    districtEn?: string;
    streetAr: string;
    streetEn?: string;
    coordinatesText: string;
  };
  dressCodeAr: string;
  dressCodeEn?: string;
  phone: string;
  email: string;
}

