import { BottomNavigation, SideNavigation } from "../index";

export function PageWrapper({ children }) {
  return (
    <div className="relative flex gap-4 pt-4">
      <aside className="hidden md:block min-w-[15%]">
        <SideNavigation />
      </aside>

      <main className="grow mb-[2rem]">{children}</main>

      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 block md:hidden shadow-black shadow-2xl z-30">
        <BottomNavigation />
      </div>
    </div>
  );
}
