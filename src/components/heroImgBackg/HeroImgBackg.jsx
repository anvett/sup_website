import React from "react";

export default function HeroImgBackg({ backgroundImage, mainText, secondaryText, buttonText }) {
  return (
    <>
      <div
        className="hero min-h-[75vh]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
<<<<<<< HEAD
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="lg:max-w-3x4">
            <h1 className="section-title text-light">{mainText}</h1>
=======
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="lg:max-w-3x4">
            <h1 className="section-title text-primary">{mainText}</h1>
>>>>>>> a4e8b9a (web site created, pages, components updated, credit simulator created)
            <p className="service-description">{secondaryText}</p>
            {/* <button className="btn btn-primary">{buttonText}</button> */}
          </div>
        </div>
      </div>
      
    </>
  );
}
