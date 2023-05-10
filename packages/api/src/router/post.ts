import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

type Post = {
  id: string;
  title: string;
  content: string;
};
let posts: Post[] = [
  {
    id: "1",
    title: "Hello",
    content: "World",
  },
];

const sleep = (seconds: number) =>
  new Promise((resolve) => setTimeout(resolve, seconds * 1000));

export const postRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx: _ }) => {
    return posts;
  }),
  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx: _, input }) => {
      await sleep(1);
      return posts.find((p) => p.id === input.id);
    }),
  create: publicProcedure
    .input(
      z.object({
        title: z.string().min(1),
        content: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx: _ctx, input }) => {
      await sleep(1);
      return posts.push({
        id: Math.floor(Math.random() * 10 ** 16).toString(),
        ...input,
      });
    }),
  delete: publicProcedure
    .input(z.string())
    .mutation(async ({ ctx: _ctx, input: _input }) => {
      await sleep(1);
      return (posts = posts.filter((p) => p.id !== _input));
    }),
});
