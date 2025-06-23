let images = [
  { src: "/kratos.png", name: "Kratos" },
  { src: "/altair.png", name: "Altair" },
  { src: "/nathandrake.png", name: "Nathan" },
  { src: "/wukong.png", name: "Wukong" },
  { src: "/jinsakai.png", name: "Jin" },
  { src: "/kratos.png", name: "Kratos" },
  { src: "/wukong.png", name: "Wukong" },
  { src: "/jinsakai.png", name: "Jin" },
];

const Stories = () => {
  return (
    <>
      <div className="overflow-x-hidden mt-2">
        <div className="flex gap-4 w-max ml-2">
          {images.map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <img
                src={img.src}
                alt={img.name}
                className="w-[60px] h-[60px] rounded-full border-3 border-customgreen-100 object-contain bg-transparent sm:h-[80px] sm:w-[80px]"
              />
              <p className="text-sm mt-1 text-gray-300">{img.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Stories;
