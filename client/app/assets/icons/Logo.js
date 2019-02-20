import React from 'react';
import PropTypes from 'prop-types';

const Logo = React.memo(({ fill, height, width }) => {
  const styles = {
    svg: {
      height,
      width
    },
    path: {
      fill
    },

    st1: {
      fill: '#fde600'
    },

    st2: {
      fill: '#fdfdfe'
    }
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Camada_1"
      viewBox="0 0 765.35 1474.02"
      style={styles.svg}
    >
      {/* <style>
    .st1{fill:#fde600}.st2{fill:#fdfdfe}
  </style> */}
      <path
        style={styles.path}
        d="M387.03 969.91c-57.44-.26-111.22-6.97-163.29-24.68-42.27-14.38-81.07-34.94-113.98-65.56-30.8-28.66-53.17-62.67-61.9-104.24-8.32-39.59-7.94-78.9 9.16-116.67 13.08-28.89 32.98-52.53 57.05-72.79 37.76-31.78 81.33-52.52 128.27-66.61 40.26-12.08 81.46-18.32 123.47-19.77 56.89-1.97 112.61 4.72 166.95 21.86 43.33 13.66 83.62 33.29 118.9 62.31 28.42 23.38 51.21 51.06 64.21 85.98 6.24 16.77 9.12 34.13 9.44 52.03.45 24.51-1.74 48.6-9.65 71.99-9.85 29.13-25.89 54.43-47.12 76.5-33.45 34.75-74.27 57.66-119.34 73.58-35.36 12.49-71.85 19.74-109.13 23.34-18.54 1.78-37.11 2.45-53.04 2.73zm-2.82-39.2c1.62 0 3.25.04 4.87-.01s3.24-.27 4.85-.28c32.05-.29 63.73-3.96 95.06-10.68 44.2-9.48 86.17-24.8 124.68-48.79 28.7-17.88 53.9-39.63 72.74-68.06 17.78-26.83 27.26-56.1 25.55-88.61-.17-3.21-1.18-3.26-3.77-2.65-16.01 3.78-31.94 7.85-47.73 12.42-27.42 7.93-54.49 16.88-80.96 27.62-2.96 1.2-4.02 1.99-2.25 5.38 3.28 6.26 3.78 13.12 1.98 20-3.71 14.15-18.26 24.63-33.88 24.5-2.23-.02-4.93-1-6.57-.07-1.85 1.06-.77 4.12-1.23 6.28-3.24 15.3-19.68 28.21-36.44 27.87-5.23-.11-7.86.59-10.3 6.14-6.16 14.03-24.19 21.92-39.32 18.53-1.33-.3-2.47-1-3.62.56-7.85 10.7-19.26 12.53-31.34 11.99-9.62-.43-18.5-3.88-26.94-8.32-2.07-1.09-3.18-.76-4.83.66-19.74 17.04-48.54 11.41-60.57-11.84-.9-1.74-1.57-2.27-3.55-1.8-15.44 3.7-32.51-3.97-40.01-18.02-.99-1.85-1.86-2.45-3.94-2.2-18.04 2.11-35.46-9.29-40.45-26.67-.89-3.11-2.14-3.65-5.11-3.42-22.58 1.76-41.04-20.59-33.34-43 .72-2.1.16-3.07-1.55-4.2-7.62-5.04-15.76-9.08-24.11-12.72-36.3-15.81-74.7-24.52-113.07-33.34-2.47-.57-2.01.78-2.15 2.1-1.99 19.58.76 38.58 7.22 57.07 10.25 29.36 28.41 53.32 51.14 74.06 27.34 24.95 58.93 43.04 93.06 56.85 56.43 22.77 115.31 32.32 175.88 32.65zm-83.03-318.96c-6.74 1.75-12.5 2.92-18.03 4.75-19.03 6.3-38.3 7.59-57.95 3.56-31.73-6.5-62.52-16.11-92.62-27.96-2.74-1.08-4.62-.98-6.96 1.05-8.04 6.95-15.98 13.98-23.2 21.79-19.08 20.66-33.72 43.85-41.05 71.26-1.95 7.3-1.99 7.37 5.19 9.27 24.35 6.43 49.03 11.62 72.96 19.61 22.38 7.47 44.58 15.37 64.41 28.58 1.96 1.31 2.81.26 4.07-.76 13.33-10.82 32.18-9.94 44.27 2.17 1.85 1.85 3.04 2.2 5.5.76 16.73-9.81 39.82-4.94 50.07 10.54 1.51 2.28 2.64 2.72 5.26 2.03 22.3-5.94 43.6 9.44 44.66 32.09.1 2.12-.67 4.79.35 6.22 1.25 1.74 4.19.43 6.35.91.49.11.98.21 1.47.31 24.66 4.91 38.18 28.8 29.54 52.41-.8 2.19-.32 2.97 1.62 3.83 4.92 2.17 9.87 4.2 15.14 5.33 7.56 1.62 14.93 1.15 21.81-2.6 4.2-2.29 4.29-3.56 1.21-6.93-8.08-8.85-16.16-17.71-24.21-26.6-.91-1.01-1.69-2.16-2.38-3.33-.81-1.37-.99-2.8.1-4.2 1.18-1.5 2.74-1.64 4.4-1.21 2 .51 3.48 1.91 5.01 3.2 10.04 8.47 19.45 17.6 28.67 26.93 1.24 1.25 2.46 2.53 4.21 3 8.33 2.25 16.17 1.42 22.89-4.36 6.97-6 7.28-12.25 1.17-19.13-10.03-11.3-20.15-22.53-30.2-33.82-.91-1.02-1.71-2.15-2.4-3.32-.81-1.38-.88-2.87.13-4.23 1.05-1.42 2.59-1.39 4.09-1.14 2.19.37 3.77 1.86 5.4 3.22 11.87 9.98 22.68 21.1 33.78 31.9 11.37 11.07 33.21 5.92 38.42-9.18 2.72-7.87-.61-13.82-5.93-19.15-13.69-13.71-27.39-27.4-41.1-41.1-1.24-1.24-2.56-2.43-3.17-4.12-.58-1.6-.7-3.23.65-4.53 1.32-1.28 2.87-1.31 4.51-.62 2.23.94 4.01 2.52 5.78 4.09 15.1 13.47 30.4 26.72 45.18 40.54 9.03 8.44 23.55 7.22 31.91-.78 5.16-4.93 6.32-10.8 4.29-17.48-1.28-4.21-3.94-7.4-7.22-10.24-36.14-31.34-72.23-62.75-109-93.35-10.07-8.38-19.91-17.12-31.49-23.47-6.89-3.77-14.15-6.05-22.21-5.22-10.71 1.1-19.54 6.45-28.3 12.03-11.4 7.26-21.51 16.26-32.42 24.19-11.72 8.53-24.4 13.5-39.13 12.03-9.39-.94-18.59-2.61-26.54-8.13-9.7-6.73-10.56-15.83-2.59-24.38 10.98-11.77 21.89-23.6 33.63-36.26zm408.3 84.27c-1.78-8.83-4.06-16.86-7.1-24.66-10.58-27.07-27.94-49.27-48.84-69.13-5.64-5.35-9.9-6.68-17.49-3.28-26.66 11.94-54.75 18.64-84.1 18.89-29.67.25-57.88-6.41-84.72-18.95-17.64-8.24-35.97-14.24-55.4-16.08-33.42-3.17-63.63 4.48-89.21 27.32-15.13 13.51-28.46 28.73-42.32 43.46-6.12 6.5-5.51 8.67 3.08 11.84.7.26 1.41.53 2.13.7 12.98 3.13 25.53 2.7 37.09-4.86 4.38-2.87 8.67-5.89 12.86-9.04 11.87-8.92 22.93-18.95 35.96-26.26 19.47-10.91 38.62-11.16 57.42 1.82 6.38 4.4 12.66 8.91 18.66 13.81 39.54 32.35 77.98 65.98 116.54 99.48 1.92 1.67 3.35 1.85 5.59.87 31.67-13.86 64.3-25.04 97.55-34.42 12.96-3.66 26.01-6.98 39.15-9.96 1.14-.25 3.3.28 3.15-1.55zm-569.1-114.35c1.49.6 2.37.98 3.26 1.31 24.6 8.96 49.74 16.09 75.11 22.52 20.32 5.15 40.28 5.47 60.39-1.25 11.46-3.83 23.34-6.38 35.51-6.93 2.39-.11 4.22-.78 6.08-2.28 19.82-15.94 42.76-23.71 67.88-25.5 28.32-2.02 55.15 4.21 80.54 16.18 42.2 19.88 85.57 24.77 130.71 12.33 11.51-3.17 22.76-7.06 34.03-12.07-1.3-.99-2.24-1.75-3.21-2.45-28.63-20.71-60.07-35.85-93.47-47.08-42.38-14.26-86.02-21.67-130.62-23.61-32.01-1.39-63.88.16-95.61 4.8-41.42 6.06-81.38 17.08-119.45 34.63-17.68 8.15-34.59 17.68-51.15 29.4zm109.8 189.7c-.58-4.29-.8-7.65-2.11-10.77-3.5-8.33-11.87-13.35-20.99-12.61-8.71.71-16.13 7.17-18.24 15.87-2.03 8.36 1.68 17.29 9.16 22.05 7.54 4.8 17.07 4.18 24.12-1.47 1.01-.81 1.65-2.88 3.61-1.61 1.67 1.09 1.28 2.75 1.19 4.39-.15 2.74-.3 5.5-.11 8.23 1.32 18.53 23.35 31.06 37.41 19.75 1.24-1 2.82-1.97 4.45-.89 1.44.96 1.19 2.58 1.04 4.11-.55 5.58 1.29 10.3 5.24 14.24 9.57 9.52 20.96 10.18 31.42 1.8 1.18-.95 2.39-1.99 4.03-1.33 1.62.65 1.92 2.12 2 3.7.06 1.24.26 2.48.47 3.71 2.06 12.52 12.73 21.98 25.03 22.21 13.55.25 24.63-8.43 27.33-21.4 2.53-12.17-4.5-24.77-16.35-29.64-6.63-2.72-13.1-2.3-19.68.09-1.98.72-4.22 2.45-6.22.29-1.78-1.92-.29-4.02.37-5.96 1.05-3.09 1.72-6.25 2.14-9.47 1.53-11.82-3.39-20.81-13.52-24.79-9.39-3.69-18.02-2.97-25.69 4.18-2.43 2.27-4.3 1.56-5-1.62-.21-.97-.29-1.98-.48-2.96-1.66-8.64-6.57-14.4-15.15-16.71-10.49-2.83-19.7-.37-27.74 6.91-2.89 2.63-4.85 5.96-7.73 9.7z"
      />
      <path
        style={styles.st1}
        d="M384.21 930.71c-60.57-.33-119.45-9.88-175.83-32.68-34.14-13.81-65.73-31.9-93.06-56.85-22.72-20.74-40.89-44.7-51.14-74.06-6.45-18.49-9.21-37.49-7.22-57.07.13-1.32-.32-2.67 2.15-2.1 38.37 8.82 76.77 17.53 113.07 33.34 8.35 3.64 16.49 7.68 24.11 12.72 1.71 1.13 2.27 2.1 1.55 4.2-7.7 22.41 10.76 44.76 33.34 43 2.97-.23 4.22.31 5.11 3.42 4.98 17.38 22.41 28.78 40.45 26.67 2.08-.24 2.95.35 3.94 2.2 7.5 14.06 24.57 21.72 40.01 18.02 1.97-.47 2.65.06 3.55 1.8 12.02 23.26 40.83 28.88 60.57 11.84 1.65-1.42 2.76-1.75 4.83-.66 8.44 4.44 17.31 7.89 26.94 8.32 12.08.54 23.48-1.29 31.34-11.99 1.14-1.56 2.29-.86 3.62-.56 15.13 3.4 33.16-4.5 39.32-18.53 2.44-5.55 5.07-6.24 10.3-6.14 16.75.34 33.2-12.56 36.44-27.87.46-2.15-.63-5.22 1.23-6.28 1.64-.94 4.34.05 6.57.07 15.63.13 30.18-10.35 33.88-24.5 1.8-6.88 1.3-13.74-1.98-20-1.77-3.39-.71-4.18 2.25-5.38 26.47-10.74 53.54-19.69 80.96-27.62 15.8-4.57 31.73-8.64 47.73-12.42 2.59-.61 3.6-.56 3.77 2.65 1.71 32.51-7.78 61.78-25.55 88.61-18.84 28.43-44.04 50.18-72.74 68.06-38.51 23.99-80.48 39.3-124.68 48.79-31.32 6.72-63 10.4-95.06 10.68-1.62.01-3.24.23-4.85.28-1.67.08-3.29.04-4.92.04z"
        className="st1"
      />
      <path
        style={styles.st2}
        d="M301.18 611.75c-11.74 12.66-22.66 24.48-33.63 36.25-7.97 8.54-7.11 17.65 2.59 24.38 7.95 5.51 17.15 7.19 26.54 8.13 14.72 1.47 27.41-3.5 39.13-12.03 10.91-7.93 21.02-16.93 32.42-24.19 8.76-5.58 17.59-10.93 28.3-12.03 8.06-.83 15.32 1.45 22.21 5.22 11.58 6.35 21.42 15.09 31.49 23.47 36.78 30.6 72.86 62.01 109 93.35 3.28 2.85 5.94 6.04 7.22 10.24 2.03 6.68.87 12.55-4.29 17.48-8.36 8-22.88 9.22-31.91.78-14.77-13.82-30.08-27.07-45.18-40.54-1.76-1.57-3.55-3.15-5.78-4.09-1.64-.69-3.19-.66-4.51.62-1.35 1.31-1.23 2.94-.65 4.53.61 1.69 1.93 2.88 3.17 4.12 13.7 13.7 27.41 27.39 41.1 41.1 5.32 5.33 8.65 11.27 5.93 19.15-5.21 15.1-27.05 20.25-38.42 9.18-11.1-10.8-21.9-21.92-33.78-31.9-1.62-1.36-3.21-2.85-5.4-3.22-1.5-.25-3.04-.28-4.09 1.14-1.01 1.36-.94 2.85-.13 4.23.69 1.17 1.5 2.3 2.4 3.32 10.05 11.28 20.17 22.51 30.2 33.82 6.11 6.88 5.8 13.13-1.17 19.13-6.71 5.77-14.56 6.61-22.89 4.36-1.75-.47-2.97-1.75-4.21-3-9.23-9.33-18.64-18.46-28.67-26.93-1.52-1.29-3-2.68-5.01-3.2-1.66-.42-3.22-.29-4.4 1.21-1.09 1.39-.91 2.83-.1 4.2.69 1.17 1.47 2.32 2.38 3.33 8.05 8.89 16.12 17.74 24.21 26.6 3.08 3.37 2.98 4.65-1.21 6.93-6.88 3.75-14.25 4.22-21.81 2.6-5.27-1.13-10.23-3.15-15.14-5.33-1.94-.86-2.42-1.63-1.62-3.83 8.64-23.61-4.88-47.5-29.54-52.41-.49-.1-.98-.2-1.47-.31-2.16-.48-5.1.83-6.35-.91-1.02-1.43-.26-4.1-.35-6.22-1.06-22.65-22.37-38.02-44.66-32.09-2.62.7-3.76.25-5.26-2.03-10.25-15.48-33.34-20.35-50.07-10.54-2.46 1.44-3.65 1.1-5.5-.76-12.09-12.11-30.94-12.99-44.27-2.17-1.27 1.03-2.11 2.07-4.07.76-19.82-13.21-42.03-21.11-64.41-28.58-23.93-7.99-48.61-13.18-72.96-19.61-7.18-1.9-7.14-1.96-5.19-9.27 7.33-27.41 21.97-50.61 41.05-71.26 7.22-7.81 15.16-14.84 23.2-21.79 2.34-2.02 4.23-2.13 6.96-1.05 30.11 11.85 60.89 21.46 92.62 27.96 19.65 4.03 38.92 2.74 57.95-3.56 5.54-1.82 11.29-2.98 18.03-4.74z"
        className="st2"
      />
      <path
        style={styles.st2}
        d="M709.48 696.02c.15 1.83-2.01 1.3-3.17 1.56-13.14 2.98-26.18 6.3-39.15 9.96-33.25 9.38-65.88 20.56-97.55 34.42-2.24.98-3.67.8-5.59-.87-38.56-33.5-77-67.13-116.54-99.48-5.99-4.9-12.28-9.41-18.66-13.81-18.8-12.97-37.95-12.73-57.42-1.82-13.03 7.3-24.1 17.34-35.96 26.26-4.19 3.15-8.48 6.17-12.86 9.04-11.56 7.56-24.11 7.99-37.09 4.86-.72-.18-1.43-.44-2.13-.7-8.59-3.17-9.2-5.34-3.08-11.84 13.86-14.73 27.19-29.95 42.32-43.46 25.59-22.84 55.79-30.49 89.21-27.32 19.43 1.84 37.76 7.84 55.4 16.08 26.84 12.53 55.05 19.2 84.72 18.95 29.35-.25 57.45-6.94 84.1-18.89 7.6-3.4 11.85-2.08 17.49 3.28 20.91 19.86 38.26 42.05 48.84 69.13 3.06 7.79 5.34 15.82 7.12 24.65z"
        // className="st2"
      />
      <path
        style={styles.st1}
        d="M140.38 581.67c16.56-11.72 33.47-21.25 51.16-29.41 38.07-17.55 78.03-28.57 119.45-34.63 31.73-4.64 63.6-6.19 95.61-4.8 44.6 1.93 88.24 9.35 130.62 23.61 33.4 11.23 64.84 26.37 93.47 47.08.97.7 1.91 1.46 3.21 2.45-11.28 5.01-22.52 8.9-34.03 12.07-45.13 12.44-88.51 7.55-130.71-12.33-25.39-11.97-52.23-18.2-80.54-16.18-25.12 1.79-48.06 9.56-67.88 25.5-1.86 1.5-3.7 2.17-6.08 2.28-12.17.55-24.05 3.1-35.51 6.93-20.11 6.72-40.07 6.39-60.39 1.25-25.37-6.43-50.51-13.56-75.11-22.52-.9-.32-1.77-.7-3.27-1.3z"
        // className="st1"
      />
      <path
        style={styles.st2}
        d="M250.18 771.37c2.88-3.75 4.84-7.08 7.72-9.69 8.03-7.28 17.24-9.74 27.74-6.91 8.58 2.32 13.49 8.07 15.15 16.71.19.98.27 1.98.48 2.96.7 3.18 2.56 3.88 5 1.62 7.67-7.15 16.3-7.87 25.69-4.18 10.13 3.98 15.05 12.97 13.52 24.79-.42 3.22-1.08 6.39-2.14 9.47-.66 1.94-2.15 4.04-.37 5.96 2 2.15 4.24.42 6.22-.29 6.58-2.38 13.05-2.81 19.68-.09 11.85 4.87 18.88 17.47 16.35 29.64-2.7 12.97-13.78 21.65-27.33 21.4-12.3-.23-22.97-9.69-25.03-22.21-.2-1.23-.4-2.47-.47-3.71-.08-1.58-.38-3.05-2-3.7-1.64-.66-2.84.38-4.03 1.33-10.46 8.37-21.85 7.72-31.42-1.8-3.96-3.93-5.79-8.66-5.24-14.24.15-1.53.41-3.15-1.04-4.11-1.63-1.09-3.21-.11-4.45.89-14.07 11.3-36.09-1.23-37.41-19.75-.19-2.73-.04-5.49.11-8.23.09-1.64.49-3.3-1.19-4.39-1.96-1.28-2.6.8-3.61 1.61-7.06 5.64-16.59 6.26-24.12 1.47-7.48-4.76-11.18-13.69-9.16-22.05 2.11-8.7 9.53-15.16 18.24-15.87 9.12-.75 17.5 4.28 20.99 12.61 1.31 3.11 1.53 6.48 2.12 10.76z"
        // className="st2"
      />
    </svg>
  );
});

Logo.propTypes = {
  fill: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
};

Logo.defaultProps = {
  fill: '#20307a',
  height: '58x',
  width: '58px'
};

export default Logo;
