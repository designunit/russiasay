import { CSSProperties } from "react";

export const Burger: React.FC<{ styles?: CSSProperties  }> = ({ styles = { fill: 'white' } }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48px" height="48px" style={styles}><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
)