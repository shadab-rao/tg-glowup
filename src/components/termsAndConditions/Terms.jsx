import React, { useEffect, useState } from "react";
import Sidebar from "../common/Sidebar";
import { getContent } from "../../Api Services/glowHttpServices/glowLoginHttpServices";
import { useTranslation } from "react-i18next";
import Header from "../common/Header";
import { t } from "i18next";
import Footer from "../common/Footer";
import moment from "moment";

const Terms = () => {
  const [content, setContent] = useState([]);
  const [responseData, setResponseData] = useState("");
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  useEffect(() => {
    handleAbout();
  }, [currentLang]);

  const handleAbout = async () => {
    const response = await getContent({ type: "Term and Conditions" });
    setResponseData(response?.data?.results?.content?.[0]);
    const contentArray =
      currentLang === "en"
        ? response?.data?.results?.content?.[0]?.contents_en
        : response?.data?.results?.content?.[0]?.contents_ar || [];

    const cleanContents = contentArray.map((item) => ({
      ...item,
      content: item.content.replace(/<\/?[^>]+(>|$)/g, ""),
      heading: item.heading?.replace(/<\/?[^>]+(>|$)/g, "") || "",
    }));
    setContent(cleanContents);
  };

  return (
    <>
      <section className="about-us">
        <Header/>
        <div className="container mt-4 mb-5">
          <div className="row">
            <Sidebar />
            <div className="col-lg-9 col-md-8 col-12">
              <div className>
                <div className>
                  <h5 className="text fw-bold mb-4 text-start">
                    {t("Terms & Conditions")}
                  </h5>
                </div>
              </div>
              <div className="card-box mt-3">
                <div className>
                  <h5 className="text fw-bold mb-4 text-start">
                    {t("Teams & Conditions of Glow Up")}
                  </h5>
                  <p className="text  text-light text-start">
                    {t("Last Updated")}: {moment(responseData?.updatedAt).format("l")}
                  </p>
                </div>

                <div className="mt-3">
                  {content?.map((item) => (
                    <div className>
                      {item.heading && (
                        <h5 className="text fw-bold mt-3 text-start">
                          {item?.heading}
                        </h5>
                      )}

                      {item.content && (
                        <p className="text text-light text-start">
                          {item.content}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </section>
    </>
  );
};

export default Terms;
