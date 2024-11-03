import { NextApiRequest, NextApiResponse } from 'next';
import { BlogModel, BlogPost } from '../models/BlogModel';

const blogModel = new BlogModel();

export const createPost = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { title, content, author } = req.body;
    const newPost: BlogPost = {
      id: Date.now().toString(),
      title,
      content,
      author,
      createdAt: new Date(),
    };
    blogModel.addPost(newPost);
    res.status(201).json(newPost);
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export const getPosts = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const posts = blogModel.getPosts();
    res.status(200).json(posts);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
