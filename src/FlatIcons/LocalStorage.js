import * as React from "react"

function LocalStorage(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 360" {...props}>
      <path fill={props.lightMode ? '#333333' : 'white'} d="M333 115.83H187.78V0h118.08C320.85 0 333 12.15 333 27.14v88.69zM187.78 131H333v98H187.78zM305.86 360H187.78V244.17H333v88.69c0 14.99-12.15 27.14-27.14 27.14zM27 244.17h145.22V360H54.14C39.15 360 27 347.85 27 332.86v-88.69zM172.22 229H27v-98h145.22zM54.14 0h118.08v115.83H27V27.14C27 12.15 39.15 0 54.14 0z" />
    </svg>
  )
}

export default LocalStorage;