import { motion } from "motion/react";
import { SendHorizontal } from "lucide-react";
import { useState } from "react";

const CommentsSection = ({ commentData }) => {
  const [comment, setComment] = useState("");

  const postCommentToDB = async (postID, userName) => {
    const token = localStorage.getItem("token");
    try {
      await fetch("http://localhost:3000/users/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          postID: postID,
          text: comment,
          userName: userName,
        }),
      });
      console.log("Comment added on the post.");
    } catch (error) {
      console.log("Error adding comment.");
      throw Error("Something went wrong please try later.");
    }
  };

  return (
    <motion.div>
      <div className="bg-gradient-to-b from-customblue-200 to-custompurple-100 h-[600px] w-screen rounded-t-2xl mt-4 fixed bottom-0 left-0 flex flex-col">

        {/* Comments Header */}
        <div className="flex items-center justify-center">
          <h3 className="text-white orbitron font-semibold mt-2 border-b-2 border-gray-600">
            Comments
          </h3>
        </div>

        {/* Scrollable Comments Area */}
        <div className="flex-1 overflow-y-auto px-2 mt-2">
          {commentData.comments.length > 0 ? (
            commentData.comments.map((comment, index) => (
              <div key={index}>
                <div className="flex items-start gap-2 mt-3">
                  <div className="w-[35px] h-[35px] flex-shrink-0 rounded-full overflow-hidden border-2 border-gray-600">
                    <img
                      src="/kratos.png"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex flex-col">
                    <div className="flex items-center gap-1 mt-1">
                      <p className="text-white text-[13px] orbitron">
                        {comment.userID.userName}
                      </p>
                    </div>
                    <div className="mt-1 max-w-[90vw]">
                      <p className="text-white text-[13px] orbitron break-words overflow-ellipsis line-clamp-2">
                        {comment.text}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center mt-2">
                  <p className="text-gray-500 text-[12px]">Reply</p>
                </div>
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center mt-10">
              <p className="text-white font-semibold orbitron">
                No comments yet.
              </p>
            </div>
          )}
        </div>

        {/* Fixed Input Bar */}
        <div className="flex items-center justify-center gap-2 ml-2 p-2">
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Enter a comment."
            className="placeholder:text-gray-400 border-2 border-gray-800 rounded-2xl p-2 w-[370px] text-white bg-transparent outline-none"
          />
          <SendHorizontal
            size={28}
            color="#00f5c0"
            onClick={() =>
              postCommentToDB(commentData._id, commentData.userId.userName)
            }
            className="cursor-pointer"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default CommentsSection;
