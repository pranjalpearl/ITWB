import React from "react";

const Video = () => {
  return (
    <div>
      <div
        className="play-video rtbgprefix-full bg-hide-md"
        style={{ backgroundImage: "url('/images/backgrounds/videobg.png')" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-9 mx-auto">
              <div
                className="play-video-box rtbgprefix-cover"
                style={{
                  backgroundImage:
                    "url('/images/backgrounds/play-video-bg.png')",
                }}
              >
                <a
                  href="https://vimeo.com/310740632"
                  className="rt-btn rt-video-light playVideo"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
