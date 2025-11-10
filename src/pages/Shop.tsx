import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ShoppingBag, Search, Filter } from "lucide-react";
import Header from "@/components/Header";

interface Product {
  id: string;
  name: string;
  category: string;
  costPrice: number;
  salePrice: number;
  commission: number;
  tags: string[];
  image: string;
}

const mockProducts: Product[] = [
  {
    id: "1",
    name: "Set cadou șampanie & ciocolată",
    category: "Romantice",
    costPrice: 100,
    salePrice: 107,
    commission: 10,
    tags: ["#Romantice", "#Aniversare"],
    image: "🥂"
  },
  {
    id: "2",
    name: "Coș cu flori premium",
    category: "Familie",
    costPrice: 150,
    salePrice: 160,
    commission: 10,
    tags: ["#Familie", "#ZiDeNastere"],
    image: "💐"
  },
  {
    id: "3",
    name: "Set cafetar de lux",
    category: "Profesional",
    costPrice: 200,
    salePrice: 214,
    commission: 10,
    tags: ["#Profesional", "#Promovare"],
    image: "☕"
  },
  {
    id: "4",
    name: "Set jocuri de societate",
    category: "Prieteni",
    costPrice: 120,
    salePrice: 128,
    commission: 10,
    tags: ["#Prieteni", "#Distractie"],
    image: "🎲"
  },
  {
    id: "5",
    name: "Kit papetărie premium",
    category: "Educațional",
    costPrice: 80,
    salePrice: 86,
    commission: 10,
    tags: ["#Educațional", "#Student"],
    image: "📚"
  },
  {
    id: "6",
    name: "Set cadou spa",
    category: "Romantice",
    costPrice: 130,
    salePrice: 139,
    commission: 10,
    tags: ["#Romantice", "#Relaxare"],
    image: "🧖‍♀️"
  },
  {
    id: "7",
    name: "Set ustensile bucătărie",
    category: "Familie",
    costPrice: 170,
    salePrice: 182,
    commission: 10,
    tags: ["#Familie", "#Mama"],
    image: "👨‍🍳"
  },
  {
    id: "8",
    name: "Set tehnologie & gadgeturi",
    category: "Profesional",
    costPrice: 250,
    salePrice: 268,
    commission: 10,
    tags: ["#Profesional", "#Tech"],
    image: "💻"
  },
  {
    id: "9",
    name: "Set bicicletă & accesorii",
    category: "Prieteni",
    costPrice: 300,
    salePrice: 321,
    commission: 10,
    tags: ["#Prieteni", "#Sport"],
    image: "🚴"
  }
];

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ["Toate", "Familie", "Romantice", "Profesional", "Prieteni", "Educațional"];

  const filteredProducts = mockProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = !selectedCategory || selectedCategory === "Toate" || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container px-4 py-8">
        {/* Header Section */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">
                <span className="bg-gradient-hero bg-clip-text text-transparent">Magazin</span>
              </h1>
              <p className="text-muted-foreground">
                Descoperă produse perfecte pentru gift box-uri
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <ShoppingBag className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">{mockProducts.length} produse disponibile</span>
            </div>
          </div>

          {/* Search & Filters */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Caută produse..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category || (category === "Toate" && !selectedCategory) ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category === "Toate" ? null : category)}
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-glow-primary transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
                <div className="aspect-square flex items-center justify-center text-6xl">
                  {product.image}
                </div>
              </CardHeader>

              <CardContent className="pt-6 space-y-4">
                <div>
                  <Badge variant="secondary" className="mb-2">
                    {product.category}
                  </Badge>
                  <CardTitle className="text-lg line-clamp-2">{product.name}</CardTitle>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      {product.salePrice} RON
                    </span>
                    <Badge className="bg-secondary text-secondary-foreground">
                      +{product.commission}% comision
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Câștigi {(product.salePrice - product.costPrice).toFixed(2)} RON/vânzare
                  </p>
                </div>

                <div className="flex flex-wrap gap-1">
                  {product.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-2">
                <Button className="flex-1" variant="default">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Adaugă în Gift Box
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">
              Nu am găsit produse care să corespundă căutării tale.
            </p>
            <Button variant="outline" className="mt-4" onClick={() => {
              setSearchQuery("");
              setSelectedCategory(null);
            }}>
              Resetează filtrele
            </Button>
          </div>
        )}

        {/* Commission Info */}
        <Card className="mt-12 border-2 bg-gradient-to-br from-secondary/10 to-accent/10">
          <CardContent className="p-8 text-center space-y-4">
            <h3 className="text-2xl font-bold">Sistem de comisioane</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Câștigi 10% comision din fiecare vânzare generată prin gift box-urile tale. 
              Prețul afișat include deja comisionul tău!
            </p>
            <div className="flex flex-wrap justify-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10%</div>
                <div className="text-sm text-muted-foreground">Comision standard</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">12%</div>
                <div className="text-sm text-muted-foreground">Peste 1000 RON/lună</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">15%</div>
                <div className="text-sm text-muted-foreground">Peste 5000 RON/lună</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Shop;
