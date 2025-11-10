import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Heart, Share2, User, Search, TrendingUp } from "lucide-react";
import Header from "@/components/Header";

interface GiftBox {
  id: string;
  creator: string;
  category: string;
  occasion: string;
  season: string;
  likes: number;
  commission: string;
  timestamp: string;
  tags: string[];
}

const mockGiftBoxes: GiftBox[] = [
  {
    id: "1",
    creator: "Maria Ionescu",
    category: "Romantice",
    occasion: "Aniversare",
    season: "Primăvară",
    likes: 124,
    commission: "107 RON (+10%)",
    timestamp: "Acum 2 ore",
    tags: ["#Romantice", "#Soție", "#Aniversare", "#Primavara"]
  },
  {
    id: "2",
    creator: "Alex Popescu",
    category: "Familie",
    occasion: "Zi de naștere",
    season: "Vară",
    likes: 89,
    commission: "150 RON (+10%)",
    timestamp: "Acum 5 ore",
    tags: ["#Familie", "#Mama", "#ZiDeNastere", "#Vara"]
  },
  {
    id: "3",
    creator: "Elena Radu",
    category: "Profesional",
    occasion: "Promovare",
    season: "Toamnă",
    likes: 156,
    commission: "200 RON (+10%)",
    timestamp: "Ieri",
    tags: ["#Profesional", "#Sef", "#Promovare", "#Toamna"]
  },
  {
    id: "4",
    creator: "Andrei Vasile",
    category: "Prieteni",
    occasion: "Ziua prieteniei",
    season: "Iarnă",
    likes: 203,
    commission: "95 RON (+10%)",
    timestamp: "Acum 1 zi",
    tags: ["#Prieteni", "#BFF", "#ZiuaPrieteniei", "#Iarna"]
  },
  {
    id: "5",
    creator: "Diana Stan",
    category: "Educațional",
    occasion: "Absolvire",
    season: "Primăvară",
    likes: 67,
    commission: "130 RON (+10%)",
    timestamp: "Acum 2 zile",
    tags: ["#Educațional", "#Student", "#Absolvire", "#Primavara"]
  },
  {
    id: "6",
    creator: "Cristian Mihail",
    category: "Familie",
    occasion: "Botez",
    season: "Vară",
    likes: 198,
    commission: "180 RON (+10%)",
    timestamp: "Acum 3 zile",
    tags: ["#Familie", "#Bebelus", "#Botez", "#Vara"]
  }
];

const Feed = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ["Toate", "Familie", "Romantice", "Profesional", "Prieteni", "Educațional"];

  const filteredGiftBoxes = mockGiftBoxes.filter((box) => {
    const matchesSearch = box.tags.some(tag => 
      tag.toLowerCase().includes(searchQuery.toLowerCase())
    ) || box.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = !selectedCategory || selectedCategory === "Toate" || box.category === selectedCategory;
    
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
                Social{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">Feed</span>
              </h1>
              <p className="text-muted-foreground">
                Explorează gift box-uri create de comunitate
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">{mockGiftBoxes.length} gift box-uri active</span>
            </div>
          </div>

          {/* Search & Filters */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Caută după hashtag sau categorie..."
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

        {/* Gift Boxes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGiftBoxes.map((box) => (
            <Card key={box.id} className="overflow-hidden hover:shadow-glow-primary transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-gradient-primary flex items-center justify-center">
                      <User className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">{box.creator}</p>
                      <p className="text-xs text-muted-foreground">{box.timestamp}</p>
                    </div>
                  </div>
                  <Badge variant="secondary">{box.category}</Badge>
                </div>
              </CardHeader>

              <CardContent className="pt-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Ocazie:</span>
                    <span className="font-medium">{box.occasion}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Anotimp:</span>
                    <span className="font-medium">{box.season}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Comision:</span>
                    <span className="font-semibold text-secondary">{box.commission}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {box.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex justify-between border-t pt-4">
                <Button variant="ghost" size="sm" className="gap-2">
                  <Heart className="h-4 w-4" />
                  <span>{box.likes}</span>
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Share2 className="h-4 w-4" />
                  <span>Partajează</span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredGiftBoxes.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">
              Nu am găsit gift box-uri care să corespundă căutării tale.
            </p>
            <Button variant="outline" className="mt-4" onClick={() => {
              setSearchQuery("");
              setSelectedCategory(null);
            }}>
              Resetează filtrele
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feed;
