"use client";

import Image from "next/image";

function Avatar() {
  return (
    <Image
      className="rounded-full"
      height="30"
      width="30"
      alt="noUser"
      src="/images/avatar.png"
    />
  );
}

export default Avatar;
