import * as React from "react"

const SvgComponent = (props) => (
  <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    viewBox="0 0 360 360"
    style={{
      enableBackground: "new 0 0 360 360",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <style>
      {`.st0{fill: ${props.lightMode ? '#000' : 'white'}}`}
    </style>
    <path
      id="Type-something"
      className="st0"
      d="M10 0h17.6l241.7 360-99.9-132.6L24.7 17.2l-.6 210.2H10z"
    />
    <path
      id="_x2E_JS"
      className="st0"
      d="M258.2 211.6c2.9 0 5-2.2 5-5.1 0-2.9-2.1-5.1-5-5.1s-5 2.2-5 5.1c0 2.9 2.1 5.1 5 5.1zm13.8-13.3c0 8.4 6.1 13.9 15 13.9 9.5 0 15.2-5.7 15.2-15.5V162h-7.6v34.7c0 5.5-2.8 8.4-7.6 8.4-4.4 0-7.3-2.7-7.4-6.8H272zm40.2-.4c.5 8.8 7.9 14.4 18.8 14.4 11.7 0 19-5.9 19-15.3 0-7.4-4.2-11.5-14.3-13.8l-5.4-1.3c-6.4-1.5-9-3.5-9-7 0-4.4 4-7.3 10.1-7.3 5.7 0 9.7 2.8 10.4 7.3h7.4c-.4-8.3-7.7-14.1-17.7-14.1-10.7 0-17.9 5.8-17.9 14.5 0 7.2 4.1 11.5 13 13.6l6.3 1.5c6.5 1.5 9.4 3.8 9.4 7.5 0 4.4-4.5 7.5-10.6 7.5-6.6 0-11.2-3-11.8-7.6h-7.7z"
    />
  </svg>
)

export default SvgComponent;