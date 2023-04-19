import * as React from "react"

type Props = {
  color?: string;
}

const GalleryIndicator = ({ color = '#fff' }: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={22} height={24} fill="none">
    <path fill={color} d="m11 0 10.392 6v12L11 24 .608 18V6L11 0Z" />
  </svg>
)
export default GalleryIndicator;