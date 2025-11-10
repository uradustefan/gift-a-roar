import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { Gift, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import { useToast } from "@/hooks/use-toast";

const STEPS = [
  {
    id: 1,
    title: "Selectează categoria",
    description: "Pentru cine creezi gift box-ul?",
    options: [
      { value: "familie", label: "👨‍👩‍👧 Familie", description: "Mamă, tată, soră, frate, etc." },
      { value: "romantice", label: "💖 Romantice", description: "Soț, soție, iubit, logodnic, etc." },
      { value: "prieteni", label: "👥 Prieteni", description: "Prieten apropiat, BFF, coleg, etc." },
      { value: "profesional", label: "💼 Profesional", description: "Coleg, șef, client, partener, etc." },
      { value: "educational", label: "🎓 Educațional", description: "Student, profesor, mentor, etc." }
    ]
  },
  {
    id: 2,
    title: "Alege relația specifică",
    description: "Mai exact, cine este persoana?",
    options: {
      familie: [
        { value: "mama", label: "Mama" },
        { value: "tata", label: "Tata" },
        { value: "sora", label: "Soră" },
        { value: "frate", label: "Frate" },
        { value: "bunica", label: "Bunică" },
        { value: "bunic", label: "Bunic" }
      ],
      romantice: [
        { value: "sot", label: "Soț" },
        { value: "sotie", label: "Soție" },
        { value: "iubit", label: "Iubit" },
        { value: "iubita", label: "Iubită" },
        { value: "logodnic", label: "Logodnic" },
        { value: "logodnica", label: "Logodnică" }
      ],
      prieteni: [
        { value: "bff", label: "Best Friend" },
        { value: "coleg-apartament", label: "Coleg de apartament" },
        { value: "prieten-copilarie", label: "Prieten din copilărie" },
        { value: "prieten-apropiat", label: "Prieten apropiat" }
      ],
      profesional: [
        { value: "coleg", label: "Coleg de muncă" },
        { value: "sef", label: "Șef" },
        { value: "client", label: "Client" },
        { value: "partener", label: "Partener de afaceri" }
      ],
      educational: [
        { value: "student", label: "Student" },
        { value: "profesor", label: "Profesor" },
        { value: "mentor", label: "Mentor" },
        { value: "coleg-clasa", label: "Coleg de clasă" }
      ]
    }
  },
  {
    id: 3,
    title: "Ocazia specială",
    description: "Care este motivul cadoului?",
    options: [
      { value: "zi-nastere", label: "🎂 Zi de naștere" },
      { value: "aniversare", label: "💍 Aniversare" },
      { value: "promovare", label: "🎉 Promovare" },
      { value: "absolvire", label: "🎓 Absolvire" },
      { value: "nunta", label: "👰 Nuntă" },
      { value: "botez", label: "👶 Botez" },
      { value: "pensionare", label: "🎊 Pensionare" },
      { value: "multumire", label: "🙏 Mulțumire" }
    ]
  },
  {
    id: 4,
    title: "Anotimpul",
    description: "În ce anotimp va fi oferit cadoul?",
    options: [
      { value: "primavara", label: "🌸 Primăvara", description: "Martie - Mai" },
      { value: "vara", label: "☀️ Vara", description: "Iunie - August" },
      { value: "toamna", label: "🍂 Toamna", description: "Septembrie - Noiembrie" },
      { value: "iarna", label: "❄️ Iarna", description: "Decembrie - Februarie" }
    ]
  },
  {
    id: 5,
    title: "Platformă de partajare",
    description: "Unde vei partaja gift box-ul?",
    options: [
      { value: "facebook", label: "📘 Facebook" },
      { value: "instagram", label: "📷 Instagram" },
      { value: "whatsapp", label: "💬 WhatsApp" },
      { value: "email", label: "📧 Email" },
      { value: "link", label: "🔗 Link direct" }
    ]
  }
];

const Creator = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const { toast } = useToast();

  const currentStepData = STEPS.find(s => s.id === currentStep);
  const progress = (currentStep / STEPS.length) * 100;

  const getStepOptions = () => {
    if (currentStep === 2 && answers[1]) {
      return (currentStepData?.options as any)[answers[1]] || [];
    }
    return currentStepData?.options || [];
  };

  const handleNext = () => {
    if (!answers[currentStep]) {
      toast({
        title: "Selectează o opțiune",
        description: "Te rugăm să alegi o variantă pentru a continua.",
        variant: "destructive"
      });
      return;
    }

    if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    toast({
      title: "Gift Box creat cu succes! 🎁",
      description: "Gift box-ul tău este în curs de procesare. Vei primi un email cu linkul în curând.",
    });
    // Reset form
    setCurrentStep(1);
    setAnswers({});
  };

  const options = getStepOptions();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container px-4 py-8 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Gift Box Creator</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">
            Creează{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Gift Box-ul Perfect
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Răspunde la câteva întrebări simple și vom crea un gift box personalizat pentru tine
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8 space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Pas {currentStep} din {STEPS.length}</span>
            <span>{Math.round(progress)}% completat</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Main Card */}
        <Card className="shadow-strong border-2">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Gift className="h-6 w-6 text-primary" />
              {currentStepData?.title}
            </CardTitle>
            <CardDescription className="text-base">
              {currentStepData?.description}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <RadioGroup
              value={answers[currentStep]}
              onValueChange={(value) => setAnswers({ ...answers, [currentStep]: value })}
              className="space-y-3"
            >
              {Array.isArray(options) && options.map((option: any) => (
                <div key={option.value} className="flex items-start space-x-3">
                  <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                  <Label
                    htmlFor={option.value}
                    className="flex-1 cursor-pointer p-4 rounded-lg border-2 border-border hover:border-primary hover:bg-primary/5 transition-all"
                  >
                    <div className="font-semibold text-base">{option.label}</div>
                    {option.description && (
                      <div className="text-sm text-muted-foreground mt-1">
                        {option.description}
                      </div>
                    )}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            {/* Navigation Buttons */}
            <div className="flex gap-4 pt-4">
              {currentStep > 1 && (
                <Button
                  variant="outline"
                  onClick={handleBack}
                  className="flex-1"
                >
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Înapoi
                </Button>
              )}
              <Button
                variant="default"
                onClick={handleNext}
                className="flex-1"
              >
                {currentStep === STEPS.length ? (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Generează Gift Box
                  </>
                ) : (
                  <>
                    Continuă
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <Card className="text-center p-6 border-2 hover:shadow-glow-primary transition-all">
            <div className="text-4xl mb-2">⚡</div>
            <div className="font-semibold mb-1">Rapid</div>
            <div className="text-sm text-muted-foreground">5 minute pentru completare</div>
          </Card>
          <Card className="text-center p-6 border-2 hover:shadow-glow-secondary transition-all">
            <div className="text-4xl mb-2">🎨</div>
            <div className="font-semibold mb-1">Personalizat</div>
            <div className="text-sm text-muted-foreground">Conținut AI generat special</div>
          </Card>
          <Card className="text-center p-6 border-2 hover:shadow-glow-primary transition-all">
            <div className="text-4xl mb-2">💰</div>
            <div className="font-semibold mb-1">Comision</div>
            <div className="text-sm text-muted-foreground">10% din fiecare vânzare</div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Creator;
