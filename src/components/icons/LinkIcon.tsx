import * as React from "react"

type Props = {
  color?: string;
};

const LinkIcon = ({ color = '#fff' }: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={17} fill="none">
    <path
      fill={color}
      fillRule="evenodd"
      d="M0 .5h5.333v1.778H1.778v12.444h12.444v-3.555H16V16.5H0V.5Zm12.965 1.778H10.37V.5H16v5.63h-1.778V3.535L8.63 9.129 7.37 7.87l5.594-5.593Z"
      clipRule="evenodd"
    />
  </svg>
)
export default LinkIcon;

