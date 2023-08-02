import ColorTypeEnum from "@/src/app/api/colors/ColorTypeEnum";
import styles from "./Nail.module.css";

interface NailProps {
  hex: string;
  type: string;
}

export default function Nail({ hex, type }: NailProps) {
  let classNames = `${styles.nail}`;

  if (type === ColorTypeEnum.NEON) {
    classNames += ` ${styles.neon}`;
  } else if (type === ColorTypeEnum.JELLY) {
    classNames += ` ${styles.jelly}`;
  } else if (type === ColorTypeEnum.TRANSLUCENT) {
    classNames += ` ${styles.translucent}`;
  }

  return (
    <div className={classNames} style={{ backgroundColor: hex }}>
      <div className={styles.nailColor}></div>
      <div className={styles.nailGlitter}></div>
    </div>
  );
}
