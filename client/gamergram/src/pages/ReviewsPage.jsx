import { useEffect, useState } from "react";
import Header from "../components/Header";
import { Star, X } from "lucide-react";

const ReviewsPage = () => {
  const [modalIsOpen, setModalIsopen] = useState(false);
  const [userInput, setUserInput] = useState({
    gameName: "",
    rating: "",
    review: "",
  });
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/getreviews/getreviews`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          console.log("Error fetching reviews.");
          return;
        }

        const data = await response.json();
        console.log(data);
        setReviews(data);
      } catch (error) {
        console.log("Something went wrong, please try again", error.message);
      }
    };

    fetchReviews();
  }, []);

  const handleAddReview = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/save-to-db/review`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            gameName: userInput.gameName,
            rating: userInput.rating,
            review: userInput.review,
          }),
        }
      );

      if (!response.ok) {
        console.log("Error adding review.");
        return;
      }

      const newReview = await response.json();

      setReviews((prevReview) => [...prevReview, newReview]);
      setUserInput({
        gameName: "",
        rating: "",
        review: "",
      });
      console.log(newReview);
    } catch (error) {
      console.log("Error adding the review: ", error.message);
    }
  };

  return (
    <>
      <div className="bg-neutral-900 min-h-screen w-screen overflow-x-hidden">
        <div>
          <div>
            <Header />
          </div>

          <div className="p-6 md:max-w-7xl md:mx-auto">
            {/*Sub-header*/}
            <div className="space-y-9">
              <h1 className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent text-4xl font-extrabold tracking-wide">
                Game Reviews
              </h1>
              <button
                onClick={() => setModalIsopen(true)}
                className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-5 py-3 rounded-xl transition shadow-lg cursor-pointer"
              >
                + Add Review
              </button>
            </div>

            {/*Review Cards*/}
            <div className="mt-9 flex flex-wrap gap-4 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3">
              {reviews.map((review) => (
                <div className="bg-neutral-800 border border-neutral-700 h-auto w-auto p-5 rounded-xl">
                  <div className="flex items-start gap-2">
                    <div className="w-14 h-14 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                      {review.userName?.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex items-start space-y-1 flex-col ">
                      <p className="text-xl font-bold text-white tracking-wide">
                        {review.userName}
                      </p>
                      <p className="text-md font-bold text-gray-300 tracking-wide">
                        {review.gameName}
                      </p>
                      <div className="flex">
                        {" "}
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={20}
                            className={
                              i < Math.round(review.rating)
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-600"
                            }
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-white mt-4 text-sm">{review.review}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {modalIsOpen && (
          <div className="fixed inset-0 bg-black/80 min-h-screen w-screen overflow-x-hidden flex items-center justify-center">
            <div className="bg-neutral-800 border border-neutral-700 p-4 rounded-xl h-auto">
              <div className="flex  items-center justify-between">
                <p className="text-white font-bold text-xl">Add Review</p>
                <X
                  onClick={() => setModalIsopen(false)}
                  color="#fff"
                  className="cursor-pointer"
                />
              </div>
              <div className="mt-7 w-[100%]">
                <div className=" flex flex-wrap gap-3">
                  <input
                    value={userInput.gameName}
                    onChange={(e) =>
                      setUserInput({ ...userInput, gameName: e.target.value })
                    }
                    className="bg-neutral-700/50 w-full p-4 border border-neutral-500 rounded-lg placeholder:text-gray-300 placeholder:text-lg focus:outline-none focus:border-purple-500  text-white"
                    placeholder="Enter game name..."
                  />

                  <input
                    value={userInput.rating}
                    onChange={(e) =>
                      setUserInput({ ...userInput, rating: e.target.value })
                    }
                    className="bg-neutral-700/50 w-full p-4 border border-neutral-500 rounded-lg placeholder:text-gray-300 placeholder:text-lg focus:outline-none focus:border-purple-500 text-white"
                    placeholder="Ente rating."
                  />

                  <textarea
                    value={userInput.review}
                    onChange={(e) =>
                      setUserInput({ ...userInput, review: e.target.value })
                    }
                    className="bg-neutral-700/50 text-white w-full h-50 p-4 rounded-lg mb-4 focus:outline-none border border-neutral-500 placeholder:text-gray-300 placeholder:text-lg focus:border-purple-500  "
                    placeholder="Enter review..."
                  />
                </div>
                <button
                  onClick={handleAddReview}
                  className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-5 py-2 rounded-lg transition shadow-lg cursor-pointer "
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ReviewsPage;
