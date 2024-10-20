import { User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ExitIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/hooks/redux";
import { setAuth } from "@/store/slices/common";

const Header = () => {
  const nav = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <header className="bg-red-600 flex justify-between items-center p-3 text-white">
      <div>Logo</div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <User className="w-4 h-4 cursor-pointer" />
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-56 mr-3 mt-2">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => {
                dispatch(setAuth(false));
                nav("/");
              }}
            >
              <ExitIcon className="w-2 h-2" /> Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
