import { NextApiRequest, NextApiResponse } from 'next';
import { TextModel } from '../models/TextModel';

export const processText = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { text } = req.body;
    const textModel = new TextModel(text);
    const processedText = textModel.processText();
    res.status(200).json({ processedText });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
