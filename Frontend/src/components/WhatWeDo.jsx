const services = [
  {
    title: "Free Education",
    desc: "We conduct regular classes for children who don’t have access to schools.",
    icon: "📚",
  },
  {
    title: "Skill Development",
    desc: "Workshops on art, crafts, digital skills, hygiene, and communication.",
    icon: "🛠️",
  },
  {
    title: "Community Support",
    desc: "We engage parents, women, and youth for holistic community impact.",
    icon: "🤝",
  },
];

const WhatWeDo = () => (
  <section className="bg-gray-100 py-12 px-6">
    <h2 className="text-3xl font-bold text-center mb-10">What We Do</h2>
    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {services.map((service, index) => (
        <div key={index} className="bg-white p-6 rounded shadow-md text-center">
          <div className="text-4xl mb-3">{service.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
          <p className="text-gray-600">{service.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default WhatWeDo;
