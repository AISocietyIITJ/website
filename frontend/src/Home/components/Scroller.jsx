import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Scroller = () => {
  return (
    <div className="bg-#000435">
      {/* <div className="flex h-48 items-center justify-center"> */}
        {/* <span className="text-3xl font-semibold uppercase text-white">
          Random Title
        </span> */}
        <h2 className="flex justify-center mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Memories
        </h2>
        <p className="mx-4 flex justify-center text-center mt-8 leading-relaxed text-gray-400">
          We plan amazing session, where seniors guide newbies and introduce them to the world of 
          Machine Learning and Artificial Intelligence.
        </p>
      {/* </div> */}
      <HorizontalScrollCarousel />

    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-#000435">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-12 z-10 grid place-content-center">
        {/* <p className="mt-64 bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p> */}
      </div>
    </div>
  );
};

export default Scroller;

const cards = [
  {
    url: "https://media.licdn.com/dms/image/D4D22AQGZbvHY-GGbsw/feedshare-shrink_800/0/1692135023365?e=1724889600&v=beta&t=SSpZ44iP4THH5jHlX7gc9LW74PM7mjwgiictDlnTgNo",
    title: "Title 1",
    id: 1,
  },
  {
    url: "https://media.licdn.com/dms/image/D4D22AQGL3vMjmtOuVQ/feedshare-shrink_800/0/1699714109036?e=1724889600&v=beta&t=y5uBXxpIKj4jTcr-3sDZeTKDVTmxuauz36mItcJJrLk",
    title: "Title 2",
    id: 2,
  },
  {
    url: "https://media.licdn.com/dms/image/D4D22AQGJ1USdCJxSqA/feedshare-shrink_2048_1536/0/1702979782886?e=1724889600&v=beta&t=VYXb5bPynZvOI6mGhY6PeDNNexv9BEk3LrykpVfe6Yo",
    title: "Title 3",
    id: 3,
  },
  {
    url: "https://media.licdn.com/dms/image/D4D22AQGh5cFMkwNLrw/feedshare-shrink_2048_1536/0/1702979779474?e=1724889600&v=beta&t=MWpz-CzqzHuuke5azBlNeCThES_u5TEfjQzdz95X8aQ",
    title: "Title 4",
    id: 4,
  },
  {
    url: "https://media.licdn.com/dms/image/D4D22AQFC9hG7s0Vxdg/feedshare-shrink_2048_1536/0/1706550930999?e=1724889600&v=beta&t=Bd09g_09uVbEMJC-0fIeWqao9yZfhUQ7E9EamJxtqzg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "https://media.licdn.com/dms/image/D4D22AQHGjWPrMR5hlw/feedshare-shrink_2048_1536/0/1706550930816?e=1724889600&v=beta&t=1b0JXRSFcxtRa8JFMWTS3GnUFWNUARvR_Ms-Rm0K1-g",
    title: "Title 6",
    id: 6,
  },
  {
    url: "https://media.licdn.com/dms/image/D4D22AQEfCFho6tcj7Q/feedshare-shrink_800/0/1720370229656?e=1724889600&v=beta&t=wkEyI0y5E7X9JdwtKhtybQtsoeNiqy-e_JmjS0jMRp0",
    title: "Title 7",
    id: 7,
  },
];