export type VersionInfo = {
    name: string;
    breakdown: Required<{
        [s in string]: {
            valid: boolean;
        };
    }>
};

export type PartInfo = {
    id: string,
    name: string
}