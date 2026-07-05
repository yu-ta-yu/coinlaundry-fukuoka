import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    type: z.enum(["pillar", "cluster"]),
    last_verified: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { articles };
