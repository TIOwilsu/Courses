import { IBlogPost } from "../interfaces/BlogPost";
import { IBlogPostDisplay } from "../interfaces/BlogPostDisplay";

export class BlogPostDisplay implements IBlogPostDisplay {
  private _blogPost: IBlogPost;

  constructor(blogPost) {
    this._blogPost = blogPost;
  }

  displayHTML(): string {
    return `<h1>${this._blogPost.title}</h1><p>${this._blogPost.content}</p>`;
  }
}
