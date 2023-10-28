import React from "react";
import { Fade } from "react-reveal";

const Highlight = () => {
  return (
    <div
      className="w-full px-5 md:px-20 lg:px-32 py-10"
      style={{ background: "#404042" }}
    >
      <Fade bottom>
        <p className="text-xl md:text-3xl font-thin text-white text-justify md:text-right lg:text-center">
          “Program BangunTarakota akan mengubah lahan{" "}
          <span className="font-bold">non-produktif</span> kamu jadi lahan{" "}
          <span className="font-bold">produktif</span>, dan yang pasti cuan juga
          untuk kamu!”
        </p>
      </Fade>
    </div>
  );
};

export default Highlight;
