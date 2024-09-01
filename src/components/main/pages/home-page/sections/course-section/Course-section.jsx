function CourseSection({ image, name }) {
  return (
    <div className="course">
      <img src={image} alt="" />
      {name}
    </div>
  );
}

export default CourseSection;
