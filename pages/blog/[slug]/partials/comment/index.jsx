import Button from "../../../../../components/button";
import styles from "./comment.module.css";

export default function Comment({ comment, createdAt, author }) {
  return (
    <div className={styles.container}>
      <p>{comment}</p>
      <p className={styles.author}>{author}</p>
      <time className={styles.date}>{createdAt}</time>

      <div className={styles.buttonContainer}>
        <Button>Delete</Button>
      </div>
    </div>
  );
}