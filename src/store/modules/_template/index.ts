import { Module, ModuleTree } from 'vuex';
import { IRootState } from '@/store/interfaces';
import { state } from './state';
import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';

const modules: ModuleTree<IRootState> = {};

const root: Module<IRootState, IRootState> = {
  state,
  getters,
  mutations,
  actions,
  modules,
};

export default root;
