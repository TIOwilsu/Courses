import { IPost } from "./Post";

export interface IPostCreator {
  createPost(post: IPost): void;
}
