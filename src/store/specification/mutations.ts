import { MutationTree } from "vuex";
import { Specification } from "./types";

export enum SpecificationMutation {
    SET_NAME = "SET_NAME"
}
export const mutations: MutationTree<Specification> = {
    [SpecificationMutation.SET_NAME] (state, payload: string) {
        state.name = payload
    }
}
