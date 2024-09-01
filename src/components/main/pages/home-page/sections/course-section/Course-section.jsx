import styles from "./Course-section.module.css";

function CourseSection({ color, image, name, details }) {
  const style = {
    backgroundColor: color,
  };

  return (
    <div className={styles.course} style={style}>
      <div className={styles.courseTitle}>
        <img src={image} alt="" />
        <h3>{name}</h3>
        <button>Learn</button>
      </div>
      <div className={styles.courseDetails}>
        <h4>Features :</h4>
        {details.map((detail, index) => {
          return <li key={index}>{detail}</li>;
        })}
      </div>
    </div>
  );
}

export default CourseSection;
