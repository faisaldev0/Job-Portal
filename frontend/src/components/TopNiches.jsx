const TopNiches = () => {
  const services = [
    {
      id: 1,
      service: "Software Development",
      description:
        "Tailored software development services to design, build, and enhance applications, ensuring performance, scalability, and seamless integration across platforms.",
    },
    {
      id: 2,
      service: "Web Development",
      description:
        "End-to-end web development solutions, from crafting modern, responsive designs to building robust back-end systems, delivering dynamic and secure websites.",
    },
    {
      id: 3,
      service: "Data Science",
      description:
        "Data-driven solutions that unlock the full potential of your data, offering predictive analytics, machine learning models, and strategic insights to drive business growth.",
    },
    {
      id: 4,
      service: "Cloud Computing",
      description:
        "Comprehensive cloud solutions to optimize your infrastructure, offering scalable storage, efficient data processing, and seamless cloud migration with maximum security.",
    },
    {
      id: 5,
      service: "DevOps",
      description:
        "DevOps consulting and automation services that foster collaboration between development and operations, accelerating delivery pipelines and boosting software reliability.",
    },
    {
      id: 6,
      service: "Mobile App Development",
      description:
        "Cutting-edge mobile app development for iOS and Android, delivering sleek, user-focused apps that enhance engagement and provide a seamless mobile experience.",
    },
  ];

  return (
    <>
      <section className="services">
        <h3>Top Niches</h3>
        <div className="grid">
          {services.map((element) => {
            return (
              <div className="card" key={element.id}>
                <h4>{element.service}</h4>
                <p>{element.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default TopNiches;
