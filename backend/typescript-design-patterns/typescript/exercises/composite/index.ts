import { File } from "./models/File";
import { Folder } from "./models/Folder";

const file1 = new File("file1.txt", 20);
const file2 = new File("file2.txt", 50);
const file3 = new File("file3.txt", 80);
const folder = new Folder("notes");

folder.addComponent(file1);
folder.addComponent(file2);
folder.addComponent(file3);
folder.removeComponent(file2);

console.log(folder);
