import { Module } from "vuex";
import { RootState } from "../types";
import { Specification } from "./types";

// test
const state: Specification = {
    id: 1,
    name: "Sport"
}

export const specification: Module<Specification, RootState> = {
    state,
}
