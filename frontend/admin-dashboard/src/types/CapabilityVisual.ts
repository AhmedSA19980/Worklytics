import { capabilities } from "@/data/capabilities"

export type CapabilityVisualType = {
    type: (typeof capabilities)[number]["visual"]
}