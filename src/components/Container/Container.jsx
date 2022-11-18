import styles from "./Container.module.css";

const Container = (props) => {
    const { title, text } = props;

    return (
        <article className={styles.container}>
            <h2>{title}</h2>

            <p>{text}</p>
        </article>
    );
};

export default Container;