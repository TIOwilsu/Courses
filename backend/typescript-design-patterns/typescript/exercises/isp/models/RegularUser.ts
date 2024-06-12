import { IComment } from "../interfaces/Comment";
import { ICommentCreator } from "../interfaces/CommentCreator";
import { IPost } from "../interfaces/Post";
import { IPostSharer } from "../interfaces/PostSharer";

export class RegularUser implements ICommentCreator, IPostSharer {
  createComment(comment: IComment): void {
    console.log("Regular user is creating a comment");
  }

  sharePosts(post: IPost): void {
    console.log("Regular user is sharing a post");
  }
}
