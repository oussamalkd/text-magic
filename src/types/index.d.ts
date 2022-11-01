declare interface Engine {
    id: number,
    label: String
}

declare interface Materials {
    id: number,
    label: String
}

declare interface Color {
    id: number,
    label: String
}

declare interface WheelRims {
    id: number,
    label: String
}

declare interface WheelsType {
    id: number,
    label: String
}

declare interface SignatorOnHood {
    id: number,
    label: String
}

export default interface Specification {
    id: number,
    name: string,
    options?: {
        engine: Engine,
        materials: Materials,
        color: Color,
        wheelRims: WheelRims,
        wheelsType: WheelsType,
        airSuspension: boolean,
        signatorOnHood: SignatorOnHood
    }
}

