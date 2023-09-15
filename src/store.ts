import { writable } from "svelte/store";

let User = writable({
    name: "Yuvraj Khanna",
    password: "rajay@mango!1",
    slide: true
})


export default User;
