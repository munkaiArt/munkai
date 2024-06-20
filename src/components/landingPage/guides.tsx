import React from "react";

const Guides: React.FC = () => {
  return (
    <div>
      <section className="guide">
        <style>{`
          .video-container {
            overflow: hidden;
            position: relative;
            width: calc(100% - 3rem);
            margin-left: auto;
            margin-right: auto;
            max-width: 1000px;
          }

          .video-container::after {
            padding-top: 56.25%;
            display: block;
            content: "";
          }

          .video-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
        `}</style>
        <h1 className="heading text-center mt-10 mb-6 text-2xl font-bold">
          Meet with Munkai
        </h1>
        <div className="flex justify-center">
          <div className="video-container">
            <iframe
              style={{ maxWidth: "100%" }}
              src="https://www.youtube.com/embed/55wdWAoQrac"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Guides;
