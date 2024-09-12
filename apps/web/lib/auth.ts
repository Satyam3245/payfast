import prisma from "@repo/db/client";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';
export const authOptions = {
    providers:[
        CredentialsProvider({
            name:"Email",
            credentials:{
                email : {label:'Email',placeholder:'Enter Your Email',type:"text"},
                password : {label:'Password',placeholder:'Enter Your Password',type:"password"}    
            },
            async authorize(credentials:any){
                const { email, password } = credentials;

                if(!email || !password){
                    return null
                }

                const user = await prisma.user.findFirst({
                    where:{
                        email
                    }
                })

                if(!user){
                    return null
                }

                const isValidPassword = await bcrypt.compare(password,user.password);

                if(!isValidPassword){
                    return null
                }

                return { id: user.id, name: user.username, email: user.email };

            }    
        })
    ],
    pages:{
        signIn:'/auth/signin',
    },
    secret : process.env.NEXTAUTH_SECRET
}