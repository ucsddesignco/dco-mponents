import React from "react";
import styles from "./Label.module.scss";

export interface LabelProps {
  /**  Sets the size*/
  size?: "medium" | "small";
  /**  Sets the text color */
  foregroundColor?: string;
  /**  Sets the background color */
  backgroundColor?: string;
  /**  Sets the label text */
  children: string;
}

const Label = ({
  size = "medium",
  foregroundColor = "#ffffff",
  backgroundColor = "#000000",
  children,
}: LabelProps) => {
  const padding = size === "medium" ? 12 : 8;
  const fontSize = size === "medium" ? 16 : 12;

  return (
    <div
      className={styles.Label}
      style={{
        color: foregroundColor,
        background: backgroundColor,
        padding,
        fontSize,
      }}
    >
      {children}
    </div>
  );
};

export default Label;
