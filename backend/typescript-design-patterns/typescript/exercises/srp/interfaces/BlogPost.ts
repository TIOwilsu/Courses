export interface IBlogPost {
  title: string;
  content: string;
  createPost(): void;
  updatePost(): void;
  deletePost(): void;
}
