import { SideNavigation } from "../index";

export function PageWrapper({ children }) {
  return (
    <div className="flex gap-4 pt-4">
      <aside className="min-w-[15%]">
        <SideNavigation />
      </aside>

      <main className="grow">{children}</main>
    </div>
  );
}
