import css from "./BroderAnimation.module.css";

export const BorderAnimation = () => {
  return (
    <div className="App">
      <header className={css.header}>
        <div className={css.container}>
          <h2 className={css.text}>Rotating border</h2>
        </div>
      </header>
    </div>
  );
};
