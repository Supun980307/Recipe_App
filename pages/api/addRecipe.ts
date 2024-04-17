import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import prisma from '../../prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const form = new formidable.IncomingForm();

      form.parse(req, async (err, fields, files) => {
        if (err) {
          console.error('Error parsing form:', err);
          return res.status(500).json({ error: 'Failed to parse form' });
        }

        // Check if image file exists
        const imageFile = Array.isArray(files.image) ? files.image[0] : files.image;
        if (!imageFile) {
          return res.status(400).json({ error: 'No image file uploaded' });
        }

        // Cast imageFile to formidable.File
        const imageFileInfo = imageFile as formidable.File;

        // uploaded file directory
        const oldPath = (imageFileInfo as any).path;
        const newPath = path.join(process.cwd(), 'public', 'uploads', (imageFileInfo as any).name);
        fs.renameSync(oldPath!, newPath); 

        // Create a new recipe record in the database
        const newRecipe = await prisma.recipes.create({
          data: {
            titel: fields.recipeName as string,
            description: fields.description as string,
            // other fields
            image_url: `/uploads/${(imageFileInfo as any).name}`, // Save path to the uploaded image
          },
          created_at: new Date(),
        });

        res.status(201).json({ message: 'Recipe added successfully', data: newRecipe });
      });
    } catch (error) {
      console.error('Error adding recipe:', error);
      res.status(500).json({ error: 'Failed to add recipe' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
