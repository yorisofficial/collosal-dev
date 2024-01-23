import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";

const BlogList = () => {
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
    <div className="other-content w-full space-y-12 xl:space-y-8">
      <div className="grid gap-16 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
        {blogs.map((blog) => (
          <Link
            href={`/blog/${blog.slug}`}
            key={blog.slug}
            className="card-items space-y-4"
          >
            <div className="">
              <Image
                src="https://via.placeholder.com/500x500"
                alt="image"
                height={300}
                width={300}
                className="h-[300px] w-[400px] rounded-lg rounded-b-none object-cover"
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-xl font-bold">{blog.meta.title}</h1>
              <p className="line-clamp-4">{blog.meta.description}</p>
            </div>
            <div className="flex w-full items-start justify-start gap-8">
              <div className="">
                <Image
                  src={blog.meta.authorImage}
                  alt="..."
                  height={100}
                  width={100}
                  className="h-12 w-12 rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <h1>{blog.meta.authorname}</h1>
                <h1>{blog.meta.date} ・ 5 minutes</h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
