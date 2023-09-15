import { writable } from "svelte/store";

let User = writable({
    name: "Yuvraj Khanna",
    password: "rajay@mango!1",
    slide: true,
    page: 1,
    pin: "1980"
})


export default User;
