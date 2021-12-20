import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

const scopes =
  "user-read-playback-state user-modify-playback-state user-library-modify";

export default NextAuth({
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      authorization: {
        params: {
          scope: scopes,
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          accessTokenExpires: account.expires_at * 1000,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
          ...user,
        };
      }

      if (Date.now() < token.accessTokenExpires) {
        return token;
      }
    },
    async session({ session, token }: any) {
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.username = token.username;

      return session;
    },
    async redirect({ baseUrl }) {
      return baseUrl;
    },
  },
});
