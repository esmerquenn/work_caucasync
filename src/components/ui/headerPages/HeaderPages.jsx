import React from "react";
function HeaderPages({image, title, text }) {


  return (
    <section className={`py-16 px-4 md:px-6 lg:px-8 text-white ${image}` }>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl text-green-100 max-w-2xl mx-auto">{text}</p>
      </div>
    </section>
  );
}

export default HeaderPages;
