import { writable } from "svelte/store";

let User = writable([
  {
    index: 1,
    name: "Yuvraj Khanna",
    password: "rajay@mango!1",
    slide: true,
    page: 1,
    pin: "1980",
    image: 'https://i.postimg.cc/mrfdqLv4/image.jpg',
    savings: '141535',
    current: '727432'
  },

  {
    index: 2,
    name: "Sandra Bullock",
    password: "san@andy@123",
    slide: true,
    page: 1,
    pin: "9765",
    image: "https://i.ibb.co/VDTf02y/sandra-bullock.jpg",
    savings: '150367',
    current: '820456'
  },
]);



export default User;
