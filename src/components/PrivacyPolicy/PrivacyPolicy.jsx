import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Sidebar from "../common/Sidebar";
import { getContent } from "../../Api Services/glowHttpServices/glowLoginHttpServices";

const PrivacyPolicy = () => {
  const [content, setContent] = useState([]);
  const [responseData, setResponseData] = useState("");

  useEffect(() => {
    handleAbout();
  }, []);

  const handleAbout = async () => {
    const response = await getContent({ type: "Privacy Policy" });
    setResponseData(response?.data?.results?.content?.[0])
    const contentArray =
      response?.data?.results?.content?.[0]?.contents_en || [];
    const cleanContents = contentArray.map((item) => ({
      ...item,
      content: item.content.replace(/<\/?[^>]+(>|$)/g, ""),
      heading: item.heading?.replace(/<\/?[^>]+(>|$)/g, "") || "",
    }));
    setContent(cleanContents);
  };

  return (
    <>
      <Header />
      <section className="about-us">
        <div className="container mt-4 mb-5">
          <div className="row">
          <Sidebar/>
            <div className="col-lg-9 col-md-8 col-12">
              <div className>
                <div className>
                  <h5 className="text fw-bold mb-4 text-start">
                    Privacy Policy of Glow Up{" "}
                  </h5>
                </div>
              </div>
              <div className="card-box mt-3">
                <div className>
                  <h5 className="text fw-bold mb-4 text-start">
                    Teams &amp; Conditions of Glow Up{" "}
                  </h5>
                  <p className="text  text-light text-start">Last Updated: {responseData?.updatedAt}</p>
                </div>

                <div className="mt-3">
                  {content?.map((item) => (
                    <div className>
                      {item.heading && (
                        <h5 className="text fw-bold mt-3 text-start">{item?.heading}</h5>
                      )}

                        {item.content && (
                          <p className="text text-light text-start">{item.content}</p>
                        )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default PrivacyPolicy;
