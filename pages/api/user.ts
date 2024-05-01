// import { hash } from "bcryptjs";
// import { db } from "../../lib/db"
// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//     try{
//        const body = await req.json();
//        const { id, email, password } = body;
       
//        const existingUserById = await db.users.findUnique({
//         where: { id: id }
//        });
//        if(existingUserById) {
//         return NextResponse.json({ users: null, })
//        }

//        const existingUserByEmail = await db.users.findFirst({
//         where: { email: email }
//        });
//        if(existingUserByEmail) {
//         return NextResponse.json({ users: null, })
//        }

//        const hashedPassword = await hash(password, 10);
//        const newUser = await db.users.create({
//         data: {
//             id,
//             email,
//             password: hashedPassword,
//             first_name: '',
//             last_name: ''
//         }
//        });
//        const { password: newUserPassword, ...rest } = newUser;

//        return NextResponse.json({ users: rest, message: "User created successfully"}, { status: 201});
//     }catch(error){
//         return NextResponse.json({ message: "Something went wrong!"}, { status: 201});
//     }
// }