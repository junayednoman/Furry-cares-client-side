import { getCurrentUser } from "@/services/auth";
import { TUser } from "@/types/user.type";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { protectedRoutes } from "@/constant/global.constant";
import { logOut } from "@/services/auth";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";

export const UserContext = createContext<TUserProviderValues | undefined>(
  undefined
);
type TDecodeUser = Pick<TUser, "_id" | "name" | "email" | "role">;

type TUserProviderValues = {
  user: TDecodeUser | null;
  setUser: Dispatch<SetStateAction<TDecodeUser | null>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  handleLogout: () => void;
};

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<TDecodeUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const handleSetUser = async () => {
    const user = await getCurrentUser();
    setUser(user);
    setLoading(false);
  };

  useEffect(() => {
    handleSetUser();
  }, [loading]);

  // handle logout
  const handleLogout = async () => {
    await logOut();
    setLoading(true);

    toast.success("Log out success!");
    if (protectedRoutes.some((route) => pathname.match(route))) {
      return router.push(`/auth/login?redirect=${pathname}`);
    }
  };

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    handleLogout,
  };
  return (
    <UserContext.Provider value={authInfo}>{children}</UserContext.Provider>
  );
};

export default AuthProvider;

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be called within the UserProvider context");
  }
  return context;
};
