import type { Metadata } from "next";
import { BLOG_POSTS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notícias e novidades da TRG Fitness: lançamentos de linhas, feiras do setor e conteúdo sobre produção nacional de equipamentos fitness.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
      <p className="text-sm font-medium text-signal">Blog</p>
      <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
        Novidades TRG Fitness
      </h1>

      <div className="mt-14 flex flex-col gap-px overflow-hidden border border-border bg-border">
        {BLOG_POSTS.map((post) => (
          <a
            key={post.href}
            href={post.href}
            className="group grid grid-cols-1 gap-6 bg-surface p-8 sm:grid-cols-12 sm:items-center"
          >
            <div className="sm:col-span-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                className="aspect-[16/10] w-full border border-border object-cover"
              />
            </div>
            <div className="sm:col-span-8">
              <p className="text-xs text-muted">{post.date}</p>
              <h2 className="mt-2 text-lg font-medium leading-snug text-foreground group-hover:text-signal">
                {post.title}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                {post.excerpt}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
