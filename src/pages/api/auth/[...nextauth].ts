import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { query as q } from 'faunadb';

import { fauna } from '../../../services/fauna';

export default NextAuth({  
  providers: [    
    GithubProvider({      
      clientId: process.env.GITHUB_ID,      
      clientSecret: process.env.GITHUB_SECRET
    })],
    callbacks: {
      async session({ session, token, user }) {
        try {
          const userActiveSubscription = await fauna.query(
            q.Get(
              q.Intersection([
                q.Match(
                  q.Index('subscription_by_user_ref'),
                  q.Select(
                    'ref',
                    q.Get(
                      q.Match(
                        q.Index('user_by_email'),
                        q.Casefold(session.user?.email ?? "")
                      )
                    )
                  )
                ),
                q.Match(
                  q.Index('subscription_by_status'),
                  'active'
                )
              ])
            )
          )

          return {
            ...session,
            activeSubscription: userActiveSubscription
          }
        } catch {
          return {
            ...session,
            activeSubscription: null
          }
        }
      },
      async signIn({ user, account, profile, email, credentials }) {
        try {
          const email_query = user.email ?? ""

          await fauna.query(
            q.If(
              q.Not(
                q.Exists(
                  q.Match(
                    q.Index('user_by_email'),
                    q.Casefold(email_query)
                  )
                )
              ),
              q.Create(
                q.Collection('users'),
                { data: { email: user.email } }
              ),
              q.Get(
                q.Match(
                  q.Index('user_by_email'),
                  q.Casefold(email_query)
                )
              )
            )
          )
  
          return true
        } catch (error) {
          return false
        }
      },
    }
  })