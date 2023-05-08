import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const postRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx: _ }) => {
    return [{ id: "1", title: "hello", content: "world" }];
  }),
  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx: _, input }) => {
      return { id: input.id, title: "hello", content: "world" };
    }),
  create: publicProcedure
    .input(
      z.object({
        title: z.string().min(1),
        content: z.string().min(1),
      }),
    )
    .mutation(({ ctx: _ctx, input: _input }) => {
      return null;
    }),
  delete: publicProcedure.input(z.string()).mutation(({ ctx: _ctx, input: _input }) => {
    return null;
  }),
});
