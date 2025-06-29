import { useEffect, useState } from "react";
import { Scrollbar } from "react-scrollbars-custom";

let images = [
  { src: "/kratos.png", name: "Kratos" },
  { src: "/altair.png", name: "Altair" },
  { src: "/nathandrake.png", name: "Nathan" },
  { src: "/wukong.png", name: "Wukong" },
  { src: "/jinsakai.png", name: "Jin" },
  { src: "/kratos.png", name: "Kratos" },
  { src: "/wukong.png", name: "Wukong" },
  { src: "/jinsakai.png", name: "Jin" },
  { src: "/wukong.png", name: "Wukong" },
  { src: "/jinsakai.png", name: "Jin" },
  { src: "/kratos.png", name: "Kratos" },
  { src: "/altair.png", name: "Altair" },
  { src: "/nathandrake.png", name: "Nathan" },
  { src: "/wukong.png", name: "Wukong" },
  { src: "/jinsakai.png", name: "Jin" },
  { src: "/kratos.png", name: "Kratos" },
  { src: "/wukong.png", name: "Wukong" },
  { src: "/jinsakai.png", name: "Jin" },
  { src: "/wukong.png", name: "Wukong" },
  { src: "/jinsakai.png", name: "Jin" },
];

const Stories = () => {
  const [height, setHeight] = useState(140);

  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth >= 600 && window.innerWidth <= 638) {
        setHeight(100);
      } else if (window.innerWidth < 767) {
        setHeight(113);
      } else {
        setHeight(140);
      }
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <Scrollbar style={{ width: "100%", height: `${height}px` }} noScrollY>
      <div className="flex gap-4 px-4 w-max md:mt-4">
        {images.map((img, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <img
              src={img.src}
              alt={img.name}
              className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] rounded-full border-[3px] border-customgreen-100 object-contain"
            />
            <p className="text-sm mt-1 text-gray-300">{img.name}</p>
          </div>
        ))}
      </div>
    </Scrollbar>
  );
};

export default Stories;
