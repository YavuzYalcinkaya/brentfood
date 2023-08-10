import { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      // clientId: process.env.GOOGLE_ID as string,
      // clientSecret: process.env.GOOGLE_SECRET as string,
      clientId: process.env.NEXT_PUBLIC_GOOGLE_ID!,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET!,
    }),
  ],
};

export const getAuthSession = () => getServerSession(authOptions);
