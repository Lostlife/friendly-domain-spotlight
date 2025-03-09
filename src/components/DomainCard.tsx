
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Copy, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface DomainCardProps {
  domain: string;
  email: string;
}

const DomainCard = ({ domain, email }: DomainCardProps) => {
  const { toast } = useToast();
  const [isCopied, setIsCopied] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);
    toast({
      title: "Email copied!",
      description: "The contact email has been copied to your clipboard.",
    });

    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <Card className="w-full max-w-md border-2 border-transparent animated-border shadow-xl">
      <CardHeader className="text-center pb-2">
        <h2 className="text-2xl font-bold gradient-text">Domain For Sale</h2>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center pt-2 pb-6">
          <p className="text-4xl font-bold tracking-tight">{domain}</p>
        </div>
        
        <div className="space-y-4">
          <p className="text-center text-muted-foreground">
            This premium domain is available for immediate purchase.
          </p>
          
          <div className="bg-accent p-4 rounded-lg">
            <p className="text-center font-medium text-sm">
              Contact the owner to discuss pricing and transfer details
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <div className="flex items-center justify-center w-full gap-2 border rounded-lg p-3 bg-muted/30">
          <Mail size={16} className="text-muted-foreground" />
          <span className="text-sm font-medium">{email}</span>
          <Button 
            variant="ghost" 
            size="icon" 
            className="ml-2 h-6 w-6" 
            onClick={copyEmailToClipboard}
          >
            <Copy size={14} />
          </Button>
        </div>
        <Button 
          className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
          onClick={() => window.location.href = `mailto:${email}?subject=Interest in purchasing ${domain}`}
        >
          <Mail className="mr-2 h-4 w-4" /> Contact Owner Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DomainCard;
