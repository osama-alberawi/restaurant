import { MenuItem, MenuCategory, AtmosphereSpace, RestaurantMeta, ChefPhilosophy } from "@/lib/types";

export const RESTAURANT_DATA: RestaurantMeta = {
  nameAr: "أثِـيـر",
  nameEn: "ATHEER",
  taglineAr: "حيث تلتقي أصالة الأرض بسحر الجمر",
  taglineEn: "Avant-Garde Gastronomy Between Earth & Fire",
  storyAr: [
    "لا نؤمن بالمألوف ولا بالتقاليد الصامتة. وُلدت 'أثير' كفضاء طهي طليعي يحتفي بلهب الجمر، وعصارة التربة البرية، وجرأة الابتكار الحسي الصادم.",
    "كل طبق هو لوحة حرارية تُصنع يدوياً على حطب الزيتون المعتق، وتُتبّل بملح الصوان المستخرج من باطن الأرض، في مواجهة مباشرة مع حواس الضيف.",
    "هنا، الوقت ليس مقياساً للانتظار، بل هو عنصر طهي ناضج يُعتق النكهة ويعيد تعريف الهوية الغذائية برؤية معاصرة غير مسبوقة."
  ],
  hours: [
    {
      daysAr: "الثلاثاء — الخميس",
      daysEn: "Tuesday — Thursday",
      timeAr: "06:30 م — 12:00 منتصف الليل",
      timeEn: "06:30 PM — Midnight"
    },
    {
      daysAr: "الجمعة — السبت",
      daysEn: "Friday — Saturday",
      timeAr: "01:00 ظهراً — 04:30 عصراً | 07:00 م — 01:00 ص",
      timeEn: "01:00 PM — 04:30 PM | 07:00 PM — 01:00 AM"
    },
    {
      daysAr: "الأحد — الاثنين",
      daysEn: "Sunday — Monday",
      timeAr: "عطلة أسبوعية (مغلق)",
      timeEn: "Closed (Weekly Holiday)"
    }
  ],
  location: {
    cityAr: "عَمّان",
    cityEn: "Amman",
    districtAr: "جبل اللويبدة",
    districtEn: "Jabal Al-Weibdeh",
    streetAr: "مقابل زاوية كافيه",
    streetEn: "Opposite Zawia Cafe",
    coordinatesText: "31.9539° N, 35.9106° E"
  },
  dressCodeAr: "لباس أنيق راقٍ (Smart Casual)",
  dressCodeEn: "Smart Casual Attire",
  phone: "+962 7 9732 0840",
  email: "osamaberawi04@gmail.com"
};

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "starters",
    titleAr: "المقبلات",
    titleEn: "Appetizers & Cold Mezze",
    subtitleAr: "حمص، متبل باذنجان، ورق دوالي ومحمّرة",
    subtitleEn: "Silky hummus, fire-roasted mutabbal, and artisanal dips",
    romanIndex: "01"
  },
  {
    id: "salads",
    titleAr: "السلطات والشوربات",
    titleEn: "Salads & Hearth Soups",
    subtitleAr: "فتوش بلدي، تبولة ناعمة، وشوربة عدس دافئة",
    subtitleEn: "Fresh Levantine salads and slow-simmered winter broths",
    romanIndex: "02"
  },
  {
    id: "heritage",
    titleAr: "المطبخ الأردني",
    titleEn: "Jordanian Heritage Cuisine",
    subtitleAr: "المنسف بالجميد الكركي، المقلوبة، والمكمورة",
    subtitleEn: "Iconic Mansaf, layered Maqluba, and village Makmoura",
    romanIndex: "03"
  },
  {
    id: "grill",
    titleAr: "من الجمر والمشاوي",
    titleEn: "Charcoal & Wood Grills",
    subtitleAr: "مشاوي مشكلة، ريش غنم، وكباب على الفحم",
    subtitleEn: "Olive wood fire, tender lamb chops, and skewers",
    romanIndex: "04"
  },
  {
    id: "mains",
    titleAr: "الأطباق الرئيسية",
    titleEn: "Main Courses & Signatures",
    subtitleAr: "ستيك مشوي، سلمون، برغر لحم وريزوتو الفطر",
    subtitleEn: "Prime cuts, pan-seared salmon, and artisanal risotto",
    romanIndex: "05"
  },
  {
    id: "desserts",
    titleAr: "الحلويات",
    titleEn: "Heritage & Modern Confections",
    subtitleAr: "كنافة نابلسية دافئة، أم علي، وبقلاوة بالفستق",
    subtitleEn: "Warm Nabulsi kunafa, flaky baklava, and cream desserts",
    romanIndex: "06"
  },
  {
    id: "beverages",
    titleAr: "المشروبات",
    titleEn: "Infusions & Fresh Press",
    subtitleAr: "قهوة عربية بالهيل، شاي بالميرمية وعصائر طازجة",
    subtitleEn: "Cardamom Arabic coffee, mountain sage tea, and juices",
    romanIndex: "07"
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // =========================================================================
  // 01 — المقبلات (6 items)
  // =========================================================================
  {
    id: "str-1",
    categoryId: "starters",
    titleAr: "حمص كلاسيك",
    titleEn: "Classic Artisanal Hummus",
    descriptionAr: "حمص ناعم، طحينة، ليمون وزيت زيتون.",
    descriptionEn: "Velvety whipped chickpeas, artisanal sesame tahini, fresh lemon, and cold-pressed extra virgin olive oil.",
    priceSAR: 4.0,
    ingredients: ["حمص ناعم", "طحينة بلدية", "ليمون", "زيت زيتون بكر"],
    ingredientsEn: ["Whipped Chickpeas", "Sesame Tahini", "Lemon", "Extra Virgin Olive Oil"],
    dietary: ["نباتي", "خالٍ من الغلوتين"],
    dietaryEn: ["Vegetarian", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1577906096429-f73c2c312435?auto=format&fit=crop&w=1200&q=85",
    pairingNote: "خبز طابون ساخن بالسمسم",
    pairingNoteEn: "Warm hearth taboon bread"
  },
  {
    id: "str-2",
    categoryId: "starters",
    titleAr: "حمص باللحمة والصنوبر",
    titleEn: "Hummus with Spiced Lamb & Pine Nuts",
    descriptionAr: "حمص كريمي، لحم غنم مفروم، صنوبر وزيت زيتون.",
    descriptionEn: "Creamy whipped hummus crowned with pan-seared minced lamb, golden toasted pine nuts, and virgin olive oil.",
    priceSAR: 6.5,
    ingredients: ["حمص كريمي", "لحم غنم مفروم", "صنوبر محمص", "زيت زيتون"],
    ingredientsEn: ["Creamy Hummus", "Minced Baladi Lamb", "Golden Pine Nuts", "Olive Oil"],
    dietary: ["خالٍ من الغلوتين"],
    dietaryEn: ["Gluten-Free"],
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=1200&q=85",
    pairingNote: "مخلل خيار ولفت بلدي",
    pairingNoteEn: "Heirloom fermented pickles"
  },
  {
    id: "str-3",
    categoryId: "starters",
    titleAr: "متبل باذنجان",
    titleEn: "Smoked Eggplant Mutabbal",
    descriptionAr: "باذنجان مشوي، طحينة، ليمون وزيت زيتون.",
    descriptionEn: "Charcoal-smoked eggplant pureed with rich tahini, garlic, fresh lemon juice, and fruity olive oil.",
    priceSAR: 4.5,
    ingredients: ["باذنجان مشوي", "طحينة", "ليمون", "زيت زيتون"],
    ingredientsEn: ["Smoked Eggplant", "Sesame Tahini", "Fresh Lemon", "Virgin Olive Oil"],
    dietary: ["نباتي", "خالٍ من الغلوتين"],
    dietaryEn: ["Vegetarian", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=1200&q=85",
    pairingNote: "حبات الرمان البري",
    pairingNoteEn: "Fresh tart pomegranate arils"
  },
  {
    id: "str-4",
    categoryId: "starters",
    titleAr: "ورق دوالي",
    titleEn: "Hand-Rolled Stuffed Vine Leaves",
    descriptionAr: "ورق عنب محشو بالأرز والأعشاب، يقدم باردًا.",
    descriptionEn: "Tender vine leaves rolled with spiced Egyptian rice, fresh mint, parsley, and lemon-infused olive oil.",
    priceSAR: 5.0,
    ingredients: ["ورق عنب طازج", "أرز متبل", "أعشاب عطرية", "ليمون وزيت زيتون"],
    ingredientsEn: ["Tender Vine Leaves", "Seasoned Rice", "Fresh Herbs", "Lemon Olive Oil"],
    dietary: ["نباتي", "خالٍ من الغلوتين"],
    dietaryEn: ["Vegetarian", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1606914506453-ab390500d026?auto=format&fit=crop&w=1200&q=85",
    pairingNote: "شرائح الليمون الطازج",
    pairingNoteEn: "Caramelized lemon wheels"
  },
  {
    id: "str-5",
    categoryId: "starters",
    titleAr: "محمّرة",
    titleEn: "Roasted Red Pepper Muhammara",
    descriptionAr: "فلفل أحمر مشوي، جوز، دبس رمان وخبز محمص.",
    descriptionEn: "Fire-roasted red peppers pounded with roasted walnuts, tangy pomegranate molasses, and Aleppo chili flakes.",
    priceSAR: 5.0,
    ingredients: ["فلفل أحمر مشوي", "جوز بلدي", "دبس رمان", "خبز محمص"],
    ingredientsEn: ["Roasted Peppers", "Local Walnuts", "Pomegranate Molasses", "Toasted Crumbs"],
    dietary: ["نباتي"],
    dietaryEn: ["Vegetarian"],
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=1200&q=85",
    pairingNote: "رقائق خبز الشراك المقرمشة",
    pairingNoteEn: "Crisp shrak wafers"
  },
  {
    id: "str-6",
    categoryId: "starters",
    titleAr: "لبنة وزيت زيتون",
    titleEn: "Artisanal Labneh with Olive Oil & Za'atar",
    descriptionAr: "لبنة كريمية، زيت زيتون وزعتر.",
    descriptionEn: "Rich strained local labneh drizzled with vibrant green olive oil and wild Jordanian mountain za'atar.",
    priceSAR: 4.0,
    ingredients: ["لبنة كريمية", "زيت زيتون بكر", "زعتر بري"],
    ingredientsEn: ["Strained Labneh", "Virgin Olive Oil", "Wild Za'atar"],
    dietary: ["نباتي", "خالٍ من الغلوتين"],
    dietaryEn: ["Vegetarian", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=85",
    pairingNote: "طماطم كرزية وخيار بلدي",
    pairingNoteEn: "Heirloom baby cucumbers and olives"
  },

  // =========================================================================
  // 02 — السلطات (5 items)
  // =========================================================================
  {
    id: "sld-1",
    categoryId: "salads",
    titleAr: "فتوش",
    titleEn: "Levantine Fattoush",
    descriptionAr: "خضار طازجة، خبز محمص، سماق ودبس رمان.",
    descriptionEn: "Crisp seasonal greens, radishes, sumac-dusted pita croutons, and tangy pomegranate dressing.",
    priceSAR: 4.5,
    ingredients: ["خضار طازجة", "خبز محمص", "سماق بلدي", "دبس رمان"],
    ingredientsEn: ["Fresh Garden Greens", "Toasted Pita", "Wild Sumac", "Pomegranate Molasses"],
    dietary: ["نباتي"],
    dietaryEn: ["Vegetarian"]
  },
  {
    id: "sld-2",
    categoryId: "salads",
    titleAr: "تبولة",
    titleEn: "Traditional Parsley Tabbouleh",
    descriptionAr: "بقدونس مفروم ناعم، برغل، طماطم، نعناع، زيت زيتون وليمون.",
    descriptionEn: "Finely hand-chopped flat leaf parsley, bulgur, ripe tomatoes, garden mint, extra virgin olive oil, and lemon.",
    priceSAR: 4.5,
    ingredients: ["بقدونس مفروم", "برغل", "طماطم", "نعناع وزيت زيتون وليمون"],
    ingredientsEn: ["Parsley", "Fine Bulgur", "Tomatoes", "Mint & Lemon Olive Oil"],
    dietary: ["نباتي"],
    dietaryEn: ["Vegetarian"]
  },
  {
    id: "sld-3",
    categoryId: "salads",
    titleAr: "سلطة جرجير",
    titleEn: "Wild Arugula & Walnut Salad",
    descriptionAr: "جرجير طازج، بصل، بندورة، جوز، جبنة بيضاء وصوص بلسمك أو ليمون.",
    descriptionEn: "Fresh wild rocket leaves, onions, tomatoes, toasted walnuts, local white cheese, with balsamic or lemon dressing.",
    priceSAR: 5.5,
    ingredients: ["جرجير طازج", "بصل وبندورة", "جوز بلدي", "جبنة بيضاء"],
    ingredientsEn: ["Wild Rocket", "Onion & Tomato", "Local Walnuts", "White Cheese"],
    dietary: ["نباتي", "خالٍ من الغلوتين"],
    dietaryEn: ["Vegetarian", "Gluten-Free"]
  },
  {
    id: "sld-4",
    categoryId: "salads",
    titleAr: "سلطة يونانية",
    titleEn: "Classic Greek Salad",
    descriptionAr: "خس، خيار، طماطم، جبنة فيتا، زيتون كالاماتا وزعتر بري.",
    descriptionEn: "Crisp romaine lettuce, cucumbers, ripe tomatoes, creamy feta cheese, Kalamata olives, and wild oregano.",
    priceSAR: 5.0,
    ingredients: ["خس وخيار", "طماطم", "جبنة فيتا", "زيتون كالاماتا وزعتر بري"],
    ingredientsEn: ["Crisp Lettuce & Cucumber", "Tomatoes", "Feta Cheese", "Kalamata Olives & Oregano"],
    dietary: ["نباتي", "خالٍ من الغلوتين"],
    dietaryEn: ["Vegetarian", "Gluten-Free"]
  },
  {
    id: "sld-5",
    categoryId: "salads",
    titleAr: "شوربة عدس",
    titleEn: "Classic Roasted Lentil Soup",
    descriptionAr: "شوربة عدس كلاسيكية تقدم مع ليمون وخبز محمص.",
    descriptionEn: "Traditional golden simmered lentil soup served with lemon wedges and crisp toasted pita croutons.",
    priceSAR: 3.5,
    ingredients: ["عدس أصفر مطهو ببطء", "كمون بلدي", "ليمون", "خبز محمص"],
    ingredientsEn: ["Simmered Lentils", "Cumin", "Fresh Lemon", "Toasted Pita"],
    dietary: ["نباتي"],
    dietaryEn: ["Vegetarian"]
  },

  // =========================================================================
  // 03 — المطبخ الأردني (5 items)
  // =========================================================================
  {
    id: "jor-1",
    categoryId: "heritage",
    titleAr: "منسف أردني بالجميد الكركي",
    titleEn: "Jordanian Mansaf with Karak Jameed",
    descriptionAr: "لحم غنم بلدي مطهو بالجميد الكركي الأصيل، يقدم على خبز الشراك مع الأرز والمكسرات.",
    descriptionEn: "Prime baladi lamb simmered slowly in authentic Karak jameed broth, layered on paper-thin shrak bread with fragrant rice and roasted golden nuts.",
    priceSAR: 14.0,
    ingredients: ["لحم غنم بلدي", "جميد كركي أصيل", "خبز شراك", "أرز ومكسرات محمصة"],
    ingredientsEn: ["Baladi Lamb", "Authentic Karak Jameed", "Shrak Bread", "Rice & Golden Nuts"],
    dietary: ["تراث أردني أصيل"],
    dietaryEn: ["Jordanian Heritage"]
  },
  {
    id: "jor-2",
    categoryId: "heritage",
    titleAr: "مقلوبة لحم",
    titleEn: "Heritage Lamb Maqluba",
    descriptionAr: "أرز مبهر مع لحم الغنم والباذنجان المقلي والمكسرات المحمصة.",
    descriptionEn: "Classic inverted spiced rice layered with tender lamb, golden fried eggplants, and toasted pine nuts and almonds.",
    priceSAR: 11.0,
    ingredients: ["أرز مبهر", "لحم غنم طري", "باذنجان مقلي", "مكسرات محمصة"],
    ingredientsEn: ["Spiced Rice", "Tender Lamb", "Fried Eggplants", "Roasted Nuts"]
  },
  {
    id: "jor-3",
    categoryId: "heritage",
    titleAr: "مسخن دجاج بلدي",
    titleEn: "Authentic Baladi Chicken Musakhan",
    descriptionAr: "خبز طابون بلدي مغطى بالبصل المكرمل بزيت الزيتون البكر والسماق والدجاج المحمر.",
    descriptionEn: "Hearth-baked taboon flatbread soaked in extra virgin olive oil and caramelized onions, loaded with wild purple sumac and roasted half chicken.",
    priceSAR: 9.5,
    ingredients: ["دجاج محمر", "خبز طابون بلدي", "بصل مكرمل", "زيت زيتون بكر وسماق بلدي"],
    ingredientsEn: ["Roasted Chicken", "Taboon Bread", "Caramelized Onions", "EVOO & Wild Sumac"]
  },
  {
    id: "jor-4",
    categoryId: "heritage",
    titleAr: "كفتة بالطحينية أو البندورة",
    titleEn: "Oven-Baked Lamb Kofta (Tahini or Tomato)",
    descriptionAr: "كفتة لحم غنم بالفرن مع بطاطا وصوص طحينة كريمي أو صوص بندورة طازج.",
    descriptionEn: "Hand-kneaded minced lamb kofta baked in the hearth with sliced potatoes, simmered in velvety tahini sauce or fresh tomato sauce.",
    priceSAR: 9.0,
    ingredients: ["لحم غنم مفروم", "شرائح بطاطا", "صوص طحينة كريمي أو بندورة طازجة"],
    ingredientsEn: ["Minced Lamb Kofta", "Sliced Potatoes", "Creamy Tahini or Tomato Sauce"]
  },
  {
    id: "jor-5",
    categoryId: "heritage",
    titleAr: "صينية دجاج بالبطاطا",
    titleEn: "Roast Chicken & Potato Hearth Tray",
    descriptionAr: "قطع دجاج متبلة ومحمرة بالفرن مع شرائح البطاطا والثوم والليمون.",
    descriptionEn: "Seasoned farm chicken quarters roasted to golden brown with russet potato slices, crushed garlic, and fresh lemon jus.",
    priceSAR: 8.5,
    ingredients: ["قطع دجاج متبلة", "شرائح بطاطا", "ثوم وليمون"],
    ingredientsEn: ["Marinated Chicken", "Potato Slices", "Garlic & Lemon"]
  },

  // =========================================================================
  // 04 — من الجمر (5 items)
  // =========================================================================
  {
    id: "grl-1",
    categoryId: "grill",
    titleAr: "مشاوي مشكلة",
    titleEn: "Signature Mixed Grill",
    descriptionAr: "شيش طاووق، كباب لحم، وريش غنم مع بصل مشوي، بيواز وخبز محمر.",
    descriptionEn: "A master platter of chicken shish tawook, minced lamb kebab, and tender lamb chops, served with grilled onions, biwaz salad, and spicy flatbread.",
    priceSAR: 16.0,
    ingredients: ["شيش طاووق", "كباب لحم غنم", "ريش غنم", "بصل مشوي وبيواز وخبز محمر"],
    ingredientsEn: ["Shish Tawook", "Lamb Kebab", "Lamb Chops", "Grilled Onions & Biwaz"],
    dietary: ["مشوي على الفحم"],
    dietaryEn: ["Charcoal Grilled"]
  },
  {
    id: "grl-2",
    categoryId: "grill",
    titleAr: "شيش طاووق",
    titleEn: "Charcoal Chicken Shish Tawook",
    descriptionAr: "صدور دجاج متبلة بالثوم والليمون والبهارات ومشوية على الفحم.",
    descriptionEn: "Tender chicken breast cubes marinated in garlic, lemon juice, and aromatic Levant spices, grilled over live embers.",
    priceSAR: 9.5,
    ingredients: ["صدور دجاج متبلة", "ثوم وليمون", "بهارات مشوية على الفحم"],
    ingredientsEn: ["Marinated Chicken Breast", "Garlic & Lemon", "Levant Spices"]
  },
  {
    id: "grl-3",
    categoryId: "grill",
    titleAr: "كباب لحم",
    titleEn: "Ember-Grilled Baladi Lamb Kebab",
    descriptionAr: "لحم غنم بلدي مفروم مع بصل وبقدونس وبهارات، مشوي على السيخ.",
    descriptionEn: "Minced local baladi lamb kneaded with finely chopped onions, parsley, and mild spices, grilled on skewers over coals.",
    priceSAR: 12.0,
    ingredients: ["لحم غنم بلدي مفروم", "بصل وبقدونس", "بهارات مشكلة"],
    ingredientsEn: ["Minced Baladi Lamb", "Onion & Parsley", "House Spices"]
  },
  {
    id: "grl-4",
    categoryId: "grill",
    titleAr: "ريش غنم",
    titleEn: "Prime Ember-Seared Lamb Chops",
    descriptionAr: "ريش غنم بلدية متبلة ومشوية على الجمر مع خضار مشوية.",
    descriptionEn: "Succulent local lamb cutlets marinated in olive oil and wild herbs, seared across charcoal embers with grilled tomatoes and peppers.",
    priceSAR: 17.0,
    ingredients: ["ريش غنم بلدية", "تتبيلة أعشاب وزيت زيتون", "خضار مشوية"],
    ingredientsEn: ["Baladi Lamb Chops", "Herb Marinade", "Charred Vegetables"],
    dietary: ["خالٍ من الغلوتين"],
    dietaryEn: ["Gluten-Free"]
  },
  {
    id: "grl-5",
    categoryId: "grill",
    titleAr: "دجاج مشوي",
    titleEn: "Charcoal Flame-Roasted Chicken",
    descriptionAr: "نصف دجاجة أو دجاجة متبلة ومشوية على الفحم مع صلصة الثوم.",
    descriptionEn: "Spatchcock farm chicken marinated in garlic and lemon, flame-roasted slowly over charcoal embers, served with creamy toum garlic sauce.",
    priceSAR: 10.0,
    ingredients: ["دجاج متبل", "ليمون وثوم", "مشوي على الفحم مع صلصة ثوم"],
    ingredientsEn: ["Marinated Chicken", "Lemon & Garlic", "Charcoal Roasted with Toum"],
    dietary: ["خالٍ من الغلوتين"],
    dietaryEn: ["Gluten-Free"]
  },

  // =========================================================================
  // 05 — الأطباق الرئيسية (5 items)
  // =========================================================================
  {
    id: "main-1",
    categoryId: "mains",
    titleAr: "ستيك مشوي",
    titleEn: "Prime Grilled Ribeye Steak",
    descriptionAr: "قطعة لحم مشوية، بطاطا وأعشاب موسمية.",
    descriptionEn: "Prime dry-aged beef steak char-broiled to preference, served with roasted fingerling potatoes and seasonal herb butter.",
    priceSAR: 18.0,
    ingredients: ["لحم بقري فاخر", "بطاطا مشوية", "زبدة أعشاب موسمية"],
    ingredientsEn: ["Prime Beef", "Roasted Potatoes", "Seasonal Herb Butter"],
    dietary: ["خالٍ من الغلوتين"],
    dietaryEn: ["Gluten-Free"],
    image: "https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=1200&q=85",
    pairingNote: "صلصة فلفل أسود معتقة",
    pairingNoteEn: "Aged peppercorn reduction"
  },
  {
    id: "main-2",
    categoryId: "mains",
    titleAr: "فيليه سلمون مشوي",
    titleEn: "Seared Atlantic Salmon Fillet",
    descriptionAr: "سلمون مشوي مع ليمون وخضار سوتيه.",
    descriptionEn: "Crisp-skinned Atlantic salmon fillet seared with Meyer lemon, served over pan-glazed baby vegetables.",
    priceSAR: 15.0,
    ingredients: ["فيليه سلمون طازج", "ليمون", "خضار سوتيه موسمية"],
    ingredientsEn: ["Fresh Salmon Fillet", "Meyer Lemon", "Sautéed Baby Vegetables"],
    dietary: ["خالٍ من الغلوتين"],
    dietaryEn: ["Gluten-Free"],
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=85",
    pairingNote: "مستحلب شبت وحمضيات",
    pairingNoteEn: "Citrus dill emulsion"
  },
  {
    id: "main-3",
    categoryId: "mains",
    titleAr: "باستا ألفريدو دجاج",
    titleEn: "Chicken & Mushroom Alfredo",
    descriptionAr: "باستا بصلصة الكريمة، فطر ودجاج مشوي.",
    descriptionEn: "Silky fettuccine ribbons tossed in velvety parmesan cream, sautéed brown mushrooms, and tender grilled chicken breast.",
    priceSAR: 8.5,
    ingredients: ["باستا فيتوتشيني", "صلصة كريمة غنية", "فطر محمر", "دجاج مشوي"],
    ingredientsEn: ["Fettuccine Pasta", "Rich Cream Sauce", "Sautéed Mushrooms", "Grilled Chicken"],
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=1200&q=85",
    pairingNote: "جبن بارميزان ريجيانو مبشور",
    pairingNoteEn: "Aged Parmigiano Reggiano"
  },
  {
    id: "main-4",
    categoryId: "mains",
    titleAr: "باستا بيستو",
    titleEn: "Fresh Basil & Pine Nut Pesto",
    descriptionAr: "صلصة الريحان، صنوبر وجبنة بارميزان.",
    descriptionEn: "Artisanal pasta tossed in freshly pounded sweet basil pesto, toasted pine nuts, and grated aged parmesan.",
    priceSAR: 7.5,
    ingredients: ["باستا طازجة", "ريحان بلدي", "صنوبر محمص", "جبنة بارميزان"],
    ingredientsEn: ["Artisanal Pasta", "Sweet Basil", "Toasted Pine Nuts", "Parmigiano"],
    dietary: ["نباتي"],
    dietaryEn: ["Vegetarian"],
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=85",
    pairingNote: "زيت زيتون كفرسوم بكر ممتاز",
    pairingNoteEn: "Cold-pressed olive oil drizzle"
  },
  {
    id: "main-5",
    categoryId: "mains",
    titleAr: "برغر لحم كلاسيك",
    titleEn: "Prime Classic Wagyu Burger",
    descriptionAr: "برغر لحم بقري، جبنة شيدر، خس، طماطم وبطاطا مقلية.",
    descriptionEn: "Char-grilled prime beef patty, melted aged cheddar, crisp butterhead lettuce, vine tomatoes, served with hand-cut fries.",
    priceSAR: 7.0,
    ingredients: ["لحم بقري مفروم باليد", "شيدر معتق", "خس وطماطم طازجة", "بطاطا مقلية"],
    ingredientsEn: ["Hand-Ground Prime Beef", "Aged Cheddar", "Crisp Lettuce & Tomato", "Hand-Cut Fries"],
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=85",
    pairingNote: "صوص أثير الخاص بالكمأة",
    pairingNoteEn: "House truffle emulsion"
  },

  // =========================================================================
  // 06 — الحلويات (5 items)
  // =========================================================================
  {
    id: "des-1",
    categoryId: "desserts",
    titleAr: "كنافة نابلسية",
    titleEn: "Warm Artisanal Nabulsi Kunafa",
    descriptionAr: "كنافة ناعمة أو خشنة بالجبنة والقطر.",
    descriptionEn: "Fresh sweet pastry baked over gentle heat with authentic molten Nabulsi white cheese, scented with orange blossom syrup and crushed green pistachios.",
    priceSAR: 5.5,
    ingredients: ["عجينة كنافة ذهبية", "جبنة نابلسية بلدية", "قطر ماء الزهر", "فستق حلبي"],
    ingredientsEn: ["Golden Kunafa Threads", "Baladi Nabulsi Cheese", "Orange Blossom Syrup", "Crushed Pistachio"],
    dietary: ["نباتي"],
    dietaryEn: ["Vegetarian"],
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=1200&q=85",
    pairingNote: "شاي أسود محضر على الحطب",
    pairingNoteEn: "Hearth-steeped black tea"
  },
  {
    id: "des-2",
    categoryId: "desserts",
    titleAr: "أم علي",
    titleEn: "Traditional Baked Umm Ali",
    descriptionAr: "رقائق مع حليب، مكسرات وقشطة بالفرن.",
    descriptionEn: "Crisp puff pastry baked in sweetened rich milk with double cream, toasted almonds, pine nuts, and golden raisins.",
    priceSAR: 5.0,
    ingredients: ["رقائق باف باستري", "حليب محلى بالهيل", "قشطة بلدية", "تشكيلة مكسرات محمصة"],
    ingredientsEn: ["Flaky Pastry Layers", "Cardamom Milk", "Clotted Baladi Cream", "Roasted Nuts"],
    dietary: ["نباتي"],
    dietaryEn: ["Vegetarian"],
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=85",
    pairingNote: "رشة قرفة خفيفة مع فستق",
    pairingNoteEn: "Cinnamon dust & pistachio"
  },
  {
    id: "des-3",
    categoryId: "desserts",
    titleAr: "بقلاوة مشكلة",
    titleEn: "Assorted Hand-Rolled Baklava",
    descriptionAr: "تشكيلة بقلاوة محشوة بالفستق والجوز.",
    descriptionEn: "Layers of whisper-thin filo pastry layered with clarified butter, filled with wild pistachios and mountain walnuts, bathed in light floral syrup.",
    priceSAR: 4.5,
    ingredients: ["عجينة فيلو رقيقة", "فستق حلبي وجوز بلدي", "سمن نقي", "قطر معطر"],
    ingredientsEn: ["Filo Pastry Leaves", "Baladi Walnuts & Pistachios", "Pure Clarified Ghee", "Blossom Syrup"],
    dietary: ["نباتي"],
    dietaryEn: ["Vegetarian"],
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=1200&q=85",
    pairingNote: "فنجان قهوة عربية سادة",
    pairingNoteEn: "Unsweetened Arabic coffee"
  },
  {
    id: "des-4",
    categoryId: "desserts",
    titleAr: "مهلبية",
    titleEn: "Blossom Water Muhallabia",
    descriptionAr: "مهلبية حليب مع ماء زهر ومكسرات.",
    descriptionEn: "Silky whole milk pudding delicately infused with Damascus rosewater and mastic, garnished with crushed emerald pistachios and roasted almonds.",
    priceSAR: 4.0,
    ingredients: ["حليب بلدي كامل", "ماء زهر طبيعي", "مستكة نقية", "فستق ولوز"],
    ingredientsEn: ["Baladi Milk", "Damascus Blossom Water", "Natural Mastic", "Crushed Nuts"],
    dietary: ["نباتي", "خالٍ من الغلوتين"],
    dietaryEn: ["Vegetarian", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85",
    pairingNote: "بتلات ورد دمشقي مجفف",
    pairingNoteEn: "Dried Damascus rose petals"
  },
  {
    id: "des-5",
    categoryId: "desserts",
    titleAr: "تشيزكيك",
    titleEn: "Velvet Wild Berry Cheesecake",
    descriptionAr: "تشيزكيك كلاسيك مع صوص توت.",
    descriptionEn: "Creamy baked artisan cheesecake on a buttery graham crust, drizzled with tart wild mountain berry reduction.",
    priceSAR: 5.0,
    ingredients: ["جبنة كريمية فاخرة", "بسكويت الزبدة المحمص", "صلصة التوت البري"],
    ingredientsEn: ["Artisan Cream Cheese", "Butter Biscuit Crust", "Wild Berry Reduction"],
    dietary: ["نباتي"],
    dietaryEn: ["Vegetarian"],
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=1200&q=85",
    pairingNote: "صوص توت بري طازج",
    pairingNoteEn: "Fresh forest berry coulis"
  },

  // =========================================================================
  // 07 — المشروبات (7 items)
  // =========================================================================
  {
    id: "bev-1",
    categoryId: "beverages",
    titleAr: "قهوة عربية بالهيل",
    titleEn: "Heirloom Cardamom Arabic Coffee",
    descriptionAr: "فنجان قهوة عربية تقليدية مع حبوب الهيل.",
    descriptionEn: "Traditional light-roasted green Arabica beans simmered with crushed green cardamom in a brass dallah.",
    priceSAR: 3.0,
    ingredients: ["بن عربي بلدي", "هيل أخضر مطحون باليد", "ماء نقي"],
    ingredientsEn: ["Arabica Beans", "Hand-Crushed Cardamom", "Pure Spring Water"],
    dietary: ["نباتي", "خالٍ من الغلوتين"],
    dietaryEn: ["Vegetarian", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85",
    pairingNote: "تمرة مجدول ممتلئة",
    pairingNoteEn: "Plump Medjool date"
  },
  {
    id: "bev-2",
    categoryId: "beverages",
    titleAr: "شاي بالنعنع",
    titleEn: "Fresh Baladi Mint Ceylon Tea",
    descriptionAr: "شاي أحمر طازج مع أوراق النعناع.",
    descriptionEn: "Robust Ceylon black tea brewed hot with freshly picked Baladi garden mint sprigs in transparent glassware.",
    priceSAR: 2.5,
    ingredients: ["شاي سيلاني أحمر", "نعناع بلدي طازج"],
    ingredientsEn: ["Black Ceylon Leaves", "Fresh Baladi Mint"],
    dietary: ["نباتي", "خالٍ من الغلوتين"],
    dietaryEn: ["Vegetarian", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=85",
    pairingNote: "سكر حسب الرغبة",
    pairingNoteEn: "Sweetened to preference"
  },
  {
    id: "bev-3",
    categoryId: "beverages",
    titleAr: "شاي الميرمية",
    titleEn: "Mountain Sage Infused Black Tea",
    descriptionAr: "شاي محضر مع ميرمية جبلية.",
    descriptionEn: "Aromatic black tea infused with wild dried mountain sage gathered from the hills of Ajloun.",
    priceSAR: 2.5,
    ingredients: ["شاي أسود معتق", "ميرمية جبلية برية"],
    ingredientsEn: ["Aged Black Tea", "Wild Mountain Sage"],
    dietary: ["نباتي", "خالٍ من الغلوتين"],
    dietaryEn: ["Vegetarian", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=1200&q=85",
    pairingNote: "مذاق عشبي دافئ ومريح",
    pairingNoteEn: "Warming herbal depth"
  },
  {
    id: "bev-4",
    categoryId: "beverages",
    titleAr: "ليمون ونعنع",
    titleEn: "Iced Frosted Lemon & Baladi Mint",
    descriptionAr: "عصير ليمون منعش مع نعناع طازج ومجروش ثلج.",
    descriptionEn: "Zesty freshly squeezed lemon juice blended with vibrant garden mint leaves and crushed mountain ice.",
    priceSAR: 3.0,
    ingredients: ["عصير ليمون طازج", "نعناع أخضر", "ثلج مجروش"],
    ingredientsEn: ["Fresh Lemon Juice", "Garden Mint", "Crushed Mountain Ice"],
    dietary: ["نباتي", "خالٍ من الغلوتين"],
    dietaryEn: ["Vegetarian", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1200&q=85",
    pairingNote: "شريحة ليمون خضراء منعشة",
    pairingNoteEn: "Fresh lime wheel"
  },
  {
    id: "bev-5",
    categoryId: "beverages",
    titleAr: "عصير برتقال طازج",
    titleEn: "Daily Cold-Pressed Valley Orange",
    descriptionAr: "عصير برتقال طبيعي معصور يومياً.",
    descriptionEn: "Pure cold-pressed sunshine oranges harvested from the Jordan Valley, naturally sweet with zero added sugar.",
    priceSAR: 3.5,
    ingredients: ["برتقال غور الأردن الطازج 100%"],
    ingredientsEn: ["100% Jordan Valley Oranges"],
    dietary: ["نباتي", "خالٍ من الغلوتين"],
    dietaryEn: ["Vegetarian", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=1200&q=85",
    pairingNote: "عصير طبيعي نقي وخالٍ من الإضافات",
    pairingNoteEn: "Pure untreated juice"
  },
  {
    id: "bev-6",
    categoryId: "beverages",
    titleAr: "عصير رمان",
    titleEn: "Fresh Pressed Wild Ruby Pomegranate",
    descriptionAr: "عصير رمان طبيعي طازج وموسمي.",
    descriptionEn: "Deep ruby seasonal pomegranate juice pressed fresh from high-orchard arils, tart, invigorating, and antioxidant rich.",
    priceSAR: 4.0,
    ingredients: ["رمان بلدي طازج 100%"],
    ingredientsEn: ["100% Baladi Pomegranate"],
    dietary: ["نباتي", "خالٍ من الغلوتين"],
    dietaryEn: ["Vegetarian", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=1200&q=85",
    pairingNote: "مذاق ياقوتي غني ومنعش",
    pairingNoteEn: "Tart ruby freshness"
  },
  {
    id: "bev-7",
    categoryId: "beverages",
    titleAr: "مياه معدنية",
    titleEn: "Chilled Pure Mineral Glass Spring Water",
    descriptionAr: "مياه نقية زجاجية باردة.",
    descriptionEn: "Pristine natural mineral water served chilled in elegant glass presentation.",
    priceSAR: 1.5,
    ingredients: ["مياه ينابيع طبيعية نقية"],
    ingredientsEn: ["Pure Natural Spring Water"],
    dietary: ["نباتي", "خالٍ من الغلوتين"],
    dietaryEn: ["Vegetarian", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=1200&q=85",
    pairingNote: "تقدم مبردة مع شريحة ليمون حسب الرغبة",
    pairingNoteEn: "Served chilled with citrus twist"
  }
];

export const ATMOSPHERE_SPACES: AtmosphereSpace[] = [
  {
    id: "salon-grand",
    titleAr: "الصالون الإمبراطوري الحجري",
    titleEn: "The Monolith Salon",
    subtitleAr: "مساحات رحبة بين كتل حجر معان الطبيعي والظلال الهادئة",
    subtitleEn: "Spacious alcoves carved into raw Jordanian limestone monoliths",
    descriptionAr: "إضاءة مدروسة تنبعث كخيوط الغسق فوق حجر معان الطبيعي، وطاولات واسعة متباعدة تمنح كل ضيف خصوصية مطلقة وتأملاً تاماً في تفاصيل الأمسية.",
    descriptionEn: "Subtle twilight-inspired illumination over raw Ma'an limestone, offering absolute privacy and mindful presence across the evening.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
    tag: "المساحة الرئيسية",
    tagEn: "Main Salon",
    aspect: "panoramic"
  },
  {
    id: "chef-counter",
    titleAr: "منصة مسرح الطهي المباشر",
    titleEn: "The Fire Counter",
    subtitleAr: "ثمانية مقاعد فقط أمام جمر حطب زيتون عجلون ودقة السكين",
    subtitleEn: "Just eight seats facing live Ajloun olive embers and precision craftsmanship",
    descriptionAr: "تواصل مباشر مع طاقم الطهي، حيث تشهد تحضير كل طبق وتتعرف على أسرار المكونات لحظة بلحظة وسط لهب حطب الزيتون العتيق.",
    descriptionEn: "Direct dialogue with the culinary brigade as each dish is forged live across aged Ajloun olive wood embers and hearth flames.",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=85",
    tag: "تفاعل مباشر",
    tagEn: "Live Counter",
    aspect: "portrait"
  },
  {
    id: "private-alcove",
    titleAr: "جناح الخلوة الخاصة",
    titleEn: "The Obsidian Alcove",
    subtitleAr: "عشاء سري مخصص للمناسبات الرفيعة والمحادثات الهادئة",
    subtitleEn: "Secluded dining dedicated to profound private occasions",
    descriptionAr: "مدخل مستقل، قائمة طعام مصممة خصيصاً من خيرات الموسم حسب رغبة الضيف، وعناية شخصية فائقة في هدوء مطلق.",
    descriptionEn: "Independent discrete entrance, bespoke multi-course menus crafted from seasonal terroir per request, and dedicated hospitality in serene quietude.",
    image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=85",
    tag: "خصوصية كاملة",
    tagEn: "Total Privacy",
    aspect: "landscape"
  },
  {
    id: "terrace-whispers",
    titleAr: "شرفة الأفق البانورامي",
    titleEn: "The Balqa Canyon Terrace",
    subtitleAr: "نسيم تلال عَمّان تحت قبة السماء الصافية",
    subtitleEn: "Amman hills breeze under the nocturnal canopy",
    descriptionAr: "إطلالة بانورامية ساحرة على تلال عَمّان القديمة، حيث يتناغم نسيم المساء مع المشروبات الحرفية والنكهات المبتكرة.",
    descriptionEn: "Sweeping panorama over Amman's ancient hills and valley slopes, where evening breezes harmonize with artisanal botanical extractions.",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=85",
    tag: "إطلالة بانورامية",
    tagEn: "Panoramic Vista",
    aspect: "panoramic"
  }
];

export const CHEF_PHILOSOPHY: ChefPhilosophy = {
  quoteAr: "الطهي الحقيقي شغفٌ بأصالة المكونات، واحتفاءٌ بأرض الأردن وخيراتها في كل موسم.",
  quoteEn: "Authentic cooking is a passion for pure ingredients, celebrating the rich land of Jordan and its vibrant seasons.",
  authorAr: "الشيف طارق القاسم",
  authorEn: "Chef Tareq Al-Qasim",
  roleAr: "رئيس الطهاة والشريك المؤسس",
  roleEn: "Executive Chef & Co-Founder",
  statementAr: "نختار يومياً أجود المكونات البلدية الطازجة ولحم الغنم المحلي، لنقدم لكم أطباقاً أصيلة بنكهة معاصرة وطهي مباشر على الحطب والجمر.",
  statementEn: "We daily select prime baladi produce and local lamb, presenting authentic culinary heritage with contemporary craft over live hearth embers.",
  pillars: [
    {
      index: "1",
      titleAr: "مواسم الأرض الأردنية",
      titleEn: "TERROIR SEASONS",
      descriptionAr: "مكونات برية تُجنى مباشرة من مزارع إربد وتلال عجلون وأغوار الأردن صبيحة كل يوم.",
      descriptionEn: "Wild seasonal botanicals harvested directly from Irbid plains, Ajloun groves, and Jordan Valley each morning."
    },
    {
      index: "2",
      titleAr: "جمر حطب الزيتون العتيق",
      titleEn: "AGED OLIVE EMBERS",
      descriptionAr: "نعتمد جذوع زيتون عجلون والطفيلة المعتقة كمصدر حراري حي يمنح الأطباق عمقاً ترابياً أصيلاً.",
      descriptionEn: "Aged olive wood trunks from Ajloun and Tafileh serve as a living thermal hearth infusing profound earthen depth."
    },
    {
      index: "3",
      titleAr: "ملح صوان البحر الميت",
      titleEn: "DEAD SEA MINERAL FLINT",
      descriptionAr: "بلورات ملح خشنة تُستخرج يدوياً من أعماق البحر الميت لتمنح النكهات حداً معدنياً متوازناً.",
      descriptionEn: "Raw mineral crystal salt harvested by hand from the depths of the Dead Sea, delivering balanced flint precision."
    }
  ]
};
