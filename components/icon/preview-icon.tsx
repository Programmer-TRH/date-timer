import * as React from "react";
const PreviewIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={16}
    viewBox="0 0 20 16"
    fill="none"
    {...props}
  >
    <path
      d="M13.75 16H2q-.824 0-1.412-.588A1.93 1.93 0 0 1 0 14V2Q0 1.176.588.588A1.93 1.93 0 0 1 2 0h16q.824 0 1.413.588Q20 1.175 20 2v12q0 .825-.587 1.412A1.93 1.93 0 0 1 18 16h-1.4l-4.7-4.7a4 4 0 0 1-1.138.525Q10.15 12 9.5 12q-1.875 0-3.187-1.312Q5 9.375 5 7.5t1.313-3.187T9.5 3t3.188 1.313T14 7.5q0 .675-.175 1.275T13.3 9.9l4.1 4.1h.6V2H2v12h9.75zM9.5 10q1.05 0 1.775-.725T12 7.5t-.725-1.775T9.5 5t-1.775.725T7 7.5t.725 1.775T9.5 10"
      fill="#de3163"
    />
  </svg>
);
export default PreviewIcon;
