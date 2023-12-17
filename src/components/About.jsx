import img from "../assets/img/about.png";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img src={img} alt="img" />

      <div className="space-y-4 lg:pt-14">
        <h1 className="font-semibold text-4xl text-center md:text-start">
          Why Choose Us?
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          accusamus ratione hic saepe totam quibusdam iste itaque adipisci
          voluptates error corrupti ut fugiat sunt, consectetur cumque similique
          sit. Culpa, natus. Temporibus nostrum repellat sequi enim perferendis
          tempore debitis aspernatur harum?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum neque ab
          dicta tempora repudiandae aspernatur dignissimos impedit, laudantium
          adipisci eaque.
        </p>
        <div className="flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
