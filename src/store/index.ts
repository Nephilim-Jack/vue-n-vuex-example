import {createStore} from "vuex"
import { ItemCard } from "../interfaces";

export interface State {
    debug: boolean;
    items: ItemCard[];
    playerName: string;
    playerClass: string;
    inventorySize: number;
  }

export const store = createStore<State>({
  state(){
    return {
      debug: true,
      items: [],
      playerName: "",
      playerClass: "",
      inventorySize: 0
    }
  },
  mutations: {
    addItem(state, item: ItemCard) {
      state.items.push(item)
      if (state.debug) {console.log(state.items)}
      
    },
    removeItemAt(state, index: number) {
      state.items.splice(index, 1)
      if (state.debug) {console.log(state.items)}
    },
    changePlayerName(state, value: string) {
      state.playerName = value;
      if (state.debug) {console.log(state.playerName)}
    },
    changePlayerClass(state, value: string) {
      state.playerClass = value;
      if (state.debug) {console.log(state.playerClass)}
    },
    changeInventorySize(state, value: number) {
      state.inventorySize = value;
      if (state.debug) {console.log(state.inventorySize)}
    }
  },
  getters: {
    items: state => state.items,
    playerName: state => state.playerName,
    playerClass: state => state.playerClass,
    inventorySize: state => state.inventorySize,
    enableMove: state => {
      if (state.playerName && state.playerClass && state.inventorySize){
        return true;
      }
      return false;
    }
  },
})
