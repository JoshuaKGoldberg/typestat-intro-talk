declare const describe: (name: string, group: () => void) => void;
declare const it: typeof describe;

declare const expect: (actual: unknown) => {
    toBe(expected: unknown): void;
};
