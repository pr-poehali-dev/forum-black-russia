import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Search, Bell, MessageSquare, User, LogIn } from "lucide-react";
import { Link } from "react-router-dom";

type ForumHeaderProps = {
  isLoggedIn?: boolean;
  username?: string;
  avatarUrl?: string;
};

const ForumHeader = ({
  isLoggedIn = false,
  username = "",
  avatarUrl = "/placeholder.svg",
}: ForumHeaderProps) => {
  return (
    <header className="bg-forum-card border-b border-forum-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-forum-text font-bold text-xl flex items-center">
              <img src="/logo-b.svg" alt="Black Russia Forum" className="h-10 mr-2" />
              <span>Black Russia</span>
            </Link>
            
            <div className="hidden md:flex relative rounded-md">
              <input
                type="text"
                placeholder="Поиск на форуме..."
                className="bg-forum-bg text-forum-text border border-forum-border rounded-md py-1.5 pl-3 pr-10 w-64 focus:outline-none focus:ring-1 focus:ring-forum-accent"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-forum-secondary-text" />
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {isLoggedIn ? (
              <>
                <Button variant="ghost" size="icon" className="text-forum-secondary-text hover:text-forum-text">
                  <Bell size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-forum-secondary-text hover:text-forum-text">
                  <MessageSquare size={20} />
                </Button>
                <div className="flex items-center space-x-2">
                  <Avatar className="forum-avatar h-8 w-8">
                    <img src={avatarUrl} alt={username} />
                  </Avatar>
                  <span className="hidden md:inline text-forum-text">{username}</span>
                </div>
              </>
            ) : (
              <>
                <Button variant="ghost" className="text-forum-text hover:text-forum-accent">
                  <LogIn className="mr-1.5 h-4 w-4" /> Войти
                </Button>
                <Button className="forum-button">
                  <User className="mr-1.5 h-4 w-4" /> Регистрация
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default ForumHeader;