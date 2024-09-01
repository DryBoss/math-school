import HeaderSection from "./sections/header-section/Header-section";
import CourseSection from "./sections/course-section/Course-section";

import calculusIcon from "./../../../../assets/math-icons/calculus.png";
import linearAlgebraIcon from "./../../../../assets/math-icons/linear-algebra.png";
import statisticsIcon from "./../../../../assets/math-icons/statistics.png";

function HomePage() {
  const courseDetails = [
    [
      "#d9eee1",
      calculusIcon,
      "Calculus",
      "The study of change and motion using derivatives and integrals.",
      [
        "Lorem Ipsum is simply dummy text",
        "Lorem Ipsum is simply dummy text",
        "Lorem Ipsum is simply dummy text",
      ],
    ],
    [
      "#fff4a3",
      linearAlgebraIcon,
      "Linear Algebra",
      "The study of vectors, matrices, and linear transformations.",
      [
        "Lorem Ipsum is simply dummy text",
        "Lorem Ipsum is simply dummy text",
        "Lorem Ipsum is simply dummy text",
      ],
    ],
    [
      "#f3ecea",
      statisticsIcon,
      "Statistics",
      "The study of data collection, analysis, and interpretation.",
      [
        "Lorem Ipsum is simply dummy text",
        "Lorem Ipsum is simply dummy text",
        "Lorem Ipsum is simply dummy text",
      ],
    ],
  ];
  return (
    <>
      <HeaderSection />
      {courseDetails.map((courseDetail, index) => (
        <CourseSection
          key={index}
          color={courseDetail[0]}
          image={courseDetail[1]}
          name={courseDetail[2]}
          description={courseDetail[3]}
          details={courseDetail[4]}
        />
      ))}
    </>
  );
}

export default HomePage;
