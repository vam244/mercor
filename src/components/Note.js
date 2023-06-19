import { useMemo } from "react";
import styles from "./Note.module.css";
const Box = ({
  thinkerspace,
  collec,
  collecx_d,
  updatedOutlineMessage,
   discussionSection,
   styledFolder,
  files,
  brainstorming,
  brainstormingTop,
  propTop,
  brainstormingBringsTeamMe,
  priorityLowTop,
  priorityLowLeft,
  priorityLowBackgroundColor,
  low,
  lowColor,
  frame629x_d,
  framex_d,
  cardBrainstormingOverflow,
  cardBrainstormingFlexShrink,
  framex_d1,
  brainstormingBringsTeamMeColor,
  priorityLowx_d,
}) => {
  const peopleBrainstormingStyle = useMemo(() => {
    return {
      gap: thinkerspace,
    };
  }, [thinkerspace]);

  const groupIconStyle = useMemo(() => {
    return {
      x_d: collecx_d,
    };
  }, [collecx_d]);

  const brainstormingStyle = useMemo(() => {
    return {
      top: brainstormingTop,
    };
  }, [brainstormingTop]);

  const buttonStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const priorityLowStyle = useMemo(() => {
    return {
      top: priorityLowTop,
      left: priorityLowLeft,
      backgroundColor: priorityLowBackgroundColor,
      x_d: priorityLowx_d,
    };
  }, [
    priorityLowTop,
    priorityLowLeft,
    priorityLowBackgroundColor,
    priorityLowx_d,
  ]);

  const lowStyle = useMemo(() => {
    return {
      color: lowColor,
    };
  }, [lowColor]);

  const frameButtonStyle = useMemo(() => {
    return {
      x_d: frame629x_d,
    };
  }, [frame629x_d]);

  const frameStyle = useMemo(() => {
    return {
      x_d: framex_d,
    };
  }, [framex_d]);

  const cardBrainstormingStyle = useMemo(() => {
    return {
      overflow: cardBrainstormingOverflow,
      flexShrink: cardBrainstormingFlexShrink,
    };
  }, [cardBrainstormingOverflow, cardBrainstormingFlexShrink]);

  const frame1Style = useMemo(() => {
    return {
      x_d: framex_d1,
    };
  }, [framex_d1]);

  const brainstormingBringsTeamStyle = useMemo(() => {
    return {
      color: brainstormingBringsTeamMeColor,
    };
  }, [brainstormingBringsTeamMeColor]);

  return (
    <div className={styles.cardBrainstorming} style={cardBrainstormingStyle}>
      <div
        className={styles.peopleBrainstorming}
        style={peopleBrainstormingStyle}
      >
        <img
          className={styles.peopleBrainstormingChild}
          alt=""
          src={collec}
          style={groupIconStyle}
        />
        <button className={styles.frameParent} style={frameButtonStyle}>
          <div className={styles.frame} style={frameStyle}>
            <img
              className={styles.updatedOutlineMessageIcon}
              alt=""
              src={updatedOutlineMessage}
            />
            <div className={styles. discussionSection}>{ discussionSection}</div>
          </div>
          <div className={styles.frame1} style={frame1Style}>
            <img
              className={styles.updatedOutlineMessageIcon}
              alt=""
              src={ styledFolder}
            />
            <div className={styles. discussionSection}>{files}</div>
          </div>
        </button>
      </div>
      <div className={styles.brainstorming} style={brainstormingStyle}>
        {brainstorming}
      </div>
      <button className={styles.button} style={buttonStyle}>
        . . .
      </button>
      <div
        className={styles.brainstormingBringsTeam}
        style={brainstormingBringsTeamStyle}
      >
        {brainstormingBringsTeamMe}
      </div>
      <div className={styles.priorityLow} style={priorityLowStyle}>
        <div className={styles.low} style={lowStyle}>
          {low}
        </div>
      </div>
    </div>
  );
};

export default Box;
