import { IComment } from "./Comment";

export interface ICommentCreator {
  createComment(comment: IComment): void;
}
