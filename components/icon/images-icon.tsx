import * as React from "react";
const ImagesIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 18q-.824 0-1.412-.587A1.93 1.93 0 0 1 0 16V2Q0 1.176.588.588A1.93 1.93 0 0 1 2 0h14q.824 0 1.413.588Q18 1.175 18 2v14q0 .824-.587 1.413A1.93 1.93 0 0 1 16 18zm0-2h14V2H2zm1-2h12l-3.75-5-3 4L6 10zm2.5-7q.624 0 1.063-.437Q7 6.125 7 5.5t-.437-1.062A1.45 1.45 0 0 0 5.5 4q-.625 0-1.062.438A1.45 1.45 0 0 0 4 5.5q0 .624.438 1.063Q4.874 7 5.5 7"
      fill="#de3163"
    />
  </svg>
);
export default ImagesIcon;
