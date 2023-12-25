import { GraduationCap } from "lucide-react";

interface FeatureProps {
  title: string;
  description: string;
  // icon: React.ReactNode;
  // Add other props like 'icon' if you have icons for each feature
}

const Feature: React.FC<FeatureProps> = ({ title, description }) => {
  return (
    <div className="text-center p-4">
      <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  );
};


const Features = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16 text-center mx-auto">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Why Every Student Needs a Portfolio</h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">Portfolios allow students to showcase their skills, projects, and achievements, providing a tangible demonstration of their growth and learning.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Feature 
            title="Showcase Your Skills"
            description="Highlight your academic and extracurricular projects to demonstrate your skills and competencies."
          />
          <Feature 
            title="Track Your Progress"
            description="Use your portfolio to reflect on your academic journey and monitor your personal and professional development."
          />
          <Feature 
            title="Stand Out to Employers"
            description="A well-crafted portfolio sets you apart in job and university applications, showcasing your initiative and dedication."
          />
          {/* Add more <Feature /> components as needed */}
        </div>
      </div>
    </section>
  );
};

export default Features;

{/* <div className="text-center">
  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"></div>
  <h3 className="mb-2 text-xl font-bold dark:text-white">
    Showcase Your Skills
  </h3>
  <p className="text-gray-500 dark:text-gray-400">
    Portfolios provide a platform to showcase your skills, projects,
    and achievements, making you stand out to potential employers or
    universities.
  </p>
</div> */}