export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  cover: string;
  priceEGP: number;
  priceUSD: number;
  category: string;
  categorySlug: string;
  additionalCategories?: string[];
  isBestSeller?: boolean;
  isFeatured?: boolean;
  rating: number;
  pages: number;
  year: number;
}

export interface Category {
  slug: string;
  name: string;
}

export const categories: Category[] = [
  { slug: "best-sellers", name: "الأكثر مبيعًا" },
  { slug: "crime-action", name: "جريمة وأكشن" },
  { slug: "sci-fi-history", name: "خيال علمي وتاريخي" },
  { slug: "mystery-horror", name: "غموض ورعب نفسي" },
  { slug: "drama-romance", name: "دراما ورومانسي" },
  { slug: "self-help-psychology", name: "تنمية ذاتية وعلم النفس" },
  { slug: "religious", name: "ديني" },
  { slug: "palestine", name: "ركن فلسطين.. بوابة السماء" },
];

export const books: Book[] = [
  {
    id: "1",
    title: "امرأة ڤولاذية",
    author: "نهار أحمد",
    description: "تدور أحداث الرواية عن فتاة خلقت بقوة خارقة للطبيعة؛ مثل السحر، ولكن حتى تستطيع السيطرة على قواها الداخلية، كان عليها الإنضمام لأكبر فريق ملاكمة عالمي، لتكتشف أن المدربة الخاصة بها كانت صديقة والدتها المقربة، وأنها تمتلك نفس قوة الفتاة ووالدتها، وحتى تستطيع فعل ذلك؛ كان عليها التنقل بالزمن؛ ما بين الماضي والمستقبل، وأثناء عودتها بالماضي شاهدت مقتل والدتها، ولتغيير هذا العالم، عن طريق الإختيار ما بين جانب الخير والشر، فماذا اختارت؟",
    cover: "https://i.ibb.co/Xff2Mdbs/Whats-App-Image-2026-04-10-at-6-57-31-PM.jpg",
    priceEGP: 150,
    priceUSD: 10,
    category: "جريمة وأكشن",
    categorySlug: "crime-action",
    additionalCategories: ["sci-fi-history"],
    isBestSeller: true,
    isFeatured: true,
    rating: 4.7,
    pages: 150,
    year: 2025,
  },
  {
    id: "2",
    title: "الماركتير",
    author: "د. الحسن العزاوي",
    description: "هل سألت نفسك يوماً لماذا يدفع البعض أضعافاً مضاعفة في منتج قد يقوم بنفس الوظيفة؟ لماذا نشتري قهوة بعشرة جنيهات وأخرى بمائة… ساعة عادية وساعة فاخرة… خدمة متاحة وأخرى غالية ومع ذلك نُقبل عليها بشغف؟! هذا الكتاب ليس عن التسويق كإعلانات وشعارات بل عن القيمة: كيف تُصنع كيف تُقدَّم وكيف تُقاس؟ ستجد بين صفحاته قصصاً واقعية أفكاراً عملية وآراء لخبراء وفلاسفة تكشف لك أن العميل لا يشتري المنتج… بل يشتري التجربة القصة والمعنى.",
    cover: "https://i.ibb.co/tTLpwCzQ/Whats-App-Image-2026-04-10-at-6-37-36-PM.jpg",
    priceEGP: 250,
    priceUSD: 10,
    category: "تنمية ذاتية وعلم النفس",
    categorySlug: "self-help-psychology",
    isBestSeller: true,
    isFeatured: true,
    rating: 4.8,
    pages: 342,
    year: 2025,
  },
  {
    id: "3",
    title: "خطوات طريق السعادة",
    author: "لينا عبدالخالق",
    description: "هل تبحث عن السعادة؟ كلنا، وبدون أي أستثناء، نبحث عن السعادة، فهي حق مشروع لكل انسان وهي من أهم أهدافه الرئيسية لتمنحه الشعور بالسرور والارتياح والرضا وتساعده على مواجهة صعوبات وضغوطات الحياة اليومية. يقدم هذا الكتاب خطوات فعالة ومجربة يمكننا بإتباعها أن نصبح أكثر سعادة ولتحسين نوعية الحياة التي تؤثر إيجابا على مختلف جوانب حياة الانسان الشخصية والعملية ورفع انتاجيته والإبداع.",
    cover: "https://i.ibb.co/4wj6bxqt/image.png",
    priceEGP: 200,
    priceUSD: 8,
    category: "تنمية ذاتية وعلم النفس",
    categorySlug: "self-help-psychology",
    isBestSeller: true,
    isFeatured: true,
    rating: 4.6,
    pages: 144,
    year: 2025,
  },
  {
    id: "4",
    title: "كلهم أنا",
    author: "ماجد مدحت",
    description: "\"كلهم أنا\" .. مش مجرد صفحات، دا مراية. مراية لكل واحد فينا جواه أكتر من حد.. حد بيضحك وهو موجوع، وحد بيكمل وهو مكسور، وحد لسه بيدور على نفسه وسط الزحمة. مجموعة قصصية بتشدك من أول قصة، وتعيشك مشاعر مختلفة.. خسارة، حب، فقد، صدفة، ألم، وأمل خافت بين السطور.",
    cover: "https://i.ibb.co/spTD1gks/Whats-App-Image-2026-04-10-at-5-59-34-PM.jpg",
    priceEGP: 150,
    priceUSD: 7,
    category: "دراما ورومانسي",
    categorySlug: "drama-romance",
    isBestSeller: true,
    isFeatured: true,
    rating: 4.5,
    pages: 168,
    year: 2025,
  },
  {
    id: "5",
    title: "الشقة المهجورة",
    author: "كمال الهواري",
    description: "تدور أحداث الرواية داخل شقة غامضة في حي شعبي بالقاهرة، قريبة من المقابر، حيث تبدأ أصوات وظلال وأسرار قديمة في الظهور، لتقود الشخصيات — والقراء — إلى مواجهة عالم خفي يتقاطع مع الواقع دون أن يُرى. الرواية تقدم معالجة سردية لعالم الجن وتأثيره على البشر في إطار درامي مشوق، وتطرح تساؤلات حول الحدود الفاصلة بين الوهم والحقيقة، والخوف والإيمان.",
    cover: "https://i.ibb.co/0jtk4Ddd/image.png",
    priceEGP: 150,
    priceUSD: 7,
    category: "غموض ورعب نفسي",
    categorySlug: "mystery-horror",
    isBestSeller: true,
    rating: 4.6,
    pages: 182,
    year: 2025,
  },
  {
    id: "6",
    title: "مغامرات أرجينت",
    author: "كيرلس أشرف",
    description: "رواية مغامرات وتشويق تنقلك لعالم مختلف تماما عن ما عاهدته.. فيها الفضول كان شرارة كل شيء، وكان أيضًا اللعنة التي بدأت كل هذا. جو وليلي صديقان يقودهما الفضول إلى مواجهة كائناتٍ قديمة؛ يكتشفان أن الهروب بلا جدوى وأنهما محاصران. مفاجآت في انتظارهم عند كل منعطف… ولن يكون هناك وقتٌ للراحة.",
    cover: "https://i.ibb.co/JwKRL8St/image.png",
    priceEGP: 120,
    priceUSD: 7,
    category: "جريمة وأكشن",
    categorySlug: "crime-action",
    additionalCategories: ["sci-fi-history", "drama-romance"],
    isBestSeller: true,
    rating: 4.5,
    pages: 141,
    year: 2025,
  },
  {
    id: "7",
    title: "الكتاب الأسود",
    author: "أحمد منصور",
    description: "الكتاب الأسود ليس مجرد رواية، بل لعنة تبدأ منذ الصفحة الأولى، تشعر معها أن الكلمات كُتبت خصيصًا لك. رحلة تقودك للذهاب بقلبٍ والعودة بآخر، بعد أن يتغير شيء داخلك إلى الأبد. هي رواية الفضول؛ ذلك الدافع الذي يجرك للقراءة رغم الخوف والغموض. لعبة نفسية عميقة تجبرك على مواجهة مخاوفك ورغباتك الخفية.",
    cover: "https://i.ibb.co/DP5qkxwj/image.png",
    priceEGP: 150,
    priceUSD: 7,
    category: "غموض ورعب نفسي",
    categorySlug: "mystery-horror",
    isBestSeller: true,
    rating: 4.7,
    pages: 188,
    year: 2025,
  },
  {
    id: "8",
    title: "حكاية شمسية",
    author: "حاتم حيدر",
    description: "في المصيف، الشمسية مش بتضلل على الناس بس، دي شاهدة عليهم و بتحفظ أسرارهم، وتخزن حكاياتهم في قماشها، وتُسلّمها للموج وياخدها البحر بعيدً، عشان يحكيها لناس على شواطئ وبلاجات تانية سواء في الساحل القديم او الجديد. وكل شمسية ليها حكاية وبتختلف الحكايات من شاطيء للتاني.",
    cover: "https://i.ibb.co/RG3mZYCm/image.png",
    priceEGP: 120,
    priceUSD: 7,
    category: "دراما ورومانسي",
    categorySlug: "drama-romance",
    isBestSeller: true,
    rating: 4.4,
    pages: 134,
    year: 2025,
  },
  {
    id: "9",
    title: "القلوب المليانة",
    author: "د. منال شرف الدين",
    description: "يضم العمل خمس عشرة قصة مستوحاة من الواقع الإنساني والاجتماعي لنساء عانين من السمنة المفرطة، حيث يتجاوز الكتاب البعد الصحي ليغوص في الطبقات الأعمق من التجربة النسوية، كاشفًا ما وراء الكيلوجرامات الزائدة من مشاعر وأوجاع وصراعات داخلية. ترصد القصص علاقة الجسد بالروح، والوزن بالوجدان.",
    cover: "https://i.ibb.co/B238tqjR/image.png",
    priceEGP: 100,
    priceUSD: 7,
    category: "دراما ورومانسي",
    categorySlug: "drama-romance",
    isBestSeller: true,
    rating: 4.5,
    pages: 100,
    year: 2025,
  },
];

export function getBooksByCategory(slug: string): Book[] {
  if (slug === "best-sellers") return books.filter((b) => b.isBestSeller);
  return books.filter(
    (b) => b.categorySlug === slug || b.additionalCategories?.includes(slug)
  );
}

export function getFeaturedBooks(): Book[] {
  return books.filter((b) => b.isFeatured);
}

export function getBestSellers(): Book[] {
  return books.filter((b) => b.isBestSeller);
}

export function getBookById(id: string): Book | undefined {
  return books.find((b) => b.id === id);
}

export function searchBooks(query: string): Book[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return books.filter(
    (b) => b.title.includes(q) || b.author.includes(q)
  );
}
