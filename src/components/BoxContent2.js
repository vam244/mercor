import styles from "./BoxContent2.module.css";
const BoxContent2 = ({ vuesaxlinearfolder2, vuesaxoutlinemessage }) => {
  return (
    <div className={styles.cardMoodboard}>
      <img
        className={styles.unsplashbs1xgrkih4Icon}
        alt=""
        src="/unsplashbs-1xgrkih4@2x.png"
      />
      <img
        className={styles.unsplashkiqjfzbii9wIcon}
        alt=""
        src="/unsplashkiqjfzbii9w@2x.png"
      />
      <div className={styles.peopleMoodboard}>
        <img
          className={styles.peopleMoodboardChild}
          alt=""
          src="/ellipse-121@2x.png"
        />
        <button className={styles.vuesaxlinearfolder2Parent}>
          <img
            className={styles.vuesaxlinearfolder2Icon}
            alt=""
            src={vuesaxlinearfolder2}
          />
          <img
            className={styles.vuesaxoutlinemessageIcon}
            alt=""
            src={vuesaxoutlinemessage}
          />
          <div className={styles.comments}>9 comments</div>
          <div className={styles.files}>10 files</div>
        </button>
      </div>
      <div className={styles.moodboard}>Moodboard</div>
      <button className={styles.button}>. . .</button>
      <div className={styles.priorityLow}>
        <div className={styles.low}>Low</div>
      </div>
    </div>
  );
};

export default BoxContent2;
