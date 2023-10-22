import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ThemeColorIdentityDefaultIcon.module.css";

type ThemeColorIdentityDefaultIconType = {
  themeColorIdentityDefault?: string;

  /** Style props */
  themeColorIdentityDefaultWidth?: CSSProperties["width"];
  themeColorIdentityDefaultHeight?: CSSProperties["height"];
  themeColorIdentityDefaultPosition?: CSSProperties["position"];
  themeColorIdentityDefaultFlexShrink?: CSSProperties["flexShrink"];
};

const ThemeColorIdentityDefaultIcon: FunctionComponent<
  ThemeColorIdentityDefaultIconType
> = ({
  themeColorIdentityDefault,
  themeColorIdentityDefaultWidth,
  themeColorIdentityDefaultHeight,
  themeColorIdentityDefaultPosition,
  themeColorIdentityDefaultFlexShrink,
}) => {
  const themeColorIdentityDefaultIconStyle: CSSProperties = useMemo(() => {
    return {
      width: themeColorIdentityDefaultWidth,
      height: themeColorIdentityDefaultHeight,
      position: themeColorIdentityDefaultPosition,
      flexShrink: themeColorIdentityDefaultFlexShrink,
    };
  }, [
    themeColorIdentityDefaultWidth,
    themeColorIdentityDefaultHeight,
    themeColorIdentityDefaultPosition,
    themeColorIdentityDefaultFlexShrink,
  ]);

  return (
    <img
      className={styles.themecolorIdentitydefaultIcon}
      alt=""
      src={themeColorIdentityDefault}
      style={themeColorIdentityDefaultIconStyle}
    />
  );
};

export default ThemeColorIdentityDefaultIcon;
