
import DomainCard from "@/components/DomainCard";
import Features from "@/components/Features";
import BackgroundAnimation from "@/components/BackgroundAnimation";

const Index = () => {
  const domainName = "aiagentshub.site";
  const contactEmail = "akumflare@gmail.com";
  
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
      <BackgroundAnimation />
      
      <div className="container px-4 py-12 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">
              Premium Domain Opportunity
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Secure this powerful domain name for your AI business or project.
            </p>
          </div>
          
          <DomainCard domain={domainName} email={contactEmail} />
          
          <Features />
          
          <footer className="mt-16 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Index;
