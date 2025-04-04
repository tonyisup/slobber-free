import { HydrateClient } from "@/trpc/server";
import SlobberFree from "@/components/slobber-free";

export default async function Home() {
  return (
    <HydrateClient>
      <SlobberFree />
    </HydrateClient>
  );
}
