// menu items icons import
import beautyLineIcon from "../assets/ham_menu_icons/beautyLine.svg";
import queueIcon from "../assets/ham_menu_icons/queue.svg";
import coursesIcon from "../assets/ham_menu_icons/courses.svg";
import shopIcon from "../assets/ham_menu_icons/shop.svg";
import blogIcon from "../assets/ham_menu_icons/blog.svg";
import collabrateIcon from "../assets/ham_menu_icons/collabrate.svg";
import aboutIcon from "../assets/ham_menu_icons/about.svg";

// categories icon import
import skinIcon from "../assets/category_icons/skin.svg";
import beautyIcon from "../assets/category_icons/beauty.svg";
import healthIcon from "../assets/category_icons/health.svg";
import hairIcon from "../assets/category_icons/hair.svg";
import modeIcon from "../assets/category_icons/mode.svg";
import perfumeIcon from "../assets/category_icons/perfume.svg";

// article image import
import articleImage from "../assets/images/articleImage.svg";

// products image import
import productOne from "../assets/shop/product-1.svg";
import productTwo from "../assets/shop/product-2.svg";
import productThree from "../assets/shop/product-3.svg";

export const menuItems = [
  {
    icon: beautyLineIcon,
    title: "لاین های زیبایی",
    redirectRoute: "/home",
  },
  {
    icon: queueIcon,
    title: "رزرو نوبت",
    redirectRoute: "/home",
  },
  {
    icon: coursesIcon,
    title: "دوره آموزشی",
    redirectRoute: "/courses",
  },
  {
    icon: shopIcon,
    title: "فروشگاه ما",
    redirectRoute: "/shop",
  },
  {
    icon: blogIcon,
    title: "بلاگ ما",
    redirectRoute: "/blog",
  },
  {
    icon: collabrateIcon,
    title: "فرصت همکاری",
    redirectRoute: "/collaborate",
  },
  {
    icon: aboutIcon,
    title: "درباره ما",
    redirectRoute: "/about",
  },
];

export const announcements = [
  {
    title: "زینب به نظرت پاسخ داده",
    content: "سیستم مشاوره و رزرو نوبت عالی دارن.",
    time: "۲۰ دقیقه پیش",
  },
  {
    title: "زینب به نظرت پاسخ داده",
    content: "سیستم مشاوره و رزرو نوبت عالی دارن.",
    time: "۲۰ دقیقه پیش",
  },
];

export const messages = [
  {
    title: "عنوان پیام ارسالی",
    time: "۲۰ دقیقه پیش",
  },
  {
    title: "عنوان پیام ارسالی",
    time: "۲۰ دقیقه پیش",
  },
  {
    title: "عنوان پیام ارسالی",
    time: "۲۰ دقیقه پیش",
  },
  {
    title: "عنوان پیام ارسالی",
    time: "۲۰ دقیقه پیش",
  },
  {
    title: "عنوان پیام ارسالی",
    time: "۲۰ دقیقه پیش",
  },
];

export const categories = [
  {
    title: "آرایشی",
    icon: beautyIcon,
  },
  {
    title: "مراقبت پوست",
    icon: skinIcon,
  },
  {
    title: "مراقبت مو",
    icon: hairIcon,
  },
  {
    title: "بهداشتی",
    icon: healthIcon,
  },
  {
    title: "عطر و ادکلن",
    icon: perfumeIcon,
  },
  {
    title: "مد و  اکسسوری",
    icon: modeIcon,
  },
];

export const articles = [
  {
    image: articleImage,
    title: "۱۰ راه طبیعی حفظ سلامت پوست بدن در خانه",
    time: "۲۰ دقیقه پیش",
    view: "۲۰۰ بازدید",
  },
  {
    image: articleImage,
    title: "۱۰ راه طبیعی حفظ سلامت پوست بدن در خانه",
    time: "۲۰ دقیقه پیش",
    view: "۲۰۰ بازدید",
  },
  {
    image: articleImage,
    title: "۱۰ راه طبیعی حفظ سلامت پوست بدن در خانه",
    time: "۲۰ دقیقه پیش",
    view: "۲۰۰ بازدید",
  },
  {
    image: articleImage,
    title: "۱۰ راه طبیعی حفظ سلامت پوست بدن در خانه",
    time: "۲۰ دقیقه پیش",
    view: "۲۰۰ بازدید",
  },
  {
    image: articleImage,
    title: "۱۰ راه طبیعی حفظ سلامت پوست بدن در خانه",
    time: "۲۰ دقیقه پیش",
    view: "۲۰۰ بازدید",
  },
];

export const postComments = [
  {
    id: 1,
    user: "مهسا امینی",
    content:
      "ممنون از این مجموعه برای خدمات عالی و کیفیت کاری بسیار بالای آنها.",
    liked: false,
    replies: [],
  },
  {
    id: 2,
    user: "مهسا امینی",
    content:
      "ممنون از این مجموعه برای خدمات عالی و کیفیت کاری بسیار بالای آنها.",
    liked: true,
    replies: [
      {
        user: "شبنم نیکرفتار",
        content: "خیلی ممنون از شما و انتخاب شما",
      },
    ],
  },
  {
    id: 3,
    user: "مهسا امینی",
    content:
      "ممنون از این مجموعه برای خدمات عالی و کیفیت کاری بسیار بالای آنها.",
    liked: false,
    replies: [],
  },
  {
    id: 4,
    user: "مهسا امینی",
    content:
      "ممنون از این مجموعه برای خدمات عالی و کیفیت کاری بسیار بالای آنها.",
    liked: false,
    replies: [],
  },
  {
    id: 5,
    user: "مهسا امینی",
    content:
      "ممنون از این مجموعه برای خدمات عالی و کیفیت کاری بسیار بالای آنها.",
    liked: false,
    replies: [
      {
        user: "شبنم نیکرفتار",
        content: "خیلی ممنون از شما و انتخاب شما",
      },
      {
        user: "شبنم نیکرفتار",
        content: "خیلی ممنون از شما و انتخاب شما",
      },
    ],
  },
  {
    id: 6,
    user: "مهسا امینی",
    content:
      "ممنون از این مجموعه برای خدمات عالی و کیفیت کاری بسیار بالای آنها.",
    liked: false,
    replies: [],
  },
];

export const searchResult = [
  { title: "لاین زیبایی اکستنشن مو و ابرو", category: "مقاله های آموزشی" },
  { title: "لاین زیبایی اکستنشن مو و ابرو", category: "لاین زیبایی" },
  { title: "لاین زیبایی اکستنشن مو و ابرو", category: "پست" },
  { title: "لاین زیبایی اکستنشن مو و ابرو", category: "مقاله های آموزشی" },
  { title: "لاین زیبایی اکستنشن مو و ابرو", category: "لاین زیبایی" },
  { title: "لاین زیبایی اکستنشن مو و ابرو", category: "پست" },
];

export const products = [
  {
    id: 1,
    icon: productOne,
    title: "کرم بدن ضد آفتاب ۱۰۰ میلی گرم",
    price: 2500,
    discount: 15,
  },
  {
    id: 2,
    icon: productTwo,
    title: "کرم بدن ضد آفتاب ۱۰۰ میلی گرم",
    price: 4000,
    discount: 15,
  },
  {
    id: 3,
    icon: productThree,
    title: "کرم بدن ضد آفتاب ۱۰۰ میلی گرم",
    price: 1200,
    discount: 25,
  },
  {
    id: 4,
    icon: productOne,
    title: "کرم بدن ضد آفتاب ۱۰۰ میلی گرم",
    price: 2350,
    discount: 15,
  },
  {
    id: 5,
    icon: productTwo,
    title: "کرم بدن ضد آفتاب ۱۰۰ میلی گرم",
    price: 500,
    discount: 25,
  },
  {
    id: 5,
    icon: productThree,
    title: "کرم بدن ضد آفتاب ۱۰۰ میلی گرم",
    price: 500,
    discount: 25,
  },
];

export const queues = [
  {
    id: 1,
    title: "لاین کاشت ناخن",
    date: "چهارشنبه ۱۸ دی",
    time: "ساعت ۱۱ الی ۱۲",
    status: "doing",
  },
  {
    id: 2,
    title: "لاین کاشت ناخن",
    date: "چهارشنبه ۱۸ دی",
    time: "ساعت ۱۱ الی ۱۲",
    status: "doing",
  },
  {
    id: 3,
    title: "لاین کاشت ناخن",
    date: "چهارشنبه ۱۸ دی",
    time: "ساعت ۱۱ الی ۱۲",
    status: "doing",
  },
  {
    id: 4,
    title: "لاین کاشت ناخن",
    date: "چهارشنبه ۱۸ دی",
    time: "ساعت ۱۱ الی ۱۲",
    price: 400000,
    score: 20,
    status: "done",
  },
  {
    id: 5,
    title: "لاین کاشت ناخن",
    date: "چهارشنبه ۱۸ دی",
    time: "ساعت ۱۱ الی ۱۲",
    price: 400000,
    score: 20,
    status: "done",
  },
  {
    id: 6,
    title: "لاین کاشت ناخن",
    date: "چهارشنبه ۱۸ دی",
    time: "ساعت ۱۱ الی ۱۲",
    price: 400000,
    score: 20,
    status: "done",
  },
  {
    id: 7,
    title: "لاین کاشت ناخن",
    date: "چهارشنبه ۱۸ دی",
    time: "ساعت ۱۱ الی ۱۲",
    price: 400000,
    score: 20,
    status: "done",
  },
  {
    id: 8,
    title: "لاین کاشت ناخن",
    date: "چهارشنبه ۱۸ دی",
    time: "ساعت ۱۱ الی ۱۲",
    price: 400000,
    score: 20,
    status: "done",
  },
  {
    id: 9,
    title: "لاین کاشت ناخن",
    date: "چهارشنبه ۱۸ دی",
    time: "ساعت ۱۱ الی ۱۲",
    status: "reject",
  },
  {
    id: 10,
    title: "لاین کاشت ناخن",
    date: "چهارشنبه ۱۸ دی",
    time: "ساعت ۱۱ الی ۱۲",
    status: "reject",
  },
];

export const addresses = [
  {
    id: 1,
    title: "تهران / خیابان انقلاب / کوی دانشجو / بهار ۲۰ / پلاک ۱۶۵",
    code: 12345678,
    reciever: "شبنم نیکرفتار",
    mobile: "09390624049",
  },
  {
    id: 2,
    title: "تهران / خیابان انقلاب / کوی دانشجو / بهار ۲۰ / پلاک ۱۶۵",
    code: 12345678,
    reciever: "شبنم نیکرفتار",
    mobile: "09390624049",
  },
  {
    id: 3,
    title: "تهران / خیابان انقلاب / کوی دانشجو / بهار ۲۰ / پلاک ۱۶۵",
    code: 12345678,
    reciever: "شبنم نیکرفتار",
    mobile: "09390624049",
  },
];

export const provinces = [
  { value: "Tehran", label: "تهران" },
  { value: "Qazvin", label: "قزوین" },
  { value: "Tabriz", label: "تبریز" },
];

export const courses = [
  {
    id: 1,
    title: "دوره پیشرفته آموزش حرفه‌ای اکستنشن مو و ابرو ",
    status: "doing",
    teacher: "استاد سمانه درخشانی",
    sessions: 3,
    active: true,
  },
  {
    id: 2,
    title: "دوره پیشرفته آموزش حرفه‌ای اکستنشن مو و ابرو ",
    status: "doing",
    teacher: "استاد سمانه درخشانی",
    sessions: 1,
    active: false,
    dateTime: "جلسه دوم - ۲۳ دی ۱۴۰۱",
  },
  {
    id: 3,
    title: "دوره پیشرفته آموزش حرفه‌ای اکستنشن مو و ابرو ",
    status: "doing",
    teacher: "استاد سمانه درخشانی",
    sessions: 7,
    active: false,
    dateTime: "جلسه دهم - ۰۱ بهمن ۱۴۰۱",
  },
  {
    id: 4,
    title: "دوره پیشرفته آموزش حرفه‌ای اکستنشن مو و ابرو ",
    status: "done",
    teacher: "استاد سمانه درخشانی",
    sessions: 3,
  },
  {
    id: 5,
    title: "دوره پیشرفته آموزش حرفه‌ای اکستنشن مو و ابرو ",
    status: "done",
    teacher: "استاد سمانه درخشانی",
    sessions: 3,
  },
  {
    id: 6,
    title: "دوره پیشرفته آموزش حرفه‌ای اکستنشن مو و ابرو ",
    status: "reject",
    teacher: "استاد سمانه درخشانی",
    sessions: 3,
  },
  {
    id: 7,
    title: "دوره پیشرفته آموزش حرفه‌ای اکستنشن مو و ابرو ",
    status: "reject",
    teacher: "استاد سمانه درخشانی",
    sessions: 3,
  },
];

export const userQueue = [
  {
    id: 1,
    title: "لاین کاشت ناخن",
    date: "چهارشنبه ۱۸ دی",
    time: "ساعت ۱۱ الی ۱۲",
    isPayed: true,
  },
  {
    id: 2,
    title: "لاین کاشت ناخن",
    date: "چهارشنبه ۱۸ دی",
    time: "ساعت ۱۱ الی ۱۲",
    isPayed: false,
  },
  {
    id: 3,
    title: "لاین کاشت ناخن",
    date: "چهارشنبه ۱۸ دی",
    time: "ساعت ۱۱ الی ۱۲",
    isPayed: true,
  },
  {
    id: 1,
    title: "لاین کاشت ناخن",
    date: "چهارشنبه ۱۸ دی",
    time: "ساعت ۱۱ الی ۱۲",
    isPayed: true,
  },
  {
    id: 2,
    title: "لاین کاشت ناخن",
    date: "چهارشنبه ۱۸ دی",
    time: "ساعت ۱۱ الی ۱۲",
    isPayed: true,
  },
  {
    id: 4,
    title: "لاین کاشت ناخن",
    date: "چهارشنبه ۱۸ دی",
    time: "ساعت ۱۱ الی ۱۲",
    isPayed: true,
  },
  {
    id: 5,
    title: "لاین کاشت ناخن",
    date: "چهارشنبه ۱۸ دی",
    time: "ساعت ۱۱ الی ۱۲",
    isPayed: false,
  },
  {
    id: 6,
    title: "لاین کاشت ناخن",
    date: "چهارشنبه ۱۸ دی",
    time: "ساعت ۱۱ الی ۱۲",
    isPayed: true,
  },
  {
    id: 7,
    title: "لاین کاشت ناخن",
    date: "چهارشنبه ۱۸ دی",
    time: "ساعت ۱۱ الی ۱۲",
    isPayed: true,
  },
];

export const beautyLines = [
  {
    value: 1,
    title: "لاین اکستنشن مو",
  },
  {
    value: 2,
    title: "لاین هیدرو المنت",
  },
  {
    value: 3,
    title: "لاین هیرکات",
  },
  {
    value: 4,
    title: "لاین رنگ مو",
  },
  {
    value: 5,
    title: "لاین ابرو",
  },
  {
    value: 6,
    title: "لاین موخوره گیری",
  },
];

export const dates = [
  {
    id: 1,
    date: 14,
    title: "امروز",
    today: true,
    closed: false,
  },
  {
    id: 2,
    date: 15,
    title: "ی ش",
    today: false,
    closed: false,
  },
  {
    id: 3,
    date: 16,
    title: "تعطیل",
    today: false,
    closed: true,
  },
  {
    id: 4,
    date: 17,
    title: "س ش",
    today: false,
    closed: false,
  },
  {
    id: 5,
    date: 18,
    title: "چ ش",
    today: false,
    closed: false,
  },
  {
    id: 6,
    date: 19,
    title: "پ ش",
    today: false,
    closed: false,
  },
  {
    id: 7,
    date: 20,
    title: "ج",
    today: false,
    closed: false,
  },
];

export const times = [
  {
    id: 1,
    from: "۰۹:۱۵",
    to: "۱۰:۱۵",
  },
  {
    id: 2,
    from: "۱۱",
    to: "۱۲",
  },
  {
    id: 3,
    from: "۱۲",
    to: "۱۳",
  },
  {
    id: 4,
    from: "۱۳",
    to: "۱۴",
  },
  {
    id: 5,
    from: "۱۴",
    to: "۱۵",
  },
  {
    id: 6,
    from: "۱۵",
    to: "۱۶",
  },
  {
    id: 7,
    from: "۱۶",
    to: "۱۷",
  },
];

export const factorQueues = [
  {
    id: 1,
    type: "آرایشی",
    beautyLine: "اکستنشن مو و ابرو",
    name: "سمانه درخشانی",
    date: "سه شنبه ۲۰ بهمن ۱۴۰۱",
    time: "۰۹:۳۰  تا ۱۱:۱۰",
    price: 250000,
    discount: 0,
  },
  {
    id: 2,
    type: "آرایشی",
    beautyLine: "اکستنشن مو و ابرو",
    name: "سمانه درخشانی",
    date: "سه شنبه ۲۰ بهمن ۱۴۰۱",
    time: "۰۹:۳۰  تا ۱۱:۱۰",
    price: 250000,
    discount: 0,
  },
  {
    id: 3,
    type: "آرایشی",
    beautyLine: "اکستنشن مو و ابرو",
    name: "سمانه درخشانی",
    date: "سه شنبه ۲۰ بهمن ۱۴۰۱",
    time: "۰۹:۳۰  تا ۱۱:۱۰",
    price: 250000,
    discount: 0,
  },
  {
    id: 4,
    type: "آرایشی",
    beautyLine: "اکستنشن مو و ابرو",
    name: "سمانه درخشانی",
    date: "سه شنبه ۲۰ بهمن ۱۴۰۱",
    time: "۰۹:۳۰  تا ۱۱:۱۰",
    price: 250000,
    discount: 0,
  },
];
