import types from "./types";

const initialState = {
  videosList:  [
    {
    "id": 6689,
    "duration": 76,
    "age_range": 7,
    "main_poster_url": "https://gateway.filmgardi.com/sites/default/files/images/backgrounds/1399/Snow%20White%20and%20the%20Seven%20Dwarfs-3.jpg",
    "color": "#252f75",
    "title": "سفید برفی و هفت کوتوله",
    "fa_title": "سفید برفی و هفت کوتوله"
    },
    {
    "id": 6069,
    "duration": 97,
    "age_range": 7,
    "main_poster_url": "https://gateway.filmgardi.com/sites/default/files/images/backgrounds/1399/Ejen-Ali-The-Movie-3.jpg",
    "color": "#324699",
    "title": "مامور علی",
    "fa_title": "مامور علی"
    },
    {
    "id": 6068,
    "duration": 80,
    "age_range": 7,
    "main_poster_url": "https://gateway.filmgardi.com/sites/default/files/images/backgrounds/1399/The-Fox-and-the-Hound-3.jpg",
    "color": "#995e32",
    "title": "روباه و سگ شکارچی",
    "fa_title": "روباه و سگ شکارچی"
    },
    {
    "id": 6067,
    "duration": 84,
    "age_range": 7,
    "main_poster_url": "https://gateway.filmgardi.com/sites/default/files/images/backgrounds/1399/Angry%20Birds-3_1.jpg",
    "color": "#ff000a",
    "title": "پرندگان خشمگین",
    "fa_title": "پرندگان خشمگین"
    },
    {
    "id": 6046,
    "duration": 80,
    "age_range": 7,
    "main_poster_url": "https://gateway.filmgardi.com/sites/default/files/images/backgrounds/1399/Lapitch-The-Little-Shoemaker-3.jpg",
    "color": "#985200",
    "title": "لاپیچ کفاش کوچک",
    "fa_title": "لاپیچ کفاش کوچک"
    },
    {
    "id": 6042,
    "duration": 87,
    "age_range": 7,
    "main_poster_url": "https://gateway.filmgardi.com/sites/default/files/images/backgrounds/1400/Daisy-Quokka.jpg",
    "color": "#996032",
    "title": "دیزی کوئوکا: ترسناک ترین حیوان جهان",
    "fa_title": "دیزی کوئوکا: ترسناک ترین حیوان جهان"
    },
    {
    "id": 6026,
    "duration": 78,
    "age_range": 7,
    "main_poster_url": "https://gateway.filmgardi.com/sites/default/files/images/backgrounds/1399/Asterix%20and%20Obelix%20Mansion%20of%20the%20Gods-3.jpg",
    "color": "#ffd200",
    "title": "آستریکس و عمارت فرمانروایان",
    "fa_title": "آستریکس و عمارت فرمانروایان"
    },
    {
    "id": 6025,
    "duration": 99,
    "age_range": 7,
    "main_poster_url": "https://gateway.filmgardi.com/sites/default/files/images/backgrounds/1400/Ron%27s-Gone-Wrong-3.jpg",
    "color": "#327099",
    "title": "ران اشتباه رفته",
    "fa_title": "ران اشتباه رفته"
    },
    {
    "id": 6024,
    "duration": 102,
    "age_range": 7,
    "main_poster_url": "https://gateway.filmgardi.com/sites/default/files/images/backgrounds/1399/Whisper%20of%20the%20Heart-3.jpg",
    "color": "#01131a",
    "title": "نجوای درون",
    "fa_title": "نجوای درون"
    },
    {
    "id": 6022,
    "duration": 78,
    "age_range": 7,
    "main_poster_url": "https://gateway.filmgardi.com/sites/default/files/images/backgrounds/1399/The-Angry-Birds-Movie-2-3_0.jpg",
    "color": "#323299",
    "title": "پرندگان خشمگین 2",
    "fa_title": "پرندگان خشمگین 2"
    },
    {
    "id": 6021,
    "duration": 65,
    "age_range": 7,
    "main_poster_url": "https://gateway.filmgardi.com/sites/default/files/images/backgrounds/1399/Fun-and-Fancy-Free-3.jpg",
    "color": "#1b92c9",
    "title": "داستان های شاد",
    "fa_title": "داستان های شاد"
    },
    {
    "id": 6019,
    "duration": 85,
    "age_range": 7,
    "main_poster_url": "https://gateway.filmgardi.com/sites/default/files/images/backgrounds/1399/Smurfs-The-Lost-Village-3.jpg",
    "color": "#070799",
    "title": "اسمورف ها: دهکده گمشده",
    "fa_title": "اسمورف ها: دهکده گمشده"
    },
    {
    "id": 6018,
    "duration": 74,
    "age_range": 13,
    "main_poster_url": "https://gateway.filmgardi.com/sites/default/files/images/backgrounds/1400/Bionicle-Mask-of-Light-3.jpg",
    "color": "#994432",
    "title": "بیونیکل 1: ماسکی از نور",
    "fa_title": "بیونیکل 1: ماسکی از نور"
    },
    {
    "id": 6016,
    "duration": 88,
    "age_range": 7,
    "main_poster_url": "https://gateway.filmgardi.com/sites/default/files/images/backgrounds/1400/Flora-%26-Ulysses1.jpg",
    "color": "#327699",
    "title": "فلورا و یولسیس",
    "fa_title": "فلورا و یولسیس"
    },
    {
    "id": 6014,
    "duration": 91,
    "age_range": 7,
    "main_poster_url": "https://gateway.filmgardi.com/sites/default/files/images/backgrounds/1399/Elephant%20Kingdom-3.jpg",
    "color": "#675983",
    "title": "شاهزاده فیل",
    "fa_title": "شاهزاده فیل"
    },
    {
    "id": 6009,
    "duration": 106,
    "age_range": 7,
    "main_poster_url": "https://gateway.filmgardi.com/sites/default/files/images/backgrounds/1399/Stormy-Night-3.jpg",
    "color": "#4b9fd1",
    "title": "شب طوفانی",
    "fa_title": "شب طوفانی"
    },
    {
    "id": 6007,
    "duration": 93,
    "age_range": 7,
    "main_poster_url": "https://gateway.filmgardi.com/sites/default/files/images/backgrounds/1399/Abominable-3.jpg",
    "color": "#553872",
    "title": "نفرت انگیز",
    "fa_title": "نفرت انگیز"
    },
    {
    "id": 6006,
    "duration": 43,
    "age_range": 7,
    "main_poster_url": "https://gateway.filmgardi.com/sites/default/files/images/backgrounds/1399/The-Lion-Guard-Return-of-the-Roar-3_15.jpg",
    "color": "#c33c29",
    "title": "شیرهای نگهبان: غرش دوباره",
    "fa_title": "شیرهای نگهبان: غرش دوباره"
    },
    {
    "id": 6004,
    "duration": 58,
    "age_range": 7,
    "main_poster_url": "https://gateway.filmgardi.com/sites/default/files/images/backgrounds/1399/The%20Lion%20King%203-3.jpg",
    "color": "#523c2a",
    "title": "شیر شاه 3",
    "fa_title": "شیر شاه 3"
    },
    {
    "id": 6003,
    "duration": 100,
    "age_range": 7,
    "main_poster_url": "https://gateway.filmgardi.com/sites/default/files/images/backgrounds/1399/Paddington%202-3.jpg",
    "color": "#f84611",
    "title": "پدینگتون 2",
    "fa_title": "پدینگتون 2"
    },
    {
    "id": 6002,
    "duration": 87,
    "age_range": 7,
    "main_poster_url": "https://gateway.filmgardi.com/sites/default/files/images/backgrounds/1399/Toy-Story-3-3.jpg",
    "color": "#c71c21",
    "title": "داستان اسباب بازی 3",
    "fa_title": "داستان اسباب بازی 3"
    },
    {
    "id": 6001,
    "duration": 89,
    "age_range": 7,
    "main_poster_url": "https://gateway.filmgardi.com/sites/default/files/images/backgrounds/1399/01_17.jpg",
    "color": "#329987",
    "title": "درخت آرزوها",
    "fa_title": "درخت آرزوها"
    },
    {
    "id": 6000,
    "duration": 96,
    "age_range": 7,
    "main_poster_url": "https://gateway.filmgardi.com/sites/default/files/images/backgrounds/1400/Finding-Dory-3.jpg",
    "color": "#993832",
    "title": "در جستجوی دوری",
    "fa_title": "در جستجوی دوری"
    },
    {
    "id": 5999,
    "duration": 95,
    "age_range": 7,
    "main_poster_url": "https://gateway.filmgardi.com/sites/default/files/images/backgrounds/1399/The-One-and-Only-Ivan-3.jpg",
    "color": "#78a321",
    "title": "ایوان منحصر به فرد",
    "fa_title": "ایوان منحصر به فرد"
    },
   
    ],
  page: 1,
  totalPage: 1,
};
export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_VIDEOS_LIST:
      return { ...state, videosList: action.data };
    default:
      return state;
  }
}
