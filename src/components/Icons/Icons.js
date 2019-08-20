import React from "react";

const InfoIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      d="M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M13.0036109,13.9983464 L14.0029544,13.9983464 L14.0029544,15.9983464 L10.0029544,15.9983464 L10.0029544,13.9983464 L11.0029544,13.9983464 L11.0029544,11.9983464 L10.0029544,11.9983464 L10.0029544,9.99834639 L13.0036109,9.99834639 L13.0036109,13.9983464 Z M12.0003283,8.99834639 C11.4478622,8.99834639 11,8.55063114 11,7.99834639 C11,7.44606164 11.4478622,6.99834639 12.0003283,6.99834639 C12.5527943,6.99834639 13.0006565,7.44606164 13.0006565,7.99834639 C13.0006565,8.55063114 12.5527943,8.99834639 12.0003283,8.99834639 Z"
    />
  </svg>
);

const DownArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <polygon
      fillRule="evenodd"
      points="19.293 7.293 20.707 8.707 12 17.414 3.293 8.707 4.707 7.293 12 14.586"
    />
  </svg>
);

const RightArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" transform="rotate(270)">
    <polygon
      fillRule="evenodd"
      points="19.293 7.293 20.707 8.707 12 17.414 3.293 8.707 4.707 7.293 12 14.586"
    />
  </svg>
);

const LeftArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" transform="rotate(90)">
    <polygon
      fillRule="evenodd"
      points="19.293 7.293 20.707 8.707 12 17.414 3.293 8.707 4.707 7.293 12 14.586"
    />
  </svg>
);

const CurrentIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      d="M5.11409306,6 L8,6 L8,8 L2,8 L2,1.99121094 L4,1.99121094 L4,4.25644966 C6.23707736,1.91055844 8.78662625,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 C5.92486775,23 1,18.0751322 1,12 L3,12 C3,16.9705627 7.02943725,21 12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C9.1592152,3 7.04465569,3.7913744 5.11409306,6 Z M13,11 L17,11 L17,13 L11,13 L11,6 L13,6 L13,11 Z"
    />
  </svg>
);

const LoadingIcon = () => (
  <svg
    className="loading-svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
  >
    <path d="M25,5A20.14,20.14,0,0,1,45,22.88a2.51,2.51,0,0,0,2.49,2.26h0A2.52,2.52,0,0,0,50,22.33a25.14,25.14,0,0,0-50,0,2.52,2.52,0,0,0,2.5,2.81h0A2.51,2.51,0,0,0,5,22.88,20.14,20.14,0,0,1,25,5Z">
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 25 25"
        to="360 25 25"
        dur="0.5s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
);

const NoConectionIcon = () => (
  <svg className="no-connection-icon" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      d="M8.24538479,9.65959835 L6.76964468,8.18385824 C5.58381805,8.7545097 4.47238296,9.53146317 3.4891275,10.5147186 C3.4640374,10.5398087 3.43908163,10.5649823 3.4142602,10.5902384 L2,9.17597822 C2.02485621,9.15074942 2.04982752,9.12559148 2.07491394,9.10050506 C3.04944561,8.12597339 4.13190461,7.32514812 5.28381569,6.69802925 L1.29289322,2.70710678 L2.70710678,1.29289322 L22.7071068,21.2928932 L21.2928932,22.7071068 L14.7049041,16.1191177 L14.6524489,16.1715729 C13.0903517,14.6094757 10.5576918,14.6094757 8.99559466,16.1715729 L7.58138109,14.7573593 C8.69350358,13.6452368 10.1335865,13.0609588 11.5903116,13.0045251 L9.83555761,11.2497712 C8.49147032,11.5932681 7.21925369,12.2910596 6.16716753,13.3431458 L4.75295397,11.9289322 C5.77895221,10.902934 6.97242959,10.1464893 8.24538479,9.65959835 Z M13.327168,9.11295451 C15.3650115,9.42110719 17.3259238,10.3597664 18.8950896,11.9289322 L17.5191176,13.3049041 L13.327168,9.11295451 Z M9.44356434,5.22935082 C13.7826585,4.43586976 18.4242914,5.70128319 21.7984307,9.02559113 L20.3841705,10.4398513 C17.8618373,7.96093102 14.5159602,6.82183153 11.2367664,7.02255286 L9.44356434,5.22935082 Z M10.4098082,17.5857864 C11.1908568,16.8047379 12.4571868,16.8047379 13.2382353,17.5857864 L11.8240218,19 L10.4098082,17.5857864 Z"
    />
  </svg>
);

const RefreshIcon = () => (
  <svg className="refresh-icon" width="24" height="24" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      d="M17.8069373,7 C16.4464601,5.07869636 14.3936238,4 12,4 C7.581722,4 4,7.581722 4,12 C4,16.418278 7.581722,20 12,20 C16.418278,20 20,16.418278 20,12 L22,12 C22,17.5228475 17.5228475,22 12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 C14.8042336,2 17.274893,3.18251178 19,5.27034886 L19,2 L21,2 L21,9 L14,9 L14,7 L17.8069373,7 Z"
    />
  </svg>
);

const CloseIcon = () => (
  <svg className="close-icon" width="24" height="24" viewBox="0 0 24 24">
    <polygon
      fillRule="evenodd"
      points="13 11 22 11 22 13 13 13 13 22 11 22 11 13 2 13 2 11 11 11 11 2 13 2"
    />
  </svg>
);

const ShareIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      d="M9.91207766,11.1619952 C9.9696849,11.4322343 10,11.7125769 10,12 C10,12.2874231 9.9696849,12.5677657 9.91207766,12.8380048 L14.9830579,15.3734949 C15.716367,14.5318864 16.7960692,14 18,14 C20.209139,14 22,15.790861 22,18 C22,20.209139 20.209139,22 18,22 C15.790861,22 14,20.209139 14,18 C14,17.7125769 14.0303151,17.4322343 14.0879223,17.1619952 L9.01694214,14.6265051 C8.28363296,15.4681136 7.20393084,16 6,16 C3.790861,16 2,14.209139 2,12 C2,9.790861 3.790861,8 6,8 C7.20393084,8 8.28363296,8.53188639 9.01694214,9.37349494 L14.0879223,6.83800484 C14.0303151,6.56776568 14,6.28742308 14,6 C14,3.790861 15.790861,2 18,2 C20.209139,2 22,3.790861 22,6 C22,8.209139 20.209139,10 18,10 C16.7960692,10 15.716367,9.46811361 14.9830579,8.62650506 L9.91207766,11.1619952 Z M6,14 C7.1045695,14 8,13.1045695 8,12 C8,10.8954305 7.1045695,10 6,10 C4.8954305,10 4,10.8954305 4,12 C4,13.1045695 4.8954305,14 6,14 Z M18,8 C19.1045695,8 20,7.1045695 20,6 C20,4.8954305 19.1045695,4 18,4 C16.8954305,4 16,4.8954305 16,6 C16,7.1045695 16.8954305,8 18,8 Z M18,20 C19.1045695,20 20,19.1045695 20,18 C20,16.8954305 19.1045695,16 18,16 C16.8954305,16 16,16.8954305 16,18 C16,19.1045695 16.8954305,20 18,20 Z"
    />
  </svg>
);

const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fillRule="evenodd"
      d="M21,7.38246601 L21,5 L3,5 L3,7.38199365 L12.0000224,11.8824548 L21,7.38246601 Z M21,9.61853399 L11.9999776,14.1185452 L3,9.61810635 L3,19 L21,19 L21,9.61853399 Z M3,3 L21,3 C22.1045695,3 23,3.8954305 23,5 L23,19 C23,20.1045695 22.1045695,21 21,21 L3,21 C1.8954305,21 1,20.1045695 1,19 L1,5 C1,3.8954305 1.8954305,3 3,3 Z"
    />
  </svg>
);

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <polygon
      fillRule="evenodd"
      points="9.707 14.293 19 5 20.414 6.414 9.707 17.121 4 11.414 5.414 10"
    />
  </svg>
);

const ErrorIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      d="M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M12.0003283,17.9983464 C11.4478622,17.9983464 11,17.5506311 11,16.9983464 C11,16.4460616 11.4478622,15.9983464 12.0003283,15.9983464 C12.5527943,15.9983464 13.0006565,16.4460616 13.0006565,16.9983464 C13.0006565,17.5506311 12.5527943,17.9983464 12.0003283,17.9983464 Z M11.0029544,5.99834639 L13.0036109,5.99834639 L13.0036109,13.9983464 L11.0029544,13.9983464 L11.0029544,5.99834639 Z"
    />
  </svg>
);

const SettingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      d="M20.8733438,18.6798456 L18.6561681,20.8970213 L15.8183182,20.1064695 L15.006735,20.4411839 L13.5498403,22.99899 L10.4152664,22.99899 L8.96643872,20.4324639 L8.15567513,20.0925211 L5.31808752,20.8732969 L3.1019687,18.6571781 L3.89252047,15.8193282 L3.557737,15.0075774 L1,13.5496234 L1,10.4151434 L3.56757573,8.96634421 L3.90747891,8.15567513 L3.12670306,5.31808752 L5.34198234,3.10280823 L8.17984769,3.89446381 L8.99071892,3.56004309 L10.4454387,1 L13.5808166,1 L15.0296158,3.56757573 L15.8402849,3.90747891 L18.6774046,3.12683179 L20.8961418,5.34235339 L20.1054595,8.18067182 L20.4399569,8.99172892 L23,10.4464487 L23,13.5818266 L20.4326665,15.0304891 L20.0924686,15.8429951 L20.8733438,18.6798456 Z M17.9808573,15.7077573 L18.8526582,13.6256062 L21,12.4139314 L21,11.6103133 L18.8534478,10.3905557 L17.9941264,8.30695569 L18.6558226,5.93165934 L18.0869626,5.36362372 L15.7044076,6.01919516 L13.6244596,5.14709956 L12.4129214,3 L11.6093033,3 L10.3895457,5.1465522 L8.30575983,6.00595029 L5.93001038,5.34320732 L5.36375245,5.90946526 L6.01919516,8.29155242 L5.14709956,10.3715004 L3,11.5830386 L3,12.3875547 L5.14481829,13.610138 L6.00385363,15.6930443 L5.34202685,18.0688091 L5.90946526,18.6362476 L8.29155242,17.9808048 L10.3714059,18.8528608 L11.5829156,20.99899 L12.3873378,20.99899 L13.6089604,18.8542408 L15.6920343,17.9951364 L18.0677992,18.6569631 L18.6362007,18.0885616 L17.9808573,15.7077573 Z M12,16 C9.790861,16 8,14.209139 8,12 C8,9.790861 9.790861,8 12,8 C14.209139,8 16,9.790861 16,12 C16,14.209139 14.209139,16 12,16 Z M12,14 C13.1045695,14 14,13.1045695 14,12 C14,10.8954305 13.1045695,10 12,10 C10.8954305,10 10,10.8954305 10,12 C10,13.1045695 10.8954305,14 12,14 Z"
    />
  </svg>
);

export {
  InfoIcon,
  DownArrowIcon,
  CurrentIcon,
  LoadingIcon,
  NoConectionIcon,
  RefreshIcon,
  CloseIcon,
  ShareIcon,
  MailIcon,
  CheckIcon,
  ErrorIcon,
  SettingIcon,
  RightArrowIcon,
  LeftArrowIcon
};
