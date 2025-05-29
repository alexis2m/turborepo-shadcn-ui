import { Button } from "@repo/ui/components/ui/button";
import { Logo } from "@repo/ui/components/logo";

export default function Page() {
  return (
    <main className="h-screen items-center flex-col flex align-middle justify-center">
      <Logo />
      <Button variant={"outline"}>Click me</Button>
    </main>
  );
}
