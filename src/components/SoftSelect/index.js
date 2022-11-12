import { forwardRef } from "react";

import PropTypes from "prop-types";

import Select from "react-select";

import colors from "assets/theme/base/colors";

import styles from "components/SoftSelect/styles";

const SoftSelect = forwardRef(({ size, error, success, ...rest }, ref) => {
  const { light } = colors;

  return (
    <Select
      {...rest}
      ref={ref}
      styles={styles(size, error, success)}
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary25: light.main,
          primary: light.main,
        },
      })}
    />
  );
});

// Setting default values for the props of SoftSelect
SoftSelect.defaultProps = {
  size: "medium",
  error: false,
  success: false,
};

// Typechecking props for the SoftSelect
SoftSelect.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  error: PropTypes.bool,
  success: PropTypes.bool,
};

export default SoftSelect;
