export interface Specification {
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
