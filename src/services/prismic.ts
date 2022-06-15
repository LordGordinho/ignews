import { createClient } from "@prismicio/client";

export function getPrismicClient() {
  const client = createClient(
    "ignewsdevstaging2", 
    { 

      accessToken: process.env.PRISMIC_ACCESS_TOKEN
    }
  )

  return client;
}