import { IPost } from "./Post";

export interface IPostSharer {
  sharePosts(post: IPost): void;
}
