import React, { useEffect, useContext, useRef } from "react";
import styled from "styled-components";
import context from "../../contexts";
import playlist from "../../utils/playlist";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const YTPlayer = styled.div`
  width: 100%;
  height: 100%;
`;

const Player = ({ children }) => {
  const { video, dispatch } = useContext(context);
  const ref = useRef({ player: null });

  const onPlayerReady = e => {
    e.target.playVideo();
    dispatch.video({ type: "SETPLAYER", player: e.target });
    ref.current.player = e.target;
  };

  function onPlayerError(e) {
    dispatch.video({ type: "NEXT" });
  }

  useEffect(() => {
    debugger;
    new Promise(resolve => {
      //api load
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = () => resolve(window.YT);
    }).then(YT => {
      //create iframe player
      new YT.Player("player", {
        videoId: playlist[video.currentVideo],
        playerVars: {
          fs: 0,
          loop: 1
        },
        events: {
          onReady: onPlayerReady,
          onError: onPlayerError
        }
      });
    });
  }, []);

  useEffect(() => {
    if (video.player) {
      video.player.loadVideoById(playlist[video.currentVideo]);
    }
  }, [video.currentVideo]);

  return (
    <Wrapper id="player_wrap">
      {children}
      <YTPlayer id="player"></YTPlayer>
    </Wrapper>
  );
};

export default Player;
