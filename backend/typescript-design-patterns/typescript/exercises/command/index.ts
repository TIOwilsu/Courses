import { CreateFileCommand } from "./models/CreateFileCommand";
import { DeleteFileCommand } from "./models/DeleteFileCommand";
import { MyFileSystem } from "./models/MyFileSystem";
import { UpdateFileCommand } from "./models/UpdateFileCommand";

const myFileSystem = new MyFileSystem();

const createFile = new CreateFileCommand("/path/file.txt");
myFileSystem.addCommand(createFile);

const updateFile = new UpdateFileCommand(
  "/path/file.txt",
  "new content",
  "old content"
);
myFileSystem.addCommand(updateFile);

const deleteFile = new DeleteFileCommand("/path/file.txt");
myFileSystem.addCommand(deleteFile);

// while (myFileSystem.hasCommand()) {
//   myFileSystem.executeCommand();
// }

myFileSystem.undoCommand();
