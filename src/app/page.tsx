import { Sparkle } from "@phosphor-icons/react/dist/ssr";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";

export default function Home() {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center gap-8 px-6 py-16">
      <Badge>
        <Sparkle weight="fill" className="h-3.5 w-3.5" />
        Ready to build
      </Badge>

      <div className="max-w-lg space-y-3 text-center">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          This app starts here.
        </h1>
        <p className="text-muted-foreground text-base leading-relaxed">
          Edit src/app/page.tsx to replace this screen with your product.
        </p>
      </div>

      <Card className="w-full max-w-md">
        <CardContent className="flex flex-col gap-3 p-6">
          <Button>Primary action</Button>
          <Button variant="outline">Secondary action</Button>
        </CardContent>
      </Card>
    </main>
  );
}
