import * as React from "react"

function LocalStorage(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 360" {...props}>
      <path fill={props.lightMode ? '#333333' : 'white'} d="M176.32 360H76.71c-21.63 0-39.16-17.53-39.16-39.16V245.5h138.77V360zM37.55 39.16v75.34h138.76V0H72.45c-19.27 0-34.9 17.53-34.9 39.16zM79.76 122.75H37.55v114.5h138.77v-114.5z" />
      <g>
        <path fill={props.lightMode ? '#333333' : 'white'} d="M283.29 360h-99.61V245.5h138.77v75.34c0 21.63-17.54 39.16-39.16 39.16zM183.68 0v114.5h138.76V39.16C322.45 17.53 306.82 0 287.55 0H183.68zM225.89 122.75h-42.21v114.5h138.77v-114.5z" />
      </g>
    </svg>
  )
}

export default LocalStorage;
