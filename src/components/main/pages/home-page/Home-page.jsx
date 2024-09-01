import HeaderSection from "./sections/header-section/Header-section";
import CourseSection from "./sections/course-section/Course-section";

import calculusIcon from "./../../../../assets/math-icons/calculus.png";
import linearAlgebraIcon from "./../../../../assets/math-icons/linear-algebra.png";
import statisticsIcon from "./../../../../assets/math-icons/statistics.png";

function HomePage() {
  const courseDetails = [
    [
      "#00c49a",
      calculusIcon,
      "Calculus",
      [
        "Lorem Ipsum is simply dummy text",
        "Lorem Ipsum is simply dummy text",
        "Lorem Ipsum is simply dummy text",
      ],
    ],
    [
      "#f8e16c",
      linearAlgebraIcon,
      "Linear Algebra",
      [
        "Lorem Ipsum is simply dummy text",
        "Lorem Ipsum is simply dummy text",
        "Lorem Ipsum is simply dummy text",
      ],
    ],
    [
      "#ffc2b4",
      statisticsIcon,
      "Statistics",
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
          details={courseDetail[3]}
        />
      ))}
    </>
  );
}

export default HomePage;
