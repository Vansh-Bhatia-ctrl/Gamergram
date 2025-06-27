import {
  Gamepad2,
  Bell,
  MessageCircleMore,
  ThumbsUp,
  MessageCircle,
  Bookmark,
  House,
  Bot,
  MessageCirclePlus,
  User,
  CirclePlus,
} from "lucide-react";
import { motion } from "motion/react";
import { format, formatDistanceToNow, differenceInHours } from "date-fns";
import Stories from "../components/Stories";
import MiniDiscussionPage from "../components/MiniDiscussionPage";
import { useEffect } from "react";
import { useState } from "react";
import CommentsSection from "../components/CommentsSection";

const FeedPage = () => {
  const [feedData, setFeedData] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [iconSize, setIconSize] = useState(22);
  const [gamingIconSize, setGamingIconSize] = useState(32);

  useEffect(() => {
    const getFeedPost = async () => {
      try {
        const token = localStorage.getItem("token");
        const req = await fetch("http://localhost:3000/users/feed", {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });

        const resp = await req.json();
        console.log(resp);
        setFeedData(resp);
      } catch (error) {
        console.log("Error loading feed.");
        throw Error("Something went wrong please try later.");
      }
    };

    getFeedPost();

    return () => getFeedPost();
  }, []);

  const renderCommentSection = (index) => {
    if (selectedPost === index) {
      setSelectedPost(null);
    } else {
      setSelectedPost(index);
    }
  };

  const likePost = async (postID) => {
    const token = localStorage.getItem("token");
    try {
      await fetch("http://localhost:3000/users/likes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          postID: postID,
        }),
      });

      console.log("Post liked Successfully.");
    } catch (error) {
      console.log("Error loading feed.");
      throw Error("Something went wrong please try later.");
    }
  };

  const dateFormat = (isoDate) => {
    const date = new Date(isoDate);
    const now = new Date();

    const hoursDifference = differenceInHours(now, date);

    if (hoursDifference < 24) {
      return formatDistanceToNow(date, { addSuffix: true }).replace(
        "about ",
        ""
      );
    } else {
      return format(date, "dd MMM yy");
    }
  };

  useEffect(() => {
    const adjustIconWidth = () => {
      if (window.innerWidth > 767) {
        setIconSize(28);
        setGamingIconSize(43);
      } else {
        setIconSize(22);
        setGamingIconSize(32);
        setGamingIconSize(32);
      }
    };

    adjustIconWidth();

    window.addEventListener("resize", adjustIconWidth);

    return () => window.removeEventListener("resize", adjustIconWidth);
  }, []);

  return (
    <>
      <div className="h-full w-full bg-gradient-to-b from-custompurple-100 to-customblue-100 md:flex overflow-hidden">
        {/*Sidebar*/}
        <div className="hidden md:block">
          <div className="h-full bg-transparent border-r-1 border-gray-600 w-[80px]"></div>
        </div>
        <div className="w-full md:ml-[30px]">
          {/*Stories and header*/}
          <div className="text-white">
            <div className="p-3 flex justify-between items-center md:hidden">
              <div className="flex gap-2 items-center cursor-pointer">
                <Gamepad2 size={gamingIconSize} color="#00f5c0" className="" />
                <h1 className="text-customgreen-100 orbitron text-xl font-semibold md:text-2xl">
                  Gamergram
                </h1>
              </div>

              <div className="flex gap-4 items-center md:hidden">
                <Bell size={iconSize} color="#6B7280" />
                <MessageCircleMore size={iconSize} color="#6B7280" />
              </div>
            </div>
           <Stories />  
          </div>

          {/*Main feed page*/}
          <div className="flex-1 overflow-y-auto scroll-smooth sm:p-20 custom-padding-1 custom-padding-2 custom-padding-3 sm:-mt-17 md:flex md:flex-col  ">
            {feedData.length > 0 ? (
              feedData.map((data, index) => (
                <div key={index} className="w-full mt-5">
                  <div className="ml-1 w-[100px] flex items-center justify-center mb-2 gap-2">
                    <img
                      src="/kratos.png"
                      className="rounded-full h-[50px] w-[50px] object-contain border-2 border-gray-500"
                    />
                    <p className="text-white text-[15px] orbitron">
                      {data.userId.Name}
                    </p>
                  </div>
                  <div className="w-full flex justify-center items-center bg-black md:w-full md:h-full md:-ml-[70px]">
                    <img
                      src={data.mediaURL}
                      alt="Post media"
                      loading="lazy"
                      className="w-full h-auto max-h-[600px] object-contain sm:h-full md:object-fill"
                    />
                  </div>
                  <div className="flex gap-7 mt-1 ml-1 sm:mt-2">
                    <div className="flex items-center gap-[3px]">
                      <ThumbsUp
                        size={28}
                        color="#00f5c0"
                        onClick={() => likePost(data._id)}
                      />
                      <p className="text-white text-[14px] font-semibold">
                        {data.likes.length}
                      </p>
                    </div>
                    <div className="flex items-center gap-[3px]">
                      <MessageCircle
                        size={28}
                        color="#00f5c0"
                        onClick={() => renderCommentSection(index)}
                      />
                      <p className="text-white text-[14px] font-semibold">
                        {data.comments.length}
                      </p>
                    </div>
                    <div className="flex items-center gap-[3px]">
                      <Bookmark size={28} color="#00f5c0" />
                    </div>
                  </div>
                  {selectedPost === index && (
                    <div
                      className="fixed inset-0 bg-opacity-60 z-40"
                      onClick={() => setSelectedPost(null)}
                    >
                      <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "0%" }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                        className="fixed bottom-0 left-0 w-full h-[70%] bg-gradient-to-b from-customblue-200 to-custompurple-100 rounded-t-2xl z-50 overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <CommentsSection commentData={data} />
                      </motion.div>
                    </div>
                  )}
                  <div className="flex gap-2 ml-2 mt-1 sm:mt-2">
                    <p className="text-white text-[15px] orbitron font-semibold  sm:text-[16px]">
                      {data.userId.userName}
                    </p>
                    <p className="text-white text-[15px]">{data.caption}</p>
                  </div>
                  <div className="ml-2 mb-7">
                    <p className="text-gray-600 text-[11px] mb-2 sm:text-[14px]">
                      {dateFormat(data.createdAt)}
                    </p>
                  </div>{" "}
                </div>
              ))
            ) : (
              <div className="w-screen h-screen flex -mt-30 items-center justify-center">
                <p className="text-white orbitron font-semibold">
                  Start following fellow gamers to see their posts.
                </p>
              </div>
            )}

            <div className="flex overflow-hidden mt-4">
              <MiniDiscussionPage />
              <MiniDiscussionPage />
            </div>
          </div>

          {/*Footer-cum-options*/}
          <div className="fixed -bottom-1 lef-0 w-screen h-[60px] bg-gradient-to-b from-custompurple-100 to-customblue-100 flex p-3 justify-between sm:justify-around md:hidden">
            <House size={32} color="#00f5c0" />
            <MessageCirclePlus size={32} color="#00f5c0" />
            <CirclePlus size={32} color="#00f5c0" />
            <Bot size={32} color="#00f5c0" />
            <User size={32} color="#00f5c0" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedPage;
