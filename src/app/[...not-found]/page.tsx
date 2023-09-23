import { notFoundContent } from "@mylifeline/contents/not-found";
import { Text } from "@mylifeline/ui/atoms";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center flex-1">
      <Text as="p">{notFoundContent.title}</Text>
    </div>
  );
}
