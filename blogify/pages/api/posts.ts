import { createPost, getPosts } from '../../controllers/BlogController';

export default (req, res) => {
  if (req.method === 'POST') {
    createPost(req, res);
  } else if (req.method === 'GET') {
    getPosts(req, res);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
