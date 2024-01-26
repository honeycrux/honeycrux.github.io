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
        name: "1[r2]",
        breakdown: {
            "flute": { valid: true },
            "glokenspiel": { valid: true },
            "violin1": { valid: true, major: "changed measures 35-36, 67-68", minor: "added better instruction on m. 31, added staccato-tenuto on m. 33-34" },
            "violin2": { valid: true, major: "changed measures 33-35, 65-67, 102-103", minor: "added staccato-tenuto marking on m. 33-34" },
            "violin3": { valid: true, major: "changed measures 32, 64, 67, 102-103", minor: "added staccato-tenuto marking on m. 33-34" },
            "violoncello": { valid: true, major: "changed measures 29-32, 61-62, 67", minor: "added staccato-tenuto marking on m. 33, fixed crescendo placement on 107" },
            "contrabass": { valid: true, minor: "added staccato-tenuto marking on m. 33" },
        }
    },
    {
        name: "1[r1]",
        breakdown: {
            "flute": { valid: true, major: "first version" },
            "glokenspiel": { valid: true, major: "first version" },
            "violin1": { valid: false, major: "first version" },
            "violin2": { valid: false, major: "first version" },
            "violin3": { valid: false, major: "first version" },
            "violoncello": { valid: false, major: "first version" },
            "contrabass": { valid: true, major: "first version" },
        }
    },
];