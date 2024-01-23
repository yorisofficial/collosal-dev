import React from "react";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import BackButton from "../components/BackButton";

import { MDXRemote } from "next-mdx-remote/rsc";
import CardAuthor from "../components/CardAuthor";
import OtherBlog from "../components/OtherBlog";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("blogs"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}
function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join("blogs", slug + ".mdx"),
    "utf-8",
  );

  const { data: fontMatter, content } = matter(markdownFile);

  return {
    fontMatter,
    slug,
    content,
  };
}

export default function Page({ params }: any) {
  const props = getPost({ slug: params.slug });

  return (
    <div className="w-full px-[5%] pb-32 xl:px-44">
      <BackButton />
      <div className="mx-auto max-w-5xl space-y-8 px-[5%] py-16">
        <article className="article__class">
          <MDXRemote source={props.content}></MDXRemote>
        </article>
        {props.fontMatter.authorname !== "" ||
          (props.fontMatter.authorquotes !== "" && (
            <CardAuthor
              authorname={props.fontMatter.authorname}
              authorImage={props.fontMatter.authorImage}
              authormastery={props.fontMatter.authormastery}
              authorquotes={props.fontMatter.authorquotes}
            />
          ))}
      </div>
      <OtherBlog />
    </div>
  );
}
