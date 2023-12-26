import Card from "@/components/Card";

const TemplatePage = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 min-h-screen">
        <div className="flex flex-col justify-center  text-center ">
            <p className=" my-5 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                - Templates -
            </p>
            <p className=" mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Choose a template to get started
            </p>
        </div>
        {/* coolection of cards to show case  */}
        <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            <Card price={50} title="Template 1" description="This is a template" imageUrl="https://www.rmcad.edu/wp-content/uploads/2020/05/DigitalPortfolio.png" />
            <Card price={40} title="Template 1" description="This is a template" imageUrl="https://www.rmcad.edu/wp-content/uploads/2020/05/DigitalPortfolio.png" />
            <Card price={45} title="Template 1" description="This is a template" imageUrl="https://www.rmcad.edu/wp-content/uploads/2020/05/DigitalPortfolio.png" />
        </div>

        </div>
      </section>
    </div>
  );
};

export default TemplatePage;
