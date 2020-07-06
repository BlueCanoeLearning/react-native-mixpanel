declare module "react-native-mixpanel" {
    export function getDistinctId(callback: (distinctId: string) => void): void;
    // export function getUserId(callback: (userId: string) => void): void;
    // export function getAnonymousId(callback: (anonymousId: string) => void): void;
    export function sharedInstanceWithToken(token: string): void;
    export function track(event: string): void;
    export function trackWithProperties(event: string, properties: {}): void;
    export function createAlias(id: number): void;
    export function identify(id: string): void;
    export function set(properties: {}): void;
    export function setOnce(properties: {}): void;
}
