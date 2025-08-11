import { Calendar, Heart, Menu, MessageCircle, Timer } from "lucide-react";
import { useParams } from "react-router-dom";
import { format, parseISO } from "date-fns";
import useGameStore from "../store/useGameStore";
import { useEffect } from "react";
import useUIStore from "../store/useUIStore";

const NewsDetails = () => {
  const { newsID } = useParams();

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
              <Menu size={19} color="#fff" className="cursor-pointer" />
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
                <button className="text-white flex  items-center gap-2 mt-7 px-4 py-2 bg-neutral-800 rounded-xl cursor-pointer hover:bg-neutral-700 hover:scale-103 transition-all duration-500 ease-in-out">
                  <Heart size={22} />
                  <p>820</p>
                </button>

                <button className="text-white flex  items-center gap-2 mt-7 px-4 py-2 bg-neutral-800 rounded-xl cursor-pointer hover:bg-neutral-700 hover:scale-103 transition-all duration-500 ease-in-out">
                  <MessageCircle size={22} />
                  <p>634</p>
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
      </div>
    </>
  );
};

export default NewsDetails;
