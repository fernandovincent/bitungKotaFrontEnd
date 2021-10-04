import React from 'react';
import PropTypes from 'prop-types';
// import { useTheme } from '@material-ui/core/styles';
import Logo from '../../assets/logo.png';

const Webbee = ({ width = 35, height = 70 }) => {
  return (
    <img width={width} height={height} src={Logo} />
    // <svg
    //   xmlns="https://www.google.com/url?sa=i&url=https%3A%2F%2Fid.wikipedia.org%2Fwiki%2FBerkas%3ALOGO_KOTA_BITUNG_SULAWESI_UTARA.png&psig=AOvVaw11-wA7xhCauC57uCOG3hlM&ust=1632889423419000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLixsqnpoPMCFQAAAAAdAAAAABAD"
    //   width={width}
    //   height={height}
    //   fill="none"
    //   viewBox="0 0 95 71"
    // >
    //   <rect
    //     width="16.811"
    //     height="68.926"
    //     x="0.664"
    //     y="7.769"
    //     fill={colorPrimaryMain}
    //     stroke={colorPrimaryDark}
    //     rx="8.406"
    //     transform="rotate(-25 .664 7.77)"
    //   ></rect>
    //   <rect
    //     width="16.811"
    //     height="68.926"
    //     x="28.665"
    //     y="7.769"
    //     fill={colorPrimaryMain}
    //     stroke={colorPrimaryDark}
    //     rx="8.406"
    //     transform="rotate(-25 28.665 7.77)"
    //   ></rect>
    //   <rect
    //     width="16.811"
    //     height="16.81"
    //     x="78.769"
    //     y="0.664"
    //     fill={colorPrimaryMain}
    //     stroke={colorPrimaryDark}
    //     rx="8.405"
    //     transform="rotate(25 78.77 .664)"
    //   ></rect>
    // </svg>
  );
};

Webbee.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Webbee;
