export type VersionInfo = {
    name: string;
    breakdown: {
        [s in string]: {
            valid: boolean;
            major?: string;
            minor?: string[];
        };
    }
};

export type PartInfo = {
    id: string,
    name: string
}