import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <div className={css.container}>
      <p className={css.errMessage}>Something went wrong, try again later!</p>
    </div>
  );
}
