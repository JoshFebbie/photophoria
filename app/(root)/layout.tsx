import Sidebar from "@/components/shared/Sidebar";
import MoblileNav from "@/components/shared/MobileNav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <Sidebar />
      <MoblileNav />

      <div className="root-container">
        <div className="wrapper">
            {children}
        </div>
      </div>
    </main>
  );
};

export default Layout;
