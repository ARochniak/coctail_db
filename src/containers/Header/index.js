import React from 'react';

import './index.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header__text">Coctail DB</div>
      <svg
        className="header__logo"
        width="28"
        height="50"
        viewBox="0 0 28 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.2689 48.334H17.772V38.2945C20.5679 38.0895 23.1844 36.8409 25.1026 34.7962C26.9825 32.83 27.9497 30.1643 27.7679 27.4502C27.7106 26.6302 27.5739 25.5739 27.4283 24.4513C27.1623 22.7048 26.998 20.9444 26.9349 19.1792C27.0691 17.5608 27.3396 15.9566 27.7431 14.3838C27.8053 14.1349 27.7496 13.8709 27.5918 13.6687C27.434 13.4666 27.1916 13.3482 26.9349 13.3482H13.1616L13.354 13.2368L15.5195 11.9873C15.9173 11.7567 16.0531 11.247 15.8229 10.8492C14.1573 7.972 10.9421 6.35848 7.63939 6.74325C7.72602 6.45366 7.77198 6.15348 7.77605 5.85128C7.77605 4.01121 6.28455 2.5193 4.44407 2.5193C4.07232 2.52337 3.70341 2.59048 3.35361 2.71738L1.80517 0.391669C1.64451 0.134613 1.35654 -0.0150661 1.05352 0.00120327C0.750506 0.0174727 0.480434 0.19725 0.348651 0.470576C0.216462 0.743902 0.243714 1.06726 0.419017 1.31496L1.96868 3.6423C1.2634 4.41754 0.968516 5.48237 1.17473 6.51019C1.38095 7.53801 2.06345 8.40639 3.01318 8.85014C0.115592 11.4862 -0.557555 15.7834 1.39559 19.1792C1.50581 19.3704 1.68762 19.5103 1.90116 19.5672C2.1147 19.6246 2.34206 19.5945 2.53323 19.4842L6.7043 17.076C6.83242 17.7467 6.91255 18.4259 6.94305 19.1084C6.93655 19.1316 6.93085 19.1552 6.92638 19.1792C6.93004 19.204 6.93533 19.2284 6.94143 19.2524C6.87513 20.9944 6.71203 22.7316 6.45253 24.4554C6.30692 25.5739 6.17026 26.6302 6.1125 27.4542C5.9311 30.1684 6.89831 32.8341 8.77824 34.8003C10.696 36.8449 13.3125 38.094 16.1084 38.299V48.334H8.60904C8.14903 48.334 7.77605 48.707 7.77605 49.167C7.77605 49.627 8.14903 50 8.60904 50H25.2689C25.7289 50 26.1019 49.627 26.1019 49.167C26.1019 48.707 25.7289 48.334 25.2689 48.334ZM11.5831 12.3355L9.82884 13.3482H6.94305C6.6864 13.3482 6.4444 13.4666 6.28658 13.6687C6.12877 13.8709 6.07264 14.1349 6.13528 14.3838C6.13528 14.3944 6.23411 14.7852 6.35939 15.3506L4.65842 16.3329C4.03001 14.455 4.81054 12.3944 6.52534 11.4044C8.24013 10.4144 10.4149 10.7683 11.7271 12.2513L11.5831 12.3355ZM4.44407 4.18529C5.36411 4.18529 6.11006 4.93124 6.11006 5.85128C6.11006 6.77132 5.36411 7.51727 4.44407 7.51727C3.52404 7.51727 2.77808 6.77132 2.77808 5.85128C2.77808 4.93124 3.52404 4.18529 4.44407 4.18529ZM2.46652 17.5966C1.16294 14.5009 2.36687 10.9184 5.27585 9.23898C8.18482 7.55916 11.8894 8.30715 13.9186 10.9843L13.1848 11.4081C11.3948 9.13079 8.20312 8.5154 5.69478 9.96338C3.18604 11.4118 2.12324 14.4838 3.20068 17.1724L2.46652 17.5966ZM10.275 15.0142H25.8855C25.6346 16.1136 25.445 17.226 25.3173 18.3462H8.56064C8.49597 17.6657 8.37029 16.8986 8.23444 16.1921L10.275 15.0142ZM7.77605 27.5681C7.83096 26.7969 7.96518 25.7638 8.10917 24.6693C8.30684 23.144 8.51671 21.4634 8.58342 20.0122H25.299C25.3657 21.4634 25.5756 23.144 25.7729 24.6693C25.9156 25.7638 26.0495 26.7969 26.1064 27.5681C26.2516 29.821 25.4446 32.0312 23.882 33.6606C22.0846 35.5816 19.5714 36.6721 16.9406 36.6721C14.3098 36.6721 11.797 35.5816 9.99926 33.6606C8.4374 32.0312 7.63084 29.821 7.77605 27.5681Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="14.0345"
            y1="51.0329"
            x2="14.0345"
            y2="-1.58236"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E93E3A" />
            <stop offset="0.354" stopColor="#ED683C" />
            <stop offset="0.709" stopColor="#F3903F" />
            <stop offset="1" stopColor="#FDC70C" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Header;
