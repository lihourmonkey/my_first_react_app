
const About = () => {
  return (
    <div className="my-10 max-w-[90%] lg:max-w-3xl mx-auto font-rubik">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-4">
        <div>
          <img
            className="rounded-lg w-full h-full"
            src="./about_us.jpg"
            alt="About us image"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">Our Story</h1>
          <p className="text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium necessitatibus, libero sunt iste veritatis est officiis,
            ea ratione, distinctio maxime eos laborum alias cupiditate nostrum
            odit odio dolore sapiente culpa aperiam assumenda tenetur.
            Dignissimos laboriosam ipsam recusandae. Dolores alias quaerat
            deleniti eligendi similique minus distinctio! Deleniti iusto iure
            recusandae quisquam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
