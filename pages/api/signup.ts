import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const { firstName, lastName, email, password } = req.body;

            const newUser = await prisma.users.create({
                data: {
                    first_name: firstName,
                    last_name: lastName,
                    email,
                    password
                    // Add other fields as needed
                }
            });

            console.log('User created:', newUser);

            res.status(201).json(newUser);
        } catch (error) {
            console.error('Error creating user:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}