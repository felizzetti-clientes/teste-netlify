import Link from "next/link";
import { BLOG_POSTS } from "@/lib/content";

export function BlogSection() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Do blog
          </h2>
          <Link
            href="/blog"
            className="hidden shrink-0 border-b border-foreground pb-1 text-sm font-medium transition-colors hover:border-signal hover:text-signal md:block"
          >
            Ver todos os posts
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <a key={post.href} href={post.href} className="group flex flex-col gap-4">
              <div className="aspect-[16/10] w-full overflow-hidden bg-surface">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <p className="text-xs text-muted">{post.date}</p>
              <h3 className="text-base font-medium leading-snug text-foreground group-hover:text-signal">
                {post.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{post.excerpt}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
