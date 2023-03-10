import styles from "./Title.module.css";

const Title = () => {
  return (
    <div>
        <h1 className={styles["my-title"]}>Meu título</h1>
        <h2 className={styles.mySubTitle}>Subtítulo legal</h2>
    </div>
  )
}

export default Title