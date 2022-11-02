import { GetterTree } from "vuex";
import { RootState } from "../types";
import { Specification } from "./types";

export const getters: GetterTree<Specification, RootState> = {
    getSpecificationInfo(state: Specification): string {
        return `id - ${state.id} \n name - ${state.name}`
    }
}
