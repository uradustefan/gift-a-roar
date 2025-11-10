import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Gift, User, ShoppingBag, Home } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 group">
          <Gift className="h-8 w-8 text-primary group-hover:animate-float" />
          <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Giveaora
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Acasă
          </Link>
          <Link to="/feed" className="text-sm font-medium hover:text-primary transition-colors">
            Feed
          </Link>
          <Link to="/shop" className="text-sm font-medium hover:text-primary transition-colors">
            Magazin
          </Link>
          <Link to="/creator" className="text-sm font-medium hover:text-primary transition-colors">
            Creează Gift Box
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/shop">
              <ShoppingBag className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link to="/auth">Autentificare</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
