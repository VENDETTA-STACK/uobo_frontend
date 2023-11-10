import React from "react";

export const CheckMark = (props) => (
  <svg
    viewBox="0 0 16 16"
    className={props.className}
    height={props.height || "16"}
    width={props.width || "16"}
  >
    <path
      fill="#2583ef"
      d="M8,0C3.582,0,0,3.582,0,8s3.582,8,8,8s8-3.582,8-8S12.418,0,8,0z"
    />
    <polygon
      fill="#fff"
      points="7,12 3.48,8.48 4.894,7.066 7,9.172 11.71,4.462 13.124,5.876"
    />
  </svg>
);

export const Plus = (props) => (
  <svg
    className={props.className}
    height={props.height || "50"}
    width={props.width || "50"}
    viewBox="0,0,255.98959,255.98959"
    style={{ fill: "#000000" }}
  >
    <g
      fill="#3b82f6"
      fillRule="nonzero"
      stroke="white"
      strokeWidth="1"
      strokeLinecap="butt"
      strokeLinejoin="miter"
      strokeMiterlimit="10"
      strokeDasharray=""
      strokeDashoffset="0"
      fontFamily="none"
      fontWeight="none"
      fontSize="none"
      textAnchor="none"
      style={{ mixBlendMode: "normal" }}
    >
      <g transform="scale(5.12,5.12)">
        <path d="M25,2c-12.683,0 -23,10.317 -23,23c0,12.683 10.317,23 23,23c12.683,0 23,-10.317 23,-23c0,-12.683 -10.317,-23 -23,-23zM37,26h-11v11h-2v-11h-11v-2h11v-11h2v11h11z"></path>
      </g>
    </g>
  </svg>
);

export const Location = (props) => (
  <svg
    className={props.className}
    height={props.height || "24"}
    width={props.width || "24"}
    viewBox="0 0 24 24"
  >
    <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
  </svg>
);

export const Bin = (props) => (
  <svg
    className={props.className}
    height={props.height || "24"}
    width={props.width || "24"}
    viewBox="0 0 24 24"
  >
    <path d="M 10 2 L 9 3 L 5 3 C 4.448 3 4 3.448 4 4 C 4 4.552 4.448 5 5 5 L 7 5 L 17 5 L 19 5 C 19.552 5 20 4.552 20 4 C 20 3.448 19.552 3 19 3 L 15 3 L 14 2 L 10 2 z M 5 7 L 5 20 C 5 21.105 5.895 22 7 22 L 17 22 C 18.105 22 19 21.105 19 20 L 19 7 L 5 7 z"></path>
  </svg>
);
