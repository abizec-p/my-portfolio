import yak from "../files/illustration.png";
import Advertisement from "../files/advert.png";
import "./project.css";
export default function Projects() {
  return (
    <section>
      <div className="proectContainer">
        <div className="projectImage">
          <img src={yak} alt="" />
        </div>
        <div className="projectDetail left ">
          <h1>Himalayan yak Illustration</h1>
          <p>
            <i>2024/08/21</i>
          </p>
          <p>
            This project was made for my college assignment for an beer can
            design, where i did a himalayan yak beer.{" "}
          </p>
        </div>
      </div>
      <div className="proectContainer second-project">
        <div className="projectDetail right">
          <h1>
            Himalayan yak Beer 
          </h1>
          <p>
            <i>2024/08/21</i>
          </p>
          <p>
            This project was made for my college assignment for an beer can
            design, where i did a himalayan yak beer.
          </p>
        </div>
        <div className="projectImage">
          <img src={Advertisement} alt="" />
        </div>
      </div>
    </section>
  );
}
