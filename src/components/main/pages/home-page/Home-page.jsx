import HeaderSection from "./sections/header-section/Header-section";
import CourseSection from "./sections/course-section/Course-section";

import calculusIcon from "./../../../../assets/math-icons/calculus.png";
import linearAlgebraIcon from "./../../../../assets/math-icons/linear-algebra.png";
import statisticsIcon from "./../../../../assets/math-icons/statistics.png";

function HomePage() {
  const courseDetails = [
    [calculusIcon, "Calculus"],
    [linearAlgebraIcon, "Linear Algebra"],
    [statisticsIcon, "Statistics"],
  ];
  return (
    <>
      <HeaderSection />
      {courseDetails.map((courseDetail, index) => (
        <CourseSection
          key={index}
          image={courseDetail[0]}
          name={courseDetail[1]}
        />
      ))}
    </>
  );
}

export default HomePage;
