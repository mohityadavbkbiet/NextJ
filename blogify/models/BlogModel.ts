export interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
}

export class BlogModel {
  private posts: BlogPost[] = [];

  public addPost(post: BlogPost): void {
    this.posts.push(post);
  }

  public getPosts(): BlogPost[] {
    return this.posts;
  }
}
