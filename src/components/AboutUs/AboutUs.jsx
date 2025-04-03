import React, { useEffect, useState } from "react";
import Sidebar from "../common/Sidebar";
import { getContent } from "../../Api Services/glowHttpServices/glowLoginHttpServices";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";

const AboutUs = () => {
  const [content, setContent] = useState("");
  const [heading, setHeading] = useState("");
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  useEffect(() => {
    handleAbout();
  }, [currentLang]);

  const handleAbout = async () => {
    const response = await getContent({ type: "About Us" });
    const contentWithHTML =
      currentLang == "en"
        ? response?.data?.results?.content?.[0]?.contents_en?.[0]?.content
        : response?.data?.results?.content?.[0]?.contents_ar?.[0]?.content;

    const headings =
      currentLang == "en"
        ? response?.data?.results?.content?.[0]?.contents_en?.[0]?.heading
        : response?.data?.results?.content?.[0]?.contents_ar?.[0]?.heading;
    const cleanContent = contentWithHTML.replace(/<\/?[^>]+(>|$)/g, "");
    const cleanHeading = headings.replace(/<\/?[^>]+(>|$)/g, "");
    setContent(cleanContent);
    setHeading(cleanHeading);
  };

  console.log(currentLang);
  
  return (
    <>
      <Header />
      <section className="about-us">
        <div className="container mt-4 mb-5">
          <div className="row">
            <Sidebar />
            <div className="col-lg-9 col-md-8 col-12">
              <div className="card-box px-0 py-0 rounded-3 overflow-hidden">
                <div className="about-us-img">
                  <img src="assets/img/about_us.png" alt />
                </div>
                <div className="py-4 px-4">
                  <div className="mt-2">
                    <h5 className="text fw-semibold text-start">{heading}</h5>
                    {/* <p className="text  text-light">
                      For the Young. And the Young at heart.
                    </p> */}
                    <p className="text  text-light mt-3 mb-3 text-start">
                      {content}
                    </p>
                    {/* <p className="text  text-light m-0 mt-3">
                      Virtual Try-On: Using augmented reality (AR), some apps
                      allow users to "try on" makeup products virtually,
                      including lipsticks, eyeshadows, and foundation shades.
                    </p>
                    <p className="text  text-light mt-0">
                      Skincare Analysis: Apps with AI-powered tools analyze your
                      skin through selfies to recommend routines and products
                      for specific skin concerns like acne, wrinkles, or
                      dryness.
                    </p>
                    <p className="text  text-light mt-3">
                      Reviews and Ratings: User reviews, ratings, and tutorials
                      help guide purchasing decisions and ensure product
                      quality.Ingredient Information: Apps may also offer
                      detailed information about product ingredients, helping
                      users avoid allergens or harmful chemicals.
                    </p>
                    <p className="text  text-light mt-3">
                      Community &amp; Social Features: Users can share reviews,
                      looks, and tutorials, and participate in a community of
                      beauty enthusiasts.Subscription Services: Many beauty apps
                      offer subscription boxes or personalized product
                      deliveries based on user preferences.
                    </p> */}
                    <div className="row mt-5">
                      <div className="col-lg-4 col-md-6 col-12">
                        <div className="d-flex gap-2">
                          <div className="about-icon-wrapper">
                            <img src="assets/img/icon/category.png" alt />
                          </div>
                          <div className>
                            <p className="text text-primary m-0 text-start">
                              12+
                            </p>
                            <p className="text m-0">Categories</p>
                          </div>
                        </div>
                        <p className="text text-light text-start">
                          Products for women <br />
                          and men.
                        </p>
                      </div>
                      <div className="col-lg-4 col-md-6 col-12">
                        <div className="d-flex gap-2">
                          <div className="about-icon-wrapper">
                            <img src="assets/img/icon/profile-2user.png" alt />
                          </div>
                          <div className>
                            <p className="text text-primary m-0">140+</p>
                            <p className="text m-0">User</p>
                          </div>
                        </div>
                        <p className="text text-light text-start">
                          Download &amp; Using our <br />
                          App
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
