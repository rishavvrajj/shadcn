import type { ReactNode } from "react";

type SideBarProps = {
  children: ReactNode;
};

export default function SideBar({ children }: SideBarProps) {
  return (
    <div className="">
      <aside>
        {/* Sidebar content */}
      </aside>

      <section className="flex-1">
        {children}
      </section>
    </div>
  );
}