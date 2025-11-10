import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, Heart, TrendingUp, Users, Sparkles, Star } from "lucide-react";
import Header from "@/components/Header";
import heroImage from "@/assets/hero-gifts.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2em0wIDZjLTMuMzE0IDAtNiAyLjY4Ni02IDZzMi42ODYgNiA2IDYgNi0yLjY4NiA2LTYtMi42ODYtNi02LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
        
        <div className="container px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-primary shadow-glow-primary backdrop-blur-sm border border-primary/30 animate-glow-pulse">
                <Sparkles className="h-5 w-5 text-white animate-pulse" />
                <span className="text-sm font-semibold text-white">🔥 Trending pe TikTok & Instagram</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tighter">
                Cadouri care{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-hero bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
                    viralizează
                  </span>
                  <span className="absolute -inset-1 bg-gradient-hero blur-2xl opacity-30 -z-10"></span>
                </span>
                <br />
                <span className="text-5xl md:text-6xl lg:text-7xl">în 5 minute! ⚡</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-foreground/80 max-w-xl font-medium">
                Alătură-te trendului #GIVAORA — creează gift box-uri virale, câștigă <span className="text-success font-bold">10% comision</span> și fii următorul creator de succes! 🎁💰
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild className="text-lg px-10 py-7 shadow-glow-primary hover:shadow-glow-primary hover:scale-105 transition-all font-bold group">
                  <Link to="/creator">
                    <Gift className="mr-2 h-6 w-6 group-hover:rotate-12 transition-transform" />
                    Creează acum GRATUIT
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-lg px-10 py-7 border-2 hover:bg-muted/50 backdrop-blur-sm font-semibold">
                  <Link to="/feed">Vezi ce-au creat alții 🔥</Link>
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-6">
                <div className="text-center group cursor-pointer">
                  <div className="text-4xl font-black text-primary group-hover:scale-110 transition-transform">12K+</div>
                  <div className="text-sm text-muted-foreground font-medium">Gift Boxes create</div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="text-4xl font-black text-secondary group-hover:scale-110 transition-transform">8K+</div>
                  <div className="text-sm text-muted-foreground font-medium">Creatori activi</div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="text-4xl font-black bg-gradient-hero bg-clip-text text-transparent group-hover:scale-110 transition-transform">10%</div>
                  <div className="text-sm text-muted-foreground font-medium">Comision garantat</div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 opacity-90">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-10 w-10 rounded-full bg-gradient-primary border-2 border-background" />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="font-bold">+234 creatori</div>
                  <div className="text-muted-foreground">s-au alăturat azi</div>
                </div>
              </div>
            </div>

            <div className="relative lg:scale-110">
              <div className="absolute inset-0 bg-gradient-hero opacity-40 blur-[100px] animate-pulse" />
              <div className="absolute -top-10 -right-10 h-72 w-72 bg-gradient-secondary opacity-30 rounded-full blur-3xl animate-bounce-slow" />
              <div className="absolute -bottom-10 -left-10 h-72 w-72 bg-gradient-accent opacity-30 rounded-full blur-3xl animate-bounce-slow" style={{ animationDelay: '1s' }} />
              
              <div className="relative backdrop-blur-sm bg-white/10 p-4 rounded-[2rem] shadow-glass border border-white/20">
                <img
                  src={heroImage}
                  alt="Gift boxes trending pe social media"
                  className="relative rounded-3xl shadow-strong animate-float"
                />
                <div className="absolute -bottom-4 -right-4 bg-success text-white px-6 py-3 rounded-full shadow-glow-primary font-bold text-lg animate-bounce">
                  🔥 #1 Trending
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
        <div className="container px-4 relative z-10">
          <div className="text-center mb-20 space-y-6">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-secondary/10 border border-secondary/30 mb-4">
              <Star className="h-4 w-4 text-secondary fill-secondary" />
              <span className="text-sm font-semibold text-secondary">De ce suntem #1</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight">
              De ce toată lumea folosește{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">GIVAORA</span>? 🚀
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium">
              Prima platformă din România care transformă gift box-urile în venit pasiv 💰
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-primary/20 hover:border-primary/50 hover:shadow-glow-primary transition-all duration-500 hover:-translate-y-3 group bg-gradient-to-br from-background to-primary/5 backdrop-blur-sm overflow-hidden relative">
              <div className="absolute top-0 right-0 h-40 w-40 bg-gradient-primary opacity-10 blur-3xl group-hover:opacity-20 transition-opacity" />
              <CardContent className="p-8 space-y-4 relative z-10">
                <div className="h-16 w-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow-primary group-hover:scale-110 group-hover:rotate-6 transition-all">
                  <Gift className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-black">Creator în 5 min ⚡</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Chestionar inteligent AI care te ajută să creezi gift box-ul perfect în doar câteva minute. Zero experiență necesară!
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-success/20 hover:border-success/50 hover:shadow-glow-secondary transition-all duration-500 hover:-translate-y-3 group bg-gradient-to-br from-background to-success/5 backdrop-blur-sm overflow-hidden relative">
              <div className="absolute top-0 right-0 h-40 w-40 bg-gradient-secondary opacity-10 blur-3xl group-hover:opacity-20 transition-opacity" />
              <CardContent className="p-8 space-y-4 relative z-10">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-success to-secondary flex items-center justify-center shadow-glow-secondary group-hover:scale-110 group-hover:rotate-6 transition-all">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-black">10% comision garantat 💰</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fiecare gift box = venit pasiv! Primești 10% din ORICE vânzare generată. Creatorii noștri câștigă în medie 500-2000 RON/lună!
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 hover:border-accent/50 hover:shadow-glow-primary transition-all duration-500 hover:-translate-y-3 group bg-gradient-to-br from-background to-accent/5 backdrop-blur-sm overflow-hidden relative">
              <div className="absolute top-0 right-0 h-40 w-40 bg-gradient-accent opacity-10 blur-3xl group-hover:opacity-20 transition-opacity" />
              <CardContent className="p-8 space-y-4 relative z-10">
                <div className="h-16 w-16 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-glass group-hover:scale-110 group-hover:rotate-6 transition-all">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-black">Social Feed viral 🔥</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Inspiră-te din 12K+ gift boxes create de comunitate. Fii primul care postează noul trend și primești bonus engagement!
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 hover:border-secondary/50 hover:shadow-glow-secondary transition-all duration-500 hover:-translate-y-3 group bg-gradient-to-br from-background to-secondary/5 backdrop-blur-sm overflow-hidden relative">
              <div className="absolute top-0 right-0 h-40 w-40 bg-gradient-secondary opacity-10 blur-3xl group-hover:opacity-20 transition-opacity" />
              <CardContent className="p-8 space-y-4 relative z-10">
                <div className="h-16 w-16 rounded-2xl bg-gradient-secondary flex items-center justify-center shadow-glow-secondary group-hover:scale-110 group-hover:rotate-6 transition-all">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-black">1000+ produse premium 💎</h3>
                <p className="text-muted-foreground leading-relaxed">
                  De la tech gadgets la luxury items - alege din catalogul cel mai complet de produse pentru orice ocazie și budget!
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/50 hover:shadow-glow-primary transition-all duration-500 hover:-translate-y-3 group bg-gradient-to-br from-background to-primary/5 backdrop-blur-sm overflow-hidden relative">
              <div className="absolute top-0 right-0 h-40 w-40 bg-gradient-primary opacity-10 blur-3xl group-hover:opacity-20 transition-opacity" />
              <CardContent className="p-8 space-y-4 relative z-10">
                <div className="h-16 w-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow-primary group-hover:scale-110 group-hover:rotate-6 transition-all">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-black">Video AI personalizat 🎬</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fiecare gift box vine cu video AI unic! Perfect pentru TikTok, Instagram Reels și Stories. Content gata de viral!
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 hover:border-accent/50 hover:shadow-glow-secondary transition-all duration-500 hover:-translate-y-3 group bg-gradient-to-br from-background to-accent/5 backdrop-blur-sm overflow-hidden relative">
              <div className="absolute top-0 right-0 h-40 w-40 bg-gradient-accent opacity-10 blur-3xl group-hover:opacity-20 transition-opacity" />
              <CardContent className="p-8 space-y-4 relative z-10">
                <div className="h-16 w-16 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-glass group-hover:scale-110 group-hover:rotate-6 transition-all">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-black">Dashboard Pro 📊</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Urmărește în timp real: views, clicks, conversii și comisioane. Vezi exact cât câștigi din fiecare gift box!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
        <div className="container px-4 relative z-10">
          <Card className="relative overflow-hidden border-2 border-primary/30 shadow-glow-primary">
            <div className="absolute inset-0 bg-gradient-hero opacity-20 animate-gradient-shift bg-[length:200%_auto]" />
            <div className="absolute top-0 right-0 h-96 w-96 bg-gradient-secondary opacity-20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 h-96 w-96 bg-gradient-accent opacity-20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            
            <CardContent className="relative p-12 md:p-20 text-center space-y-10">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-success/20 border border-success/40 mb-4 animate-bounce">
                <span className="text-sm font-bold text-success">⏰ Ofertă limitată - Primii 100 de creatori primesc bonus de start!</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-black tracking-tight">
                Devine creator GIVAORA<br />
                <span className="bg-gradient-hero bg-clip-text text-transparent">azi. Gratuit. ⚡</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto font-medium leading-relaxed">
                Alătură-te celor <span className="font-black text-primary">8,000+</span> creatori care câștigă din pasiunea pentru cadouri. 
                <span className="block mt-2 text-2xl md:text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">Zero risc. Zero cost. 100% profit pentru tine!</span>
              </p>
              
              <div className="flex flex-wrap gap-6 justify-center pt-4">
                <Button variant="hero" size="lg" asChild className="text-xl px-12 py-8 shadow-glow-primary hover:shadow-glow-primary hover:scale-110 transition-all font-black group">
                  <Link to="/auth">
                    <Gift className="mr-3 h-7 w-7 group-hover:rotate-12 transition-transform" />
                    Începe ACUM - 100% GRATUIT
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-xl px-12 py-8 border-2 hover:bg-muted/50 backdrop-blur-sm font-bold">
                  <Link to="/feed">Vezi exemple reale 🔥</Link>
                </Button>
              </div>

              <div className="flex items-center justify-center gap-8 pt-8 text-sm opacity-80">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-success animate-pulse" />
                  <span>✓ Fără card necesar</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-success animate-pulse" />
                  <span>✓ Setup în 2 minute</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-success animate-pulse" />
                  <span>✓ Suport 24/7</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-16 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
        <div className="container px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Gift className="h-8 w-8 text-primary animate-glow-pulse" />
                <span className="text-2xl font-black bg-gradient-hero bg-clip-text text-transparent tracking-tight">
                  GIVAORA
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                #1 platformă din România pentru cadouri personalizate cu sistem de comisioane. Transformă creativitatea în venit! 🚀
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Platformă</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/creator" className="hover:text-primary transition-colors">Creator Gift Box</Link></li>
                <li><Link to="/feed" className="hover:text-primary transition-colors">Social Feed</Link></li>
                <li><Link to="/shop" className="hover:text-primary transition-colors">Magazin</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Cont</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/auth" className="hover:text-primary transition-colors">Autentificare</Link></li>
                <li><Link to="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link></li>
                <li><Link to="/profile" className="hover:text-primary transition-colors">Profil</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Suport</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Ajutor</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Termeni</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-border/50 text-center space-y-4">
            <p className="text-sm text-muted-foreground">© 2025 GIVAORA. Toate drepturile rezervate. Made with 💜 in Romania</p>
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground/60">
              <span>🔥 Trending pe</span>
              <span className="font-semibold">#TikTok</span>
              <span>•</span>
              <span className="font-semibold">#Instagram</span>
              <span>•</span>
              <span className="font-semibold">#YouTube</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
