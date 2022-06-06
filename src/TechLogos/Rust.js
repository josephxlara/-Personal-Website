import * as React from "react"

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 360 360"
    style={{
      enableBackground: "new 0 0 360 360",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <path 
    fill={'#f74c00'}
    d="m357.54 175.58-15.11-9.36c-.13-1.47-.27-2.94-.43-4.4l12.99-12.11a5.173 5.173 0 0 0 1.55-4.82 5.191 5.191 0 0 0-3.28-3.86l-16.6-6.21c-.42-1.44-.85-2.87-1.3-4.29l10.36-14.38a5.179 5.179 0 0 0 .58-5.03 5.206 5.206 0 0 0-3.97-3.14l-17.51-2.85c-.68-1.33-1.39-2.63-2.11-3.93l7.36-16.15c.75-1.64.6-3.56-.41-5.05-1-1.5-2.7-2.38-4.51-2.31l-17.77.62c-.92-1.15-1.85-2.29-2.81-3.41l4.08-17.31c.41-1.76-.11-3.6-1.39-4.87a5.214 5.214 0 0 0-4.87-1.39l-17.3 4.08c-1.12-.95-2.26-1.89-3.41-2.81l.62-17.77c.07-1.8-.81-3.51-2.31-4.51s-3.41-1.16-5.05-.41l-16.15 7.36c-1.3-.72-2.61-1.42-3.93-2.11l-2.85-17.51a5.223 5.223 0 0 0-3.14-3.97 5.208 5.208 0 0 0-5.03.58l-14.39 10.36c-1.42-.45-2.84-.88-4.28-1.3l-6.21-16.61a5.191 5.191 0 0 0-3.86-3.28c-1.77-.35-3.59.24-4.82 1.55l-12.11 13c-1.46-.16-2.93-.31-4.4-.43l-9.36-15.12c-.92-1.5-2.6-2.43-4.4-2.43s-3.48.93-4.42 2.46l-9.36 15.12c-1.47.12-2.94.27-4.41.43l-12.12-13a5.222 5.222 0 0 0-4.82-1.55 5.191 5.191 0 0 0-3.86 3.28l-6.21 16.61c-1.44.41-2.86.85-4.28 1.3l-14.39-10.36a5.157 5.157 0 0 0-5.03-.58 5.206 5.206 0 0 0-3.14 3.97l-2.85 17.51c-1.32.68-2.63 1.39-3.93 2.11l-16.15-7.36c-1.64-.75-3.55-.6-5.05.41-1.5 1-2.38 2.71-2.31 4.51l.62 17.77c-1.15.92-2.29 1.86-3.41 2.81l-17.3-4.08c-1.76-.41-3.6.11-4.87 1.39a5.203 5.203 0 0 0-1.39 4.87l4.08 17.31a153.7 153.7 0 0 0-2.8 3.41l-17.77-.62c-1.79-.05-3.5.81-4.51 2.31-1 1.49-1.16 3.41-.41 5.05l7.36 16.15c-.72 1.3-1.42 2.6-2.11 3.93l-17.51 2.85a5.206 5.206 0 0 0-3.97 3.14 5.23 5.23 0 0 0 .58 5.03l10.36 14.38c-.45 1.42-.89 2.85-1.3 4.29l-16.61 6.21a5.191 5.191 0 0 0-3.28 3.86c-.35 1.77.24 3.59 1.55 4.82l12.99 12.11c-.16 1.46-.31 2.93-.43 4.4l-15.11 9.36c-1.51.92-2.44 2.59-2.44 4.4s.93 3.48 2.46 4.42l15.11 9.36c.12 1.47.27 2.94.43 4.4L5.01 210.3a5.173 5.173 0 0 0-1.55 4.82 5.191 5.191 0 0 0 3.28 3.86l16.61 6.21c.41 1.44.85 2.87 1.3 4.29l-10.36 14.39a5.185 5.185 0 0 0-.58 5.03 5.166 5.166 0 0 0 3.97 3.14l17.5 2.85c.68 1.33 1.39 2.63 2.11 3.94l-7.36 16.14c-.75 1.64-.6 3.55.41 5.05 1 1.5 2.71 2.38 4.51 2.31l17.76-.62c.93 1.16 1.86 2.29 2.81 3.41l-4.08 17.31c-.41 1.75.11 3.59 1.39 4.86a5.166 5.166 0 0 0 4.87 1.38l17.3-4.08c1.12.96 2.26 1.88 3.41 2.8l-.62 17.77a5.2 5.2 0 0 0 2.31 4.51 5.2 5.2 0 0 0 5.05.4l16.15-7.36c1.3.72 2.61 1.42 3.93 2.11l2.85 17.5a5.19 5.19 0 0 0 3.14 3.97c1.66.69 3.57.47 5.03-.58l14.38-10.36c1.42.45 2.85.89 4.29 1.3l6.21 16.6a5.191 5.191 0 0 0 3.86 3.28c1.77.36 3.59-.23 4.82-1.55l12.12-12.99c1.46.17 2.93.31 4.41.44l9.36 15.11c.94 1.52 2.62 2.46 4.42 2.46s3.48-.94 4.42-2.46l9.36-15.11c1.47-.13 2.94-.27 4.4-.44l12.11 12.99a5.173 5.173 0 0 0 4.82 1.55 5.191 5.191 0 0 0 3.86-3.28l6.21-16.6c1.44-.41 2.87-.85 4.29-1.3l14.39 10.36a5.208 5.208 0 0 0 5.03.58 5.19 5.19 0 0 0 3.14-3.97l2.85-17.5c1.32-.68 2.63-1.4 3.93-2.11l16.15 7.36c1.64.75 3.55.6 5.05-.4s2.37-2.71 2.31-4.51l-.62-17.77c1.15-.92 2.29-1.84 3.41-2.8l17.3 4.08c1.76.41 3.6-.1 4.87-1.38a5.185 5.185 0 0 0 1.39-4.86l-4.08-17.31a153.7 153.7 0 0 0 2.8-3.41l17.77.62c1.79.07 3.5-.8 4.51-2.31 1-1.5 1.16-3.41.41-5.05l-7.36-16.14c.72-1.3 1.42-2.61 2.11-3.94l17.51-2.85a5.206 5.206 0 0 0 3.97-3.14 5.21 5.21 0 0 0-.58-5.03l-10.36-14.39c.45-1.42.88-2.85 1.3-4.29l16.6-6.21a5.191 5.191 0 0 0 3.28-3.86c.36-1.77-.23-3.59-1.55-4.82l-12.99-12.12c.16-1.46.3-2.93.43-4.4l15.11-9.36c1.53-.94 2.46-2.62 2.46-4.42s-.96-3.47-2.49-4.42zM256.39 300.96c-5.77-1.25-9.44-6.93-8.2-12.72 1.23-5.78 6.92-9.46 12.69-8.22 5.77 1.23 9.45 6.93 8.21 12.71-1.25 5.78-6.94 9.46-12.7 8.23zm-5.14-34.73a9.73 9.73 0 0 0-11.57 7.5l-5.37 25.04c-16.56 7.52-34.95 11.69-54.31 11.69-19.81 0-38.6-4.38-55.45-12.22l-5.36-25.04c-1.13-5.27-6.31-8.63-11.57-7.49l-22.11 4.75c-4.1-4.22-7.92-8.72-11.43-13.47h107.56c1.22 0 2.03-.22 2.03-1.33V217.6c0-1.11-.81-1.33-2.03-1.33h-31.46v-24.12h34.02c3.11 0 16.61.89 20.92 18.14 1.35 5.31 4.32 22.57 6.35 28.1 2.02 6.2 10.26 18.58 19.03 18.58h53.6c.61 0 1.26-.07 1.94-.19-3.72 5.05-7.8 9.83-12.19 14.3l-22.6-4.85zm-148.77 34.21c-5.77 1.25-11.45-2.44-12.7-8.22-1.23-5.79 2.44-11.48 8.21-12.72 5.77-1.23 11.46 2.45 12.7 8.23 1.23 5.77-2.44 11.47-8.21 12.71zm-40.8-165.46c2.39 5.4-.04 11.74-5.44 14.13-5.4 2.4-11.71-.04-14.11-5.45-2.39-5.41.04-11.73 5.44-14.13 5.4-2.4 11.71.04 14.11 5.45zM49.14 164.7l23.03-10.23c4.92-2.18 7.14-7.95 4.96-12.88l-4.74-10.72h18.65v84.08H53.4a131.92 131.92 0 0 1-5.01-36.1c-.01-4.78.25-9.51.75-14.15zm101.05-8.16v-24.78h44.42c2.29 0 16.2 2.65 16.2 13.05 0 8.63-10.67 11.73-19.44 11.73h-41.18zm161.43 22.3c0 3.29-.12 6.54-.36 9.77h-13.5c-1.35 0-1.9.89-1.9 2.21v6.2c0 14.6-8.23 17.77-15.44 18.58-6.87.77-14.48-2.88-15.42-7.08-4.05-22.79-10.8-27.66-21.47-36.07 13.23-8.4 27-20.8 27-37.39 0-17.92-12.28-29.2-20.65-34.74-11.75-7.74-24.75-9.29-28.26-9.29H81.95c18.94-21.14 44.6-36.11 73.63-41.56l16.46 17.27c3.72 3.9 9.89 4.04 13.78.32l18.42-17.62c38.6 7.19 71.27 31.21 90.1 64.17l-12.61 28.48c-2.18 4.93.04 10.69 4.96 12.88l24.28 10.78c.43 4.33.65 8.68.65 13.09zM172.06 34.79c4.27-4.09 11.03-3.92 15.11.35 4.08 4.28 3.92 11.05-.35 15.14s-11.03 3.93-15.11-.35-3.92-11.05.35-15.14zM297.19 135.5c2.39-5.4 8.71-7.84 14.1-5.44 5.4 2.39 7.83 8.72 5.44 14.13-2.39 5.41-8.71 7.85-14.11 5.45-5.39-2.41-7.82-8.73-5.43-14.14z" />
  </svg>
)

export default SvgComponent