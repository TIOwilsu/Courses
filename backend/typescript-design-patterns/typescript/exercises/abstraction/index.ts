import { CustomDate } from "./models/CustomDate";

const now = new CustomDate();
console.log(now.getCurrentYear());
console.log(now.getCurrentMonth());
console.log(now.getCurrentDate());
