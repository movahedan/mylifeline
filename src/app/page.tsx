import { homepageContent } from "@mylifeline/contents/home-page";
import { Text } from "@mylifeline/ui/atoms";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-1">
      <Text as="p">{homepageContent.title}</Text>
    </div>
  );
}
