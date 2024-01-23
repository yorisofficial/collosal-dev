import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";

const OtherBlog = () => {
  const blogDir = "blogs";
  const files = fs.readdirSync(path.join(blogDir));

  const blogs = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");
    const { data: frontmatter } = matter(fileContent);
    return {
      meta: frontmatter,
      slug: filename.replace(".mdx", ""),
    };
  });
  return (
    <div className="other-content w-full space-y-8">
      <h1 className="text-3xl font-semibold">Other people also read ...</h1>
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {blogs.map((blog) => (
          <Link
            href={`/blog/${blog.slug}`}
            key={blog.slug}
            className="card-items bg-slate-900"
          >
            <div className="">
              <Image
                src="https://fakeimg.pl/400x300/"
                alt="image"
                height={500}
                width={500}
                className="h-[200px] w-full rounded-lg rounded-b-none object-cover"
              />
            </div>
            <div className="space-y-4 p-4">
              <h1 className="text-xl font-bold">{blog.meta.title}</h1>
              <p className="line-clamp-4">{blog.meta.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OtherBlog;
