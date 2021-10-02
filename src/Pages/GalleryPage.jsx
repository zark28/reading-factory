import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import GalleryCarousel from "../Components/gallerypage/GalleryCarousel";
import GalleryItem from "../Components/gallerypage/GalleryItem";
import sanityClient from "../client.js";

const GalleryPage = () => {
  const [allPics, setAllPics] = useState(null);

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

      .then((data) => setAllPics(data))
      .catch(console.error);
    // console.log(allPostsData);
  }, []);
  return (
    <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container py-5">
        <div
          class="section-title text-center position-relative pb-3 mb-5 mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <h1 class="mb-5">Gallery</h1>
          <h5 class="fw-bold text-primary">The Reading Factory in Pictures</h5>
        </div>
        <GalleryCarousel />
        <div class="row g-5">
          {allPics &&
            allPics.map((pic, index) => (
              <GalleryItem
                author={`by ${pic.author}`}
                // delay={pic.delay}
                heading={pic.slug.current}
                details={pic.title}
                img={pic.mainImage.asset.url}
                key={index}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
