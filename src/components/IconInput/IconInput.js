import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    fontSize: 14 / 16,
    iconSize: 16,
    borderThickness: 1,
    height: 24,
    paddingLeft: 24,
  },
  large: {
    fontSize: 18 / 16,
    iconSize: 24,
    borderThickness: 2,
    height: 36,
    paddingLeft: 32,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = STYLES[size];

  // TODO: VAlidate styles for error

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Ico
        id={icon}
        size={styles.iconSize}
        strokeWidth={styles.borderThickness}
        style={{ "--size": styles.iconSize + "px" }}
      />
      <Input
        style={{
          "--width": width + "px",
          "--height": styles.height + "px",
          "--border-thickness": styles.borderThickness + "px",
          "--font-size": styles.fontSize + "rem",
          "--padding-left": styles.paddingLeft + "px",
        }}
        placeholder={placeholder}
        type="text"
        aria-label={label}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  width: max-content;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const Ico = styled(Icon)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto;
`;

const Input = styled.input`
  width: var(--width);
  height: var(--height);
  font-size: var(--font-size);
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  padding: 4px;
  padding-left: var(--padding-left);
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

export default IconInput;
