import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gift, TrendingUp, DollarSign, Eye, Share2, Edit, Trash2 } from "lucide-react";
import Header from "@/components/Header";

const mockGiftBoxes = [
  {
    id: "1",
    title: "Gift Box Aniversare Soție",
    category: "Romantice",
    views: 234,
    shares: 45,
    sales: 12,
    commission: 128.40,
    status: "active",
    createdAt: "2025-01-15"
  },
  {
    id: "2",
    title: "Gift Box Zi de Naștere Mamă",
    category: "Familie",
    views: 189,
    shares: 32,
    sales: 8,
    commission: 102.40,
    status: "active",
    createdAt: "2025-01-10"
  },
  {
    id: "3",
    title: "Gift Box Promovare Coleg",
    category: "Profesional",
    views: 312,
    shares: 67,
    sales: 15,
    commission: 214.50,
    status: "active",
    createdAt: "2025-01-05"
  }
];

const Dashboard = () => {
  const totalSales = mockGiftBoxes.reduce((sum, box) => sum + box.sales, 0);
  const totalCommission = mockGiftBoxes.reduce((sum, box) => sum + box.commission, 0);
  const totalViews = mockGiftBoxes.reduce((sum, box) => sum + box.views, 0);
  const totalShares = mockGiftBoxes.reduce((sum, box) => sum + box.shares, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            Dashboard{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">Utilizator</span>
          </h1>
          <p className="text-muted-foreground">
            Monitorizează performanța gift box-urilor tale
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-2 hover:shadow-glow-primary transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Gift Boxes Active
              </CardTitle>
              <Gift className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{mockGiftBoxes.length}</div>
              <p className="text-xs text-muted-foreground mt-1">
                +2 față de luna trecută
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-glow-secondary transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Vânzări Generate
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{totalSales}</div>
              <p className="text-xs text-muted-foreground mt-1">
                +23% față de luna trecută
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-glow-primary transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Comision Total
              </CardTitle>
              <DollarSign className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{totalCommission.toFixed(2)} RON</div>
              <p className="text-xs text-muted-foreground mt-1">
                +18% față de luna trecută
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-glow-secondary transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Vizualizări
              </CardTitle>
              <Eye className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{totalViews}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {totalShares} partajări
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="giftboxes" className="space-y-6">
          <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="giftboxes">Gift Box-uri</TabsTrigger>
            <TabsTrigger value="commissions">Comisioane</TabsTrigger>
            <TabsTrigger value="sales">Vânzări</TabsTrigger>
            <TabsTrigger value="settings">Setări</TabsTrigger>
          </TabsList>

          <TabsContent value="giftboxes" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Gift Box-urile Mele</CardTitle>
                <CardDescription>
                  Toate gift box-urile create de tine
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockGiftBoxes.map((box) => (
                  <Card key={box.id} className="border-2">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="space-y-2 flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-lg">{box.title}</h3>
                            <Badge variant="secondary">{box.category}</Badge>
                            <Badge className="bg-secondary text-secondary-foreground">
                              {box.status}
                            </Badge>
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Eye className="h-4 w-4" />
                              {box.views} vizualizări
                            </div>
                            <div className="flex items-center gap-1">
                              <Share2 className="h-4 w-4" />
                              {box.shares} partajări
                            </div>
                            <div className="flex items-center gap-1">
                              <TrendingUp className="h-4 w-4" />
                              {box.sales} vânzări
                            </div>
                          </div>
                          <div className="text-lg font-bold text-secondary">
                            {box.commission.toFixed(2)} RON comision
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Share2 className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="commissions" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Istoric Comisioane</CardTitle>
                <CardDescription>
                  Detalii despre comisioanele câștigate
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="border-2 bg-gradient-to-br from-primary/10 to-accent/10">
                      <CardContent className="p-6 text-center">
                        <div className="text-3xl font-bold text-primary">10%</div>
                        <div className="text-sm text-muted-foreground">Nivel curent</div>
                      </CardContent>
                    </Card>
                    <Card className="border-2">
                      <CardContent className="p-6 text-center">
                        <div className="text-3xl font-bold">{totalCommission.toFixed(2)} RON</div>
                        <div className="text-sm text-muted-foreground">Luna aceasta</div>
                      </CardContent>
                    </Card>
                    <Card className="border-2">
                      <CardContent className="p-6 text-center">
                        <div className="text-3xl font-bold">{(totalCommission * 3).toFixed(2)} RON</div>
                        <div className="text-sm text-muted-foreground">Total câștigat</div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="border-2 bg-gradient-to-br from-secondary/10 to-accent/10">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4">Niveluri de comision</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 rounded-lg bg-background">
                          <div>
                            <div className="font-medium">Nivel 1 - Standard</div>
                            <div className="text-sm text-muted-foreground">0 - 1000 RON/lună</div>
                          </div>
                          <Badge className="bg-primary text-primary-foreground">10%</Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-lg bg-background">
                          <div>
                            <div className="font-medium">Nivel 2 - Silver</div>
                            <div className="text-sm text-muted-foreground">1000 - 5000 RON/lună</div>
                          </div>
                          <Badge className="bg-secondary text-secondary-foreground">12%</Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-lg bg-background">
                          <div>
                            <div className="font-medium">Nivel 3 - Gold</div>
                            <div className="text-sm text-muted-foreground">5000+ RON/lună</div>
                          </div>
                          <Badge className="bg-accent text-accent-foreground">15%</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sales" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Istoric Vânzări</CardTitle>
                <CardDescription>
                  Vânzările generate de gift box-urile tale
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center py-8">
                  Istoricul vânzărilor va fi disponibil în curând...
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Setări Cont</CardTitle>
                <CardDescription>
                  Gestionează preferințele tale
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center py-8">
                  Setările vor fi disponibile în curând...
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
