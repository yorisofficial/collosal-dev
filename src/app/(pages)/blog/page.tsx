import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { IconArrowRight, IconLayout2, IconPointer } from "@tabler/icons-react";
import Image from "next/image";
import HeaderContent from "./components/HeaderContent";
import BlogList from "./components/BlogList";

export default function Page() {
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
    <div className="container mx-auto h-full max-w-6xl py-32">
      <HeaderContent />
      <BlogList />
    </div>
  );
}
