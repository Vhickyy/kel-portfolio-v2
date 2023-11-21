import NextAuth, { Account, User as AuthUser, AuthOptions, NextAuthOptions} from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

const options:NextAuthOptions = {
  providers: [
    CredentialsProvider({
        id: "credentials",
        name: "credentials",
        credentials: {
            email: {label: "Email", type:"text"},
            password: {label: "Password", type:"text"},
        },
        async authorize (credentials: any) {
            await connect();
            try{
                const user = await User.findOne({email:credentials.email});
                if(user){
                    const isCorrectPassword = await bcrypt.compare(credentials.password,user.password);
                    if(isCorrectPassword){  
                        return user
                    }
                }
                return new NextResponse("Incorrect email and password",{status:401});
            }catch(err:any){
                return new NextResponse(err,{status:500});
            }
        }
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID!,
    //   clientSecret: process.env.GOOGLE_SECRET!,
    // })
  ],
//   callbacks:{
//     async signIn({user, account }: {user: AuthUser, account:Account | null }) : Promise<boolean | string> {
//         if(account?.provider == "credentials"){
//             return true
//         }
//         if(account?.provider == "google"){
//             await connect();
//             try{
//                 const userExist = await User.findOne({email:user.email});
//                 if(!userExist){
//                     await User.create({email:user.email})
//                 }
//                 return true;
//             }catch(err){

//             }
//         }
//         return false;
//     },
    // async jwt ({token,user,account}:{token:JWT,user:AuthUser,account:Account}): Promise<boolean | string>{
    //   return false
    // }
  }
// }

const handler = NextAuth(options);

export {handler as GET,handler as POST};