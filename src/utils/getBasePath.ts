export function getBasePath(): string {
    return process.env.NODE_ENV !== 'production' ? "/rgd_demo" : "";
}

export function getFullPath(path: string): string {
    const basePath = getBasePath();
    return `${basePath}${path}`;
}