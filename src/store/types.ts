import { Specification } from "./specification/types";

declare interface Engine {
    id: number,
    label: string
}

declare interface Materials {
    id: number,
    label: string
}

declare interface Color {
    id: number,
    label: string
}

declare interface WheelRims {
    id: number,
    label: string
}

declare interface WheelsType {
    id: number,
    label: string
}


export interface RootState {
    specifications: Array<Specification>
    engines: Engine[]
    materials: Materials[]
    colors: Color[]
    wheelRims: WheelRims[]
    wheelsTypes: WheelsType[]
}
