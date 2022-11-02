import { ActionTree } from "vuex";
import { RootState } from "../types";
import { Specification } from "./types";

export const actions: ActionTree<Specification, RootState> = {
    loadData(): void {
        console.log("Dataa.....");
    }
}
