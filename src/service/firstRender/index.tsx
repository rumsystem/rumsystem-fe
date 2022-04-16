import { observable } from 'mobx';

const state = observable({
  firstRender: false,
});

export const firstRenderService = {
  state,
};
