import React from "react";
import "./MainSection.css";
const MainSection = () => {
  return (
    <div className="mainSectionWrapper">
      <div className="card1">
        <h3>Title</h3>
        <span>Author:</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur,
          repudiandae nobis aspernatur nostrum obcaecati, reiciendis quaerat
          veniam iusto tempora excepturi voluptas eos? Laboriosam, recusandae
          necessitatibus!
        </p>
      </div>

      <div className="card2">
        <h3>Title</h3>
        <span>Author:</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur,
          repudiandae nobis aspernatur nostrum obcaecati, reiciendis quaerat
          veniam iusto tempora excepturi voluptas eos? Laboriosam, recusandae
          necessitatibus!
        </p>
      </div>
      <div id="loaderWrapper">
        <span class="loader"></span>
      </div>
    </div>
  );
};

export default MainSection;
