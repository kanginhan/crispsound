import React, { createContext, useReducer } from "react";
import playlist from "../utils/playlist";

const Context = createContext();

const widgetReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return {
        ...state,
        [action.name]: !state[action.name]
      };
    default:
      return state;
  }
};

const videoReducer = (state, action) => {
  switch (action.type) {
    case "SETPLAYER":
      return {
        ...state,
        player: action.player
      };
    case "NEXT":
      console.log("next");
      console.log((state.currentVideo + 1 + playlist.length) % playlist.length);
      return {
        ...state,
        currentVideo:
          (state.currentVideo + 1 + playlist.length) % playlist.length
      };
    case "PREV":
      return {
        ...state,
        currentVideo:
          (state.currentVideo - 1 + playlist.length) % playlist.length
      };
    default:
      return state;
  }
};

const Provider = ({ children }) => {
  const [widget, widetDispatch] = useReducer(widgetReducer, {});
  const [video, videoDispatch] = useReducer(videoReducer, {
    currentVideo: 0
  });

  const value = {
    widget,
    video,
    dispatch: {
      widget: widetDispatch,
      video: videoDispatch
    }
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const Consumer = Context.Consumer;

export { Provider, Consumer };

export default Context;
