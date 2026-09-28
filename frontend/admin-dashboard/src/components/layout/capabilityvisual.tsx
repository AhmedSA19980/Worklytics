import { CapabilityVisualType } from "@/types/CapabilityVisual";
import { BellRing, Sparkles } from "lucide-react";
import { FoundationVisual } from "./foundationvisual";
import { PerformanceVisual } from "./performancevisual";
import { IntelligenceVisual } from "./intelligencevisual";
import { ActionVisual } from "./actionvisual";

export function CapabilityVisual({
  type,
}: CapabilityVisualType) {

  switch(type){
    case "foundation":
      return <FoundationVisual/>;
    case "performance":
        return <PerformanceVisual/>
    case "intelligence":
      return <IntelligenceVisual />
    case "action":
      return <ActionVisual/>  
    default:
    return null;
  }
}
