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
  },
  {
    icon: queueIcon,
    title: "رزرو نوبت",
  },
  {
    icon: coursesIcon,
    title: "دوره آموزشی",
  },
  {
    icon: shopIcon,
    title: "فروشگاه ما",
  },
  {
    icon: blogIcon,
    title: "بلاگ ما",
  },
  {
    icon: collabrateIcon,
    title: "فرصت همکاری",
  },
  {
    icon: aboutIcon,
    title: "درباره ما",
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
