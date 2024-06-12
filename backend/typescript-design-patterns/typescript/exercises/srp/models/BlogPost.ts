import { IBlogPost } from "../interfaces/BlogPost";

export class BlogPost implements IBlogPost {
  public title: string;
  public content: string;

  constructor(title, content) {
    this.title = title;
    this.content = content;
  }

  createPost(): void {}
  updatePost(): void {}
  deletePost(): void {}
}
