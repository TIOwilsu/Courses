import { IComment } from "../interfaces/Comment";
import { ICommentCreator } from "../interfaces/CommentCreator";
import { IPost } from "../interfaces/Post";
import { IPostCreator } from "../interfaces/PostCreator";
import { IPostSharer } from "../interfaces/PostSharer";

export class Admin implements IPostCreator, ICommentCreator, IPostSharer {
  createPost(post: IPost): void {
    console.log("Admin is creating a post");
  }

  createComment(comment: IComment): void {
    console.log("Admin is creating a comment");
  }

  sharePosts(post: IPost): void {
    console.log("Admin is sharing a post");
  }
}
