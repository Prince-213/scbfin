import { writable } from "svelte/store";

let CurrentUser = writable({
    name: "",
    slide: true,
    page: 1,
    pin: "",
    image: "",
    savings: '',
    current: ''
  });

  export default CurrentUser