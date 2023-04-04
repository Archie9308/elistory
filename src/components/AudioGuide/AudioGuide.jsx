import styles from "./AudioGuide.module.css";
import arrow from "./arrow-back.png";

function AudioGuide() {
  return (
    <div className={styles.AudioGuide}>
      <img className={styles.Logo} src={arrow} alt="back" />
      <h1 className={styles.Title}>Выберите локацию</h1>
      <div>
        <button className={styles.Buttons}>
          Туристические объекты Республики
        </button>
      </div>
      <div>
        <button className={styles.Buttons}>Достопримечательности Элисты</button>
      </div>
      <p className={styles.Parag}>
        В 1997—1998 годах в Элисте проходили четыре международных
        конкурса-бьеннале под названиями «Великий шёлковый путь», «Человек и
        природа глазами Востока», «Мир Давида Кугультинова» и «Планета Каисса».
        Во время этих симпозиумов скульпторы из различных стран мира в рамках
        конкурса установили свои скульптуры на улицах города. Некоторые
        скульптуры были созданы вне рамок международных конкурсов по инициативе
        калмыцких скульпторов.
      </p>
    </div>
  );
}

export default AudioGuide;