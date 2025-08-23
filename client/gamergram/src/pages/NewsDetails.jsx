import {
  Calendar,
  Menu,
  Send,
  MessageCircle,
  Timer,
  X,
  LogOut,
} from "lucide-react";
import { useLocation, useParams, Link } from "react-router-dom";
import { format, parseISO } from "date-fns";
import useGameStore from "../store/useGameStore";
import { useEffect } from "react";
import useUIStore from "../store/useUIStore";
import { useState } from "react";
import useLogoutStore from "../store/useLogoutStore";
import { motion, AnimatePresence } from "framer-motion";

const NewsDetails = () => {
  const { newsID } = useParams();
  const [comment, setComment] = useState("");
  const [fetchedComments, setFetchedComments] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { pages, selectedPage, setSelectedPage } = useUIStore();
  const location = useLocation();
  const { logOutUser } = useLogoutStore();
  useEffect(() => {
    const currentLocation = pages.find((p) => p.link === location.pathname);

    if (currentLocation) {
      setSelectedPage(currentLocation.id);
    }
  }, [location.pathname, pages, setSelectedPage]);

  const { newsDetails, fetchNewsDetails } = useGameStore();
  const { readingProgress, setReadingProgress } = useUIStore();

  useEffect(() => {
    fetchNewsDetails(newsID);
  }, []);

  useEffect(() => {
    setReadingProgress();
    window.addEventListener("scroll", setReadingProgress);
    return () => window.removeEventListener("scroll", setReadingProgress);
  }, []);

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = "hidden";
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modalIsOpen]);

  const getFirstSentence = (text) => {
    if (!text) return "";
    const firstSentence = text.match(/^[^.!?]*[.!?]/);
    return firstSentence ? firstSentence[0].trim() : text;
  };

  const cleanContent = (text) => {
    if (!text) return "";

    let cleaned = text.replace(/@context.*?@type.*?Product.*?}/gs, "");

    const redundantPatterns = [
      /View and download image/gi,
      /Download the image/gi,
      /Download this image/gi,
      /Verify your age to view this content/gi,
      /close/gi,
      /Close/gi,
      /{"@context".*?"}/gs,
      /\s*\{\s*"@type".*?\}\s*/gs,
      /Amazon\{"@context.*?\}/gs,
      // Remove any remaining JSON-like structures
      /\{[^}]*"@[^}]*\}/gs,
      // Remove excessive whitespace and newlines
      /\n{3,}/g,
      /\s{3,}/g,
    ];

    redundantPatterns.forEach((pattern) => {
      cleaned = cleaned.replace(pattern, " ");
    });

    cleaned = cleaned
      .replace(/\s+/g, " ")
      .replace(/\n\s*\n/g, "\n")
      .trim();

    return cleaned;
  };

  const formatTextToParagraphs = (text) => {
    if (!text) return [];

    const cleanedText = cleanContent(text);

    return cleanedText
      .split(/\n\n|\n|(?<=\. )(?=[A-Z])/)
      .map((para) => para.trim())
      .filter((para) => para.length > 20)
      .filter((para) => {
        const lowercasePara = para.toLowerCase();
        return (
          !lowercasePara.includes("download") &&
          !lowercasePara.includes("view and") &&
          !lowercasePara.includes("close") &&
          !lowercasePara.includes("@context") &&
          !lowercasePara.includes("@type") &&
          !lowercasePara.match(/^\s*\{.*\}\s*$/)
        );
      });
  };

  const handleComment = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/savecomment/comment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            comment: comment,
            newsID: newsID,
          }),
        }
      );

      if (!response.ok)
        throw new Error("Something went wrong. Please try again!");

      const data = await response.json();
      console.log(data);

      await getAllComments();
      setComment("");
    } catch (error) {
      console.log("Error posting comment.", error.message);
    }
  };

  const getAllComments = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/getcomments/get-all-comments`
      );

      const data = await response.json();
      console.log(data);
      setFetchedComments(data);
    } catch (error) {
      console.log("Error getting comments.", error.message);
    }
  };
  useEffect(() => {
    getAllComments();
  }, []);

  const commentCount = fetchedComments.filter(
    (comment) => comment.newsID === newsID
  );

  return (
    <>
      <div className="min-h-screen min-w-screen bg-neutral-900 overflow-x-hidden">
        {/*Progress bar*/}
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-60">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 ease-out show-scrollbar"
            style={{ width: `${readingProgress}%` }}
          />
        </div>
        {/*Header*/}
        <div className="relative">
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-600" />
          <div className="p-4 flex justify-between items-center  gap-4">
            <div className="flex items-center gap-2 ">
              <Menu
                onClick={() => setSidebarOpen(true)}
                size={19}
                color="#fff"
                className="cursor-pointer"
              />
              <h1 className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-widest font-extrabold md:text-lg orbitron lg:text-xl cursor-pointer">
                GAMERGRAM
              </h1>
            </div>
          </div>
        </div>

        <div className="mt-5 px-3">
          {/*Pointers section*/}
          {
            <div className="flex flex-wrap items-center gap-9 md:max-w-3xl md:mx-auto ">
              <div className="">
                <span className="bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 backdrop-blur-sm border border-cyan-500/20 rounded-full overflow-hidden text-white p-2">
                  {newsDetails.sourceName}
                </span>
              </div>
              <div className="text-neutral-400 flex items-center gap-1 text-sm font-semibold">
                <Calendar size={17} />
                {newsDetails.publishedDate && (
                  <p>
                    {format(parseISO(newsDetails.publishedDate), "do MMMM yy")}
                  </p>
                )}
              </div>
              <div className="text-neutral-400 flex items-center gap-1 text-sm font-semibold">
                <Timer size={17} />
                <p>5 min read</p>
              </div>
            </div>
          }

          {/*Article content*/}
          <div className="sm:px-8 md:max-w-3xl md:mx-auto">
            <h1 className="mt-6 leading-tight bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent font-bold text-4xl md:text-5xl">
              {newsDetails.title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mt-8 font-semibold">
              {getFirstSentence(cleanContent(newsDetails.summary))}
            </p>

            {/*Comment and like section*/}
            <div>
              <div className="flex gap-4">
                <button
                  onClick={() => setModalIsOpen(true)}
                  className="text-white flex  items-center gap-2 mt-7 px-4 py-2 bg-neutral-800 rounded-xl cursor-pointer hover:bg-neutral-700 hover:scale-103 transition-all duration-500 ease-in-out"
                >
                  <MessageCircle size={22} />
                  <p>{commentCount.length}</p>
                </button>
              </div>

              <div className="mt-7 mb-5">
                <img
                  src={newsDetails.imageURL}
                  alt={newsDetails.title}
                  className="rounded-xl "
                />
              </div>

              {newsDetails.summary && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Summary
                  </h2>
                  <div className="space-y-4">
                    {formatTextToParagraphs(newsDetails.summary).map(
                      (paragraph, index) => (
                        <p
                          key={index}
                          className="text-gray-300 leading-relaxed text-lg"
                        >
                          {paragraph}
                        </p>
                      )
                    )}
                  </div>
                </div>
              )}

              {newsDetails.detailedDescription && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Detailed Description
                  </h2>
                  <div className="space-y-4">
                    {formatTextToParagraphs(
                      newsDetails.detailedDescription
                    ).map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-gray-300 leading-relaxed text-lg"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {modalIsOpen && (
          <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center overflow-x-hidden">
            <div className="max-h-[80vh] w-[90%] bg-neutral-800 rounded-xl  flex flex-col">
              <div className="flex justify-between px-5 py-4 border-b-1 border-neutral-600">
                <h1 className="text-purple-400 font-bold tracking-wide text-lg">
                  Comments
                </h1>
                <button
                  onClick={() => setModalIsOpen(false)}
                  className="cursor-pointer"
                >
                  ✖
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-2 space-y-3">
                {commentCount.length > 0 ? (
                  commentCount.map((com) => (
                    <div key={com._id} className="flex items-start gap-3 p-2 ">
                      <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                        {com.userName?.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="text-purple-300">{com.userName}</p>
                        <p className="text-white line-clamp-2">{com.comment}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-white">No comments added.</p>
                )}
              </div>
              <div className="border-t-1 border-neutral-600 p-3 flex items-center gap-2">
                <input
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className=" text-white w-full h-10 bg-neutral-700 rounded-4xl placeholder:text-neutral-400 placeholder:text-sm p-3 outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Add a comment..."
                />
                <button className="bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-full transition flex-shrink-0 cursor-pointer">
                  <Send size={16} onClick={handleComment} />
                </button>
              </div>
            </div>
          </div>
        )}

        <AnimatePresence>
          {sidebarOpen && (
            <div className="fixed inset-0 bg-black/40">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ x: -250, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="min-h-screen w-60 bg-gradient-to-b from-neutral-900 to-neutral-800"
              >
                <div className="">
                  <div>
                    <div className="flex items-center justify-between border-b border-b-neutral-600 p-3">
                      <div>
                        <h1 className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-extrabold text-xl tracking-wide">
                          GAMERGRAM
                        </h1>
                        <span className="text-neutral-400 text-sm">
                          Gaming hub
                        </span>
                      </div>
                      <div>
                        <button className="px-2 py-1 bg-neutral-700 rounded-lg">
                          <X
                            onClick={() => setSidebarOpen(false)}
                            className="w-4 cursor-pointer"
                            color="#fff"
                          />
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col gap-6 mt-5 p-4 lg:p-6">
                      {pages.map((page) => {
                        const IconComponent = page.icon;
                        return (
                          <Link
                            to={page.link}
                            className={`flex items-center gap-2 ${
                              selectedPage === page.id
                                ? "bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                                : "text-white hover:scale-115 transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 hover:bg-clip-text hover:text-transparent"
                            }`}
                          >
                            <IconComponent
                              size={25}
                              color="#fff"
                              className={`cursor-pointer`}
                            />
                            <button
                              onClick={() => setSelectedPage(page.id)}
                              className={`text-[26px] font-bold cursor-pointer`}
                            >
                              {page.label}
                            </button>
                          </Link>
                        );
                      })}
                    </div>
                    <div className="flex items-center gap-2 bg-gradient-to-r bg-clip-text p-4 lg:p-6 text-white hover:scale-115 transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 hover:bg-clip-text hover:text-transparent mt-5">
                      <LogOut
                        size={25}
                        color="#fff"
                        className={`cursor-pointer`}
                      />
                      <button
                        onClick={logOutUser}
                        className={`text-[20px] font-bold cursor-pointer`}
                      >
                        Log-out
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default NewsDetails;
