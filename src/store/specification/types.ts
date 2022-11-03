export interface NewOption {
    [key: string]: any,
}

export interface Specification {
    id?: number,
    name?: string,
    engine?: string,
    materials?: string,
    color?: string,
    wheelRims?: string,
    wheelsType?: string,
    airSuspension?: boolean,
    signatorOnHood?: string
    newOption?: Array<NewOption>
}
