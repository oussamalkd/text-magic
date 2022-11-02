import { Module } from "vuex";
import { RootState } from "../types";
import { Specification } from "./types";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";

const state: Specification = {
    id: 1,
    name: "Sport"
}

export const specification: Module<Specification, RootState> = {
    state,
    getters,
    mutations,
    actions
}
