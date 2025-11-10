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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="container px-4 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Platformă de cadouri personalizate</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Creează cadoul{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  perfect
                </span>{" "}
                în 5 minute!
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-xl">
                Giveaora te ajută să creezi gift box-uri personalizate pentru orice ocazie și să câștigi comisioane din recomandările tale.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/creator">
                    <Gift className="mr-2 h-5 w-5" />
                    Creează Gift Box
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/feed">Explorează Feed-ul</Link>
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">Gift Boxes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">500+</div>
                  <div className="text-sm text-muted-foreground">Utilizatori activi</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">10%</div>
                  <div className="text-sm text-muted-foreground">Comision</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
              <img
                src={heroImage}
                alt="Gift boxes showcase"
                className="relative rounded-3xl shadow-strong animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              De ce să alegi{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">Giveaora</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Platforma completă pentru crearea, partajarea și monetizarea cadourilor personalizate
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:shadow-glow-primary transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 space-y-4">
                <div className="h-14 w-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow-primary">
                  <Gift className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Creator Intuitiv</h3>
                <p className="text-muted-foreground">
                  Chestionar pas-cu-pas care te ghidează în crearea gift box-ului perfect pentru orice ocazie și persoană specială.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-glow-secondary transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 space-y-4">
                <div className="h-14 w-14 rounded-2xl bg-gradient-secondary flex items-center justify-center shadow-glow-secondary">
                  <TrendingUp className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Câștigă Comisioane</h3>
                <p className="text-muted-foreground">
                  Primești 10% comision din fiecare vânzare generată prin gift box-urile tale. Cu cât partajezi mai mult, cu atât câștigi mai mult!
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-glow-primary transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 space-y-4">
                <div className="h-14 w-14 rounded-2xl bg-gradient-accent flex items-center justify-center">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Social Feed</h3>
                <p className="text-muted-foreground">
                  Explorează, inspiră-te și partajează gift box-uri create de comunitate. Descoperă idei noi pentru orice ocazie.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-glow-secondary transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 space-y-4">
                <div className="h-14 w-14 rounded-2xl bg-gradient-secondary flex items-center justify-center shadow-glow-secondary">
                  <Heart className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Personalizare Completă</h3>
                <p className="text-muted-foreground">
                  Alege din sute de produse organizate pe categorii: familie, romantice, profesionale și mai multe.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-glow-primary transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 space-y-4">
                <div className="h-14 w-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow-primary">
                  <Sparkles className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Conținut AI</h3>
                <p className="text-muted-foreground">
                  Generare automată de conținut personalizat (video/audio) pentru fiecare gift box creat.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-glow-secondary transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 space-y-4">
                <div className="h-14 w-14 rounded-2xl bg-gradient-accent flex items-center justify-center">
                  <Star className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Tracking Vânzări</h3>
                <p className="text-muted-foreground">
                  Dashboard complet pentru monitorizarea gift box-urilor tale, vânzărilor și comisioanelor câștigate.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4">
          <Card className="relative overflow-hidden border-2">
            <div className="absolute inset-0 bg-gradient-hero opacity-10" />
            <CardContent className="relative p-12 md:p-16 text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold">
                Gata să începi?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Înscrie-te acum și creează primul tău gift box personalizat. Inspiră-i pe alții și câștigă comisioane!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="hero" size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/auth">
                    Creează cont gratuit
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/shop">
                    Explorează magazinul
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/30">
        <div className="container px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Gift className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                  Giveaora
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Platforma de cadouri personalizate cu sistem de comisioane.
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

          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2025 Giveaora. Toate drepturile rezervate.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
