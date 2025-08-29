import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { IoCart, IoHeart } from "react-icons/io5";
import { Separator } from "./ui/separator";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "@/lib/axios";
import { useEffect } from "react";
import { fetchCart } from "@/services/cartService";
import { History } from "lucide-react";

export const Header = () => {
  const userSelector = useSelector((state) => state.user);
  const cartSelector = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleLogout = () => {
    // 1. Remove local storage
    localStorage.removeItem("current-user");

    // 2. Reset user slice
    dispatch({
      type: "USER_LOGOUT",
    });
  };

  useEffect(() => {
    fetchCart(userSelector.id);
  }, []);

  return (
    <header className="h-16 border-b flex items-center justify-between px-8">
      {/* BRAND */}
      <Link to="/">
        <p className="text-2xl font-bold hover:cursor-pointer">Pleaground</p>
      </Link>

      {/* SEARCH BAR */}
      <Input className="max-w-[600px]" placeholder="Search products.." />

      {/* BUTTONS */}
      <div className="flex space-x-4 h-5 items-center">
        <div className="flex space-x-2">
          <Link to="/cart">
            <Button variant="ghost">
              <IoCart className="h-6 w-6 mr-2" />
              <span className="text-lg font-bold">
                {cartSelector.items.length}
              </span>
            </Button>
          </Link>

          <Link to="/history">
            <Button size="icon" variant="ghost">
              <History className="h-6 w-6" />
            </Button>
          </Link>
        </div>

        <Separator orientation="vertical" className="h-full" />

        <div className="flex space-x-2 items-center">
          {userSelector.id ? (
            <>
              <p>
                Hello, {userSelector.username} ({userSelector.role})
              </p>
              <Button onClick={handleLogout} variant="ghost">
                Log out
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button>Log In</Button>
              </Link>
              <Link to="/register">
                <Button variant="outline">Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
