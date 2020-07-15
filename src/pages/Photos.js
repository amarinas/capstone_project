import React, { useContext } from "react";

import Image from "../components/image";
import { Context } from "../Context";
import { getClass } from "../utils";

function Photos() {
  const { allPhotos } = useContext(Context);
  const imageElements = allPhotos.map((img, i) => (
    <Image key={img.id} img={img} className={getClass(i)} />
  ));
  // console.log(allPhotos);

  return <main className="photos">{imageElements}</main>;
}

export default Photos;
