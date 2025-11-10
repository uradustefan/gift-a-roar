import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Phone, MapPin, Edit, Gift, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Profil actualizat!",
      description: "Modificările tale au fost salvate cu succes.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container px-4 py-8 max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            Profil{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">Utilizator</span>
          </h1>
          <p className="text-muted-foreground">
            Gestionează informațiile și preferințele tale
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Sidebar - Profile Card */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-2">
              <CardContent className="p-6 text-center space-y-4">
                <Avatar className="h-32 w-32 mx-auto border-4 border-primary/20">
                  <AvatarImage src="" />
                  <AvatarFallback className="text-3xl bg-gradient-primary text-white">
                    MI
                  </AvatarFallback>
                </Avatar>
                
                <div>
                  <h2 className="text-2xl font-bold">Maria Ionescu</h2>
                  <p className="text-muted-foreground">maria@exemplu.com</p>
                </div>

                <div className="flex justify-center gap-2">
                  <Badge className="bg-primary text-primary-foreground">
                    Nivel 1 - Standard
                  </Badge>
                </div>

                <Button className="w-full" variant="outline">
                  <Edit className="mr-2 h-4 w-4" />
                  Editează Avatar
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 bg-gradient-to-br from-primary/10 to-accent/10">
              <CardHeader>
                <CardTitle className="text-lg">Statistici rapide</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Gift className="h-4 w-4 text-primary" />
                    <span className="text-sm">Gift Boxes</span>
                  </div>
                  <span className="font-bold">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-secondary" />
                    <span className="text-sm">Vânzări</span>
                  </div>
                  <span className="font-bold">35</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Comision total</span>
                  </div>
                  <span className="font-bold text-secondary">445.30 RON</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Informații Personale</CardTitle>
                <CardDescription>
                  Actualizează-ți datele personale
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prenume</Label>
                    <Input
                      id="firstName"
                      placeholder="Maria"
                      defaultValue="Maria"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nume</Label>
                    <Input
                      id="lastName"
                      placeholder="Ionescu"
                      defaultValue="Ionescu"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="maria@exemplu.com"
                      defaultValue="maria@exemplu.com"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+40 712 345 678"
                      defaultValue="+40 712 345 678"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Locație</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="location"
                      placeholder="București, România"
                      defaultValue="București, România"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    placeholder="Scrie câteva cuvinte despre tine..."
                    rows={4}
                    defaultValue="Pasionată de crearea de cadouri personalizate care aduc zâmbete pe fețele celor dragi."
                  />
                </div>

                <Button onClick={handleSave} className="w-full md:w-auto">
                  Salvează modificările
                </Button>
              </CardContent>
            </Card>

            {/* Payment Information */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Informații Plată</CardTitle>
                <CardDescription>
                  Configurează modul în care primești comisioanele
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="iban">IBAN</Label>
                  <Input
                    id="iban"
                    placeholder="RO49 AAAA 1B31 0075 9384 0000"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bank">Bancă</Label>
                  <Input
                    id="bank"
                    placeholder="Nume bancă"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="accountName">Titular cont</Label>
                  <Input
                    id="accountName"
                    placeholder="Nume complet"
                  />
                </div>

                <Button variant="outline" className="w-full md:w-auto">
                  Salvează informații plată
                </Button>
              </CardContent>
            </Card>

            {/* Security */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Securitate</CardTitle>
                <CardDescription>
                  Schimbă-ți parola pentru a-ți proteja contul
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Parolă curentă</Label>
                  <Input
                    id="currentPassword"
                    type="password"
                    placeholder="••••••••"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="newPassword">Parolă nouă</Label>
                  <Input
                    id="newPassword"
                    type="password"
                    placeholder="••••••••"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirmă parola nouă</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                  />
                </div>

                <Button variant="outline" className="w-full md:w-auto">
                  Actualizează parola
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
