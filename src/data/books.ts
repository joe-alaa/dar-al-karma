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
  isBestSeller?: boolean;
  isFeatured?: boolean;
  rating: number;
  pages: number;
  year: number;
}

export interface Category {
  slug: string;
  name: string;
  icon: string;
}

export const categories: Category[] = [
  { slug: "best-sellers", name: "الأكثر مبيعًا", icon: "🔥" },
  { slug: "action", name: "أكشن", icon: "⚡" },
  { slug: "crime", name: "جريمة", icon: "🔍" },
  { slug: "romance", name: "رومانسي", icon: "❤️" },
  { slug: "history", name: "تاريخ", icon: "📜" },
  { slug: "philosophy", name: "فلسفة", icon: "💭" },
  { slug: "children", name: "أطفال", icon: "🧒" },
  { slug: "literature", name: "أدب", icon: "📖" },
];

export const books: Book[] = [
  {
    id: "1",
    title: "مئة عام من العزلة",
    author: "غابرييل غارسيا ماركيز",
    description: "رواية تحكي قصة عائلة بوينديا عبر سبعة أجيال في قرية ماكوندو الخيالية. تمزج بين الواقعية السحرية والتاريخ، وتستكشف موضوعات العزلة والحب والقدر.",
    cover: "",
    priceEGP: 180,
    priceUSD: 12,
    category: "أدب",
    categorySlug: "literature",
    isBestSeller: true,
    isFeatured: true,
    rating: 4.8,
    pages: 417,
    year: 2020,
  },
  {
    id: "2",
    title: "الخيميائي",
    author: "باولو كويلو",
    description: "رحلة الراعي الأندلسي سانتياغو بحثاً عن كنز مدفون عند أهرامات مصر. رواية فلسفية عن اتباع الأحلام والاستماع لصوت القلب.",
    cover: "",
    priceEGP: 150,
    priceUSD: 10,
    category: "فلسفة",
    categorySlug: "philosophy",
    isBestSeller: true,
    isFeatured: true,
    rating: 4.6,
    pages: 198,
    year: 2019,
  },
  {
    id: "3",
    title: "عزازيل",
    author: "يوسف زيدان",
    description: "رواية تاريخية تدور أحداثها في القرن الخامس الميلادي، تتناول الصراعات الدينية والفلسفية في مصر القديمة من خلال قصة الراهب هيبا.",
    cover: "",
    priceEGP: 200,
    priceUSD: 14,
    category: "تاريخ",
    categorySlug: "history",
    isBestSeller: true,
    isFeatured: true,
    rating: 4.7,
    pages: 312,
    year: 2021,
  },
  {
    id: "4",
    title: "في قلبي أنثى عبرية",
    author: "خولة حمدي",
    description: "رواية رومانسية تدور في أجواء تونس وإسرائيل، تتناول قصة حب مستحيلة بين عالمين مختلفين وتطرح أسئلة عميقة عن الهوية والانتماء.",
    cover: "",
    priceEGP: 160,
    priceUSD: 11,
    category: "رومانسي",
    categorySlug: "romance",
    isFeatured: true,
    rating: 4.4,
    pages: 384,
    year: 2018,
  },
  {
    id: "5",
    title: "اللص والكلاب",
    author: "نجيب محفوظ",
    description: "رواية تتبع سعيد مهران، اللص الذي يخرج من السجن ليجد أن العالم قد تغير. رواية عن الخيانة والانتقام والبحث عن العدالة.",
    cover: "",
    priceEGP: 120,
    priceUSD: 8,
    category: "جريمة",
    categorySlug: "crime",
    rating: 4.5,
    pages: 158,
    year: 2017,
  },
  {
    id: "6",
    title: "كليلة ودمنة",
    author: "ابن المقفع",
    description: "مجموعة من الحكايات على ألسنة الحيوانات، تقدم دروساً في الحكمة والسياسة والأخلاق بأسلوب أدبي رفيع.",
    cover: "",
    priceEGP: 100,
    priceUSD: 7,
    category: "أطفال",
    categorySlug: "children",
    rating: 4.9,
    pages: 280,
    year: 2022,
  },
  {
    id: "7",
    title: "رجال في الشمس",
    author: "غسان كنفاني",
    description: "رواية قصيرة تحكي قصة ثلاثة فلسطينيين يحاولون التسلل إلى الكويت بحثاً عن حياة أفضل، في رحلة مأساوية عبر الصحراء.",
    cover: "",
    priceEGP: 90,
    priceUSD: 6,
    category: "أدب",
    categorySlug: "literature",
    isBestSeller: true,
    rating: 4.7,
    pages: 128,
    year: 2020,
  },
  {
    id: "8",
    title: "ثلاثية غرناطة",
    author: "رضوى عاشور",
    description: "ملحمة تاريخية تروي قصة سقوط غرناطة ومعاناة المسلمين واليهود في الأندلس تحت حكم الإسبان.",
    cover: "",
    priceEGP: 250,
    priceUSD: 16,
    category: "تاريخ",
    categorySlug: "history",
    isFeatured: true,
    rating: 4.8,
    pages: 540,
    year: 2019,
  },
  {
    id: "9",
    title: "الأسود يليق بك",
    author: "أحلام مستغانمي",
    description: "رواية رومانسية معاصرة تدور في عالم الموضة والفن، تتناول علاقة معقدة بين امرأة وذكريات حبها الأول.",
    cover: "",
    priceEGP: 170,
    priceUSD: 11,
    category: "رومانسي",
    categorySlug: "romance",
    rating: 4.3,
    pages: 304,
    year: 2021,
  },
  {
    id: "10",
    title: "هاري بوتر وحجر الفيلسوف",
    author: "ج. ك. رولينغ",
    description: "الجزء الأول من سلسلة هاري بوتر، يكتشف فيه الفتى اليتيم أنه ساحر ويبدأ مغامراته في مدرسة هوغوورتس للسحر.",
    cover: "",
    priceEGP: 140,
    priceUSD: 9,
    category: "أكشن",
    categorySlug: "action",
    isBestSeller: true,
    rating: 4.9,
    pages: 320,
    year: 2022,
  },
  {
    id: "11",
    title: "العقد الاجتماعي",
    author: "جان جاك روسو",
    description: "كتاب فلسفي أساسي يناقش العلاقة بين الفرد والدولة ومفهوم السيادة الشعبية والحرية المدنية.",
    cover: "",
    priceEGP: 130,
    priceUSD: 9,
    category: "فلسفة",
    categorySlug: "philosophy",
    rating: 4.5,
    pages: 220,
    year: 2020,
  },
  {
    id: "12",
    title: "ذاكرة الجسد",
    author: "أحلام مستغانمي",
    description: "رواية تحكي قصة فنان جزائري يعود إلى الجزائر بعد غياب طويل ليجد نفسه أمام ذكريات لا تُنسى وحب قديم.",
    cover: "",
    priceEGP: 190,
    priceUSD: 13,
    category: "رومانسي",
    categorySlug: "romance",
    isBestSeller: true,
    rating: 4.6,
    pages: 410,
    year: 2018,
  },
];

export function getBooksByCategory(slug: string): Book[] {
  if (slug === "best-sellers") return books.filter((b) => b.isBestSeller);
  return books.filter((b) => b.categorySlug === slug);
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
