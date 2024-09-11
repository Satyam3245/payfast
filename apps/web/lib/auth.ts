import CredentialsProvider from "next-auth/providers/credentials"
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
                    return new Error('Please Provide the Email or Password !')
                }

            }    
        })
    ],
    pages:{
        signIn:'/auth/signin',
    },
    secret : process.env.NEXTAUTH_SECRET
}