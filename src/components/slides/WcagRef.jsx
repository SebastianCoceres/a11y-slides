import { Badge } from "@/components/ui/badge";

export function WcagRef({ children }) {
  return (
    <Badge variant="info" className="mt-4">
      {children}
    </Badge>
  );
}
