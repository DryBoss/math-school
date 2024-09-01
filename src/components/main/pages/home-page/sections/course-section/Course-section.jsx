import styles from "./Course-section.module.css";

function CourseSection({ color, image, name, description, details }) {
  const style = {
    backgroundColor: color,
  };

  return (
    <div className={styles.course} style={style}>
      <div className={styles.courseTitle}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p className={styles.description}>{description}</p>
        <button>Learn {name}</button>
      </div>
      <div className={styles.courseDetails}>
        {details.map((detail, index) => {
          return <li key={index}>{detail}</li>;
        })}
      </div>
    </div>
  );
}

export default CourseSection;
