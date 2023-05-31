import { FC } from "react";
import styles from "./divider.module.scss";

export const Divider: FC = () => {
  return <hr className={styles.divider} />;
};
