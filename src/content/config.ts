import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    type: z.enum(["pillar", "cluster"]),
    last_verified: z.string(),
    description: z.string().optional(),
    affiliates: z
      .array(
        z.object({
          label: z.string(),
          href: z.string().url(),
          note: z.string().optional(),
        })
      )
      .optional(),
  }),
});

export const collections = { articles };
