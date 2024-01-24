import type { PartInfo, VersionInfo } from "./types/score";

export const parts: PartInfo[] = [
    { id: "flute", name: "Flute" },
    { id: "glokenspiel", name: "Glokenspiel" },
    { id: "violin1", name: "Violin 1" },
    { id: "violin2", name: "Violin 2" },
    { id: "violin3", name: "Violin 3" },
    { id: "violoncello", name: "Violoncello" },
    { id: "contrabass", name: "Contrabass" },
];

export const versions: VersionInfo[] = [
    {
        name: "1[r1]",
        breakdown: {
            "flute": { valid: true },
            "glokenspiel": { valid: true },
            "violin1": { valid: true },
            "violin2": { valid: true },
            "violin3": { valid: true },
            "violoncello": { valid: true },
            "contrabass": { valid: true },
        }
    }
];