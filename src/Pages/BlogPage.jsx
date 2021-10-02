import React, { useEffect, useState } from "react";
// import BlogList from "../Components/BlogList";
// import { Link } from "react-router-dom";
import BlogItem from "../Components/BlogItem";
import sanityClient from "../client.js";

const BlogPage = () => {
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
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div
        className="section-title text-center position-relative pb-3 mb-5 mx-auto"
        style={{ maxWidth: "600px" }}
      >
        <h5 className="fw-bold text-primary text-uppercase">Latest Blog</h5>
        <h1 className="mb-0">Read The Latest Articles from Our Blog Post</h1>
      </div>
      <div className="col-lg-12">
        <div className="row g-8 px-5">
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
    </div>
  );
};

export default BlogPage;
