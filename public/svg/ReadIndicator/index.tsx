import styles from "./readIndicator.module.scss";

const ReadIndicator = () => {
  return (
    <svg
      className={styles.svg}
      width="18"
      height="10"
      viewBox="0 0 18 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Frame 2882">
        <g id="read receipt">
          <path
            className={styles.path_first}
            id="check"
            d="M11.7931 1.00041L4.63338 8.87892L1.142 5.5396"
            stroke="#81E299"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className={styles.path_second}
            id="check_2"
            d="M16.7401 0.999996L9.57997 8.87892L6.98385 6.42003"
            stroke="#81E299"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );
};

export default ReadIndicator;