/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  large: {
    "--padding": "4px",
    "--height": "16px",
  },
  medium: {
    "--padding": "0",
    "--height": "12px",
  },
  small: {
    "--padding": "0",
    "--height": "8px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  return (
    <Wrapper style={styles}>
      <Bar
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <VisuallyHidden>{value}</VisuallyHidden>
      </Bar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: var(--padding);
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  /* To hide the UI issue that floats when progressbar reach 99% */
  overflow: hidden;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: ${(props) => props["aria-valuenow"] + "%"};
  height: var(--height);
  border-radius: ${(props) =>
    props["aria-valuenow"] === 100 ? "4px" : "4px 0 0 4px"};
`;

export default ProgressBar;
