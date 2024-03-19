import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import PageTitle from "../PageTitle";
import HeaderHamburger from "./components/HeaderHamburger";
import { ToastContainer, toast } from "react-toastify";
import BlogsCard from "./components/BlogsCard";
import { useContext } from "react";
import { ThemeContext } from "../../App";

const Blog = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [iframeLoaded, setIframeLoaded] = useState(true);
  const [hamburger, setHamburger] = useState(false);
  const [articles, setArticles] = useState([]);

  // useEffect(() => {
  //   setIframeLoaded(false);
  //   setTimeout(() => setIframeLoaded(true), 5000);
  // }, []);

  const handleOpenHamburger = () => {
    setHamburger(true);
  };

  const handleHideHamburger = () => {
    setHamburger(false);
  };

  // useEffect(() => {
  //   const getNews = async () => {
  //     try {
  //       let response = await fetch(
  //         "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=bde4336c93c8418e921eea9818e9633a"
  //       );

  //       let jsonData = await response.json();
  //       console.log(jsonData.articles);
  //       setArticles(jsonData.articles);
  //       setIframeLoaded(false);
  //     } catch (error) {
  //       console.log(error);
  //       setIframeLoaded(true);
  //     }
  //   };

  //   getNews();
  // }, []);

  useEffect(() => {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then((res) => res.json())
      .then((data) => {
        const tempArticles = [];
        const promises = data.slice(0, 10).map((id) =>
          fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            .then((res) => res.json())
            .then((item) => tempArticles.push(item))
        );
        Promise.all(promises).then(() => {
          setArticles(tempArticles);
          setIframeLoaded(false);
        });
      })
      .catch((error) => {
        setIframeLoaded(true);
        console.log(error);
        setIframeLoaded(false);
      });
  }, []);

  return (
    <div className="dark" data-theme={theme}>
      <Header openHamburger={handleOpenHamburger} activeBlogs={true} />
      {hamburger && <HeaderHamburger hideHamburger={handleHideHamburger} />}
      <ToastContainer position="top-left" />
      <PageTitle title="Articles" />
      <div className="max-w-3xl mx-auto pb-28 flex flex-col items-center gap-10">
        <div className="border hover:border-black hover:text-black hover:text-[14px] hover:bg-white border-t-0 h-[40px] w-[350px] text-center justify-center flex items-center text-white bg-blue-500 border-blue-500 transition-all duration-500 font-semibold truncate">
          PERSONAL AND HOSTED - IN PROGRESS
        </div>

        <div>
          {iframeLoaded ? (
            <div className="w-[500px] h-[400px] flex items-center justify-center animate-pulse dark">
              Getting Articles...
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mx-4 w-[95%] md:w-[100%]">
              {articles.map((article, i) => {
                return (
                  <BlogsCard
                    url={article.url}
                    mainSite={article.url}
                    key={i}
                    time={article.time}
                    title={article.title}
                    by={article.by}
                  />
                  // <BlogsCard
                  //   url={article.url}
                  //   mainSite={article.url}
                  //   key={i}
                  //   time={article.publishedAt}
                  //   title={article.title}
                  //   by={article.author}
                  //   img={article.urlToImage}
                  // />
                );
              })}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
