export function setCache(key: string, value: Object) {
    return localStorage.setItem(key, JSON.stringify(value));
}

export function getCache(key: string) { 
    return JSON.parse(localStorage.getItem(key));
}

export function removeCache(key: string) { 
    return localStorage.removeItem(key);
}

export function clearCache() { 
    return localStorage.clear();
}