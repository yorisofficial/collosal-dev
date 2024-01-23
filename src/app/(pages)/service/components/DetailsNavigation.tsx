import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const DetailsNavigation = () => {
  return (
    <div className="col-span-2 flex items-center justify-end">
      <Link href="/service/details" className="group flex gap-2">
        Service Detail{" "}
        <IconArrowRight className="duration-500 group-hover:translate-x-4" />
      </Link>
    </div>
  );
};

export default DetailsNavigation;
