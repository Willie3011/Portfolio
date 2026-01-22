import { Image } from '@imagekit/react';
function ImageComp({src, w, h}) {
  return (
    <Image
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      src={src}
      width={w}
      height={h}
    />
  )
}

export default ImageComp