import { writable } from "svelte/store";

let User = writable([
  {
    index: 1,
    name: "Yuvraj Khanna",
    fullname: "Yuvraj Khanna",
    password: "rajay@mango!1",
    slide: true,
    page: 1,
    pin: "1980",
    image: "https://i.postimg.cc/mrfdqLv4/image.jpg",
    savings: "141535",
    current: "727432",
    history: [
      {
        id: 1,
        icon: true,
        detail: "Transferred funds $500 to *****32",
        time: "7:30 AM",
      },
      {
        id: 2,
        icon: true,
        detail: "Transferred funds $1310 to *****58",
        time: "11:54 AM",
      },
      {
        id: 3,
        icon: false,
        detail: "Received funds $5000 to *****09",
        time: "2:30 PM",
      },
      {
        id: 4,
        icon: false,
        detail: "Received $5320.40 to *****76",
        time: "6:43 PM",
      },
      {
        id: 5,
        icon: true,
        detail: "Transferred $300 to *****25",
        time: "8:06 PM",
      },
    ],
  },

  {
    index: 2,
    name: "Sandra Bullock",
    fullname: "Sandra Annette Bullock",
    password: "san@andy@123",
    slide: true,
    page: 1,
    pin: "9765",
    image: "https://i.ibb.co/VDTf02y/sandra-bullock.jpg",
    savings: "150367",
    current: "50,780,456",
    history: [
      {
        id: 1,
        icon: false,
        detail: "Received funds $500 to *****32",
        time: "7:30 AM",
      },
      {
        id: 2,
        icon: false,
        detail: "Received funds $500,000 to *****58",
        time: "11:54 AM",
      },
      {
        id: 3,
        icon: false,
        detail: "Received funds $100,000 to *****09",
        time: "2:30 PM",
      },
      {
        id: 4,
        icon: false,
        detail: "Received $1,000,000.40 to *****76",
        time: "6:43 PM",
      },
      {
        id: 5,
        icon: false,
        detail: "Transferred $2,000,000 to *****25",
        time: "8:06 PM",
      },
      {
        id: 6,
        icon: false,
        detail: "Transferred $800,000 to *****20",
        time: "07:00 AM",
      },
      {
        id: 5,
        icon: false,
        detail: "Transferred $100,000 to *****25",
        time: "04:46 AM",
      },
      {
        id: 5,
        icon: false,
        detail: "Transferred $50,000 to *****25",
        time: "03:06 PM",
      },
      {
        id: 5,
        icon: false,
        detail: "Transferred $100,000 to *****25",
        time: "12:06 AM",
      },
      {
        id: 5,
        icon: false,
        detail: "Transferred $900,000 to *****05",
        time: "09:06 PM",
      },
    ],
  },
]);

export default User;
