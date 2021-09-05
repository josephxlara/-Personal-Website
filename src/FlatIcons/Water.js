import * as React from "react"

function Water(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 360" {...props}>
      <path
        d="M303.91 236.07c0 68.45-55.48 123.93-123.92 123.93-68.43 0-123.9-55.48-123.9-123.93C56.09 137.65 179.99 0 179.99 0s123.92 140.26 123.92 236.07z"
        fill="#4cd9f2"
      />
      <path
        d="M270.12 236.07c0 49.79-40.36 90.13-90.13 90.13s-90.11-40.34-90.11-90.13c0-49.77 40.34-90.11 90.11-90.11s90.13 40.34 90.13 90.11z"
        fill="#9de4f2"
      />
      <circle cx={160.81} cy={216.9} r={40.42} fill="#d3eef2" />
    </svg>
  )
}

export default Water;