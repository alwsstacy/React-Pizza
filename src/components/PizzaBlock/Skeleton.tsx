import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="134" cy="136" r="125" /> 
    <rect x="5" y="455" rx="10" ry="10" width="95" height="28" /> 
    <rect x="87" y="191" rx="0" ry="0" width="0" height="4" /> 
    <rect x="0" y="301" rx="10" ry="10" width="280" height="20" /> 
    <rect x="3" y="340" rx="10" ry="10" width="280" height="88" /> 
    <rect x="125" y="446" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
)

export default Skeleton;
