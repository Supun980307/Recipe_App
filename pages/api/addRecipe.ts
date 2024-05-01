import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { PrismaClient } from "@prisma/client";
import formidable from "formidable";
//import prisma from "../../prisma";

// export const config = {
//   api: {
//     bodyParser: {
//       sizeLimit: '10mb',
//     },
//   },
// };
const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("req----------------", req.body);
  if (req.method === "POST") {
    try {
      // const {
      //   category,
      //   recipeName,
      //   description,
      //   ingredients,
      //   directions,
      //   image,
      // } = req.body;
      // console.log(recipeName);

      // // if (
      // //   typeof recipeName !== "string" ||
      // //   typeof description !== "string" ||
      // //   typeof ingredients !== "string" ||
      // //   typeof category !== "string" ||
      // //   typeof directions !== "string"
      // // ) {
      // //   throw new Error("Invalid requst");
      // // }

      // const uniqueFileName = `${Date.now()}-${image.name}`;
      // const newPath = path.join(
      //   process.cwd(),
      //   "public",
      //   "uploads",
      //   uniqueFileName
      // );
      // fs.renameSync(image.path, newPath);
      // const imageUrl = `/uploads/${uniqueFileName}`;

      // const Recipe = await prisma.recipes.create({
      //   data: {
      //     title: recipeName,
      //     description,
      //     ingredients,
      //     directions,
      //     image_url: imageUrl,
      //     cat_id: category,
      //     created_at: new Date(),
      //   },
      // });

      // console.log("Recipe created:", Recipe);

      // res.status(201).json(Recipe);

      const form = new formidable.IncomingForm();
      //console.log(form);

      form.parse(req, async (err, fields, files) => {
        if (err) {
          console.error('Error parsing form:', err);
          return res.status(500).json({ error: 'Failed to parse form' });
        }

        const { category, recipeName, description, ingredients, directions, user_id } = fields;
        console.log("fields------------",fields);

        if (!category || !recipeName || !description || !directions || !ingredients || !user_id) {
          return res.status(400).json({ error: 'Missing required fields' });
        }

        if(typeof recipeName !== "string" || typeof description !== "string" || typeof ingredients !== "string" || typeof category !== "string" || typeof directions !== "string"){
          throw new Error("Invalid requst")
        }

        // Get the category ID
        //const categoryId = category;

        const imageFile = Array.isArray(files.image) ? files.image[0] : files.image;
        if (!imageFile) {
          return res.status(400).json({ error: 'No image file uploaded' });
        }

        const oldPath = (imageFile as any).path;
        const uniqueFileName = `${Date.now()}-${(imageFile as any).name}`;
        const newPath = path.join(process.cwd(), 'public', 'uploads', uniqueFileName);
        fs.renameSync(oldPath, newPath);

        const newRecipe = await prisma.recipes.create({
          data: {
            title: recipeName,
            cat_id: category,
            description: description,
            ingredients: ingredients,
            directions: directions,
            image_url: `/uploads/${uniqueFileName}`,
            created_at: new Date(),
          },
        });

        res.status(201).json({ message: 'Recipe added successfully', data: newRecipe });
      });
    } catch (error) {
      console.error("Error adding recipe:", error);
      res.status(500).json({ error: "Failed to add recipe" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
