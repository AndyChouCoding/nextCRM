import { useRouter } from "next/router";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    const router = useRouter();
  return (
    <>
      <div className="mx-auto">
        <div className="flex justify-center bg-amber-200">
          <nav className="flex justify-between w-[1200px]  p-4">
            <a onClick={()=>router.push("/")}>CRM</a>
            <div>Options</div>
          </nav>
        </div>
        <div className="flex justify-center mt-4">
            <main className="w-[1200px]">{children}</main>
        </div>
      </div>
    </>
  );
};
export default Layout;

