"use client";

import { Button } from "@/components/ui/button";
import { adminLinks } from "@/utils/links";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Sidebar() {
  const pathName = usePathname();
  return (
    <div>
      {adminLinks.map((link) => {
        const isActivePage = pathName === link.href;
        const variant = isActivePage ? "default" : "ghost";
        return (
          <Button
            asChild
            className=" mb-2 capitalize font-normal justify-start"
            variant={variant}
            key={link.href}
          >
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          </Button>
        );
      })}
    </div>
  );
}

export default Sidebar;
