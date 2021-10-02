import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import BlogItem from "./BlogItem";
import sanityClient from "../client.js";

const BlogList = () => {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
            title,
            slug,
            "author": author->name,
            "date":publishedAt,
            mainImage{
              asset->{
              _id,
              url
            }
          }
        }`
      )

      .then((data) => setAllPosts(data))
      .catch(console.error);
    // console.log(allPostsData);
  }, []);
  return (
    <div className="col-lg-12">
      <div className="row g-5">
        {allPostsData &&
          allPostsData.map((post, index) => (
            <BlogItem
              blogImg={post.mainImage.asset.url}
              blogLink={"/" + post.slug.current}
              blogger={post.author}
              date={post.date}
              heading={post.slug.current}
              text={post.title}
              blogLink2={"/" + post.slug.current}
              key={index}
            />
          ))}
      </div>
    </div>
  );
};

export default BlogList;
