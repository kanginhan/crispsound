import React, { useEffect, useContext, useRef } from "react";
import styled from "styled-components";
import context from "../../contexts";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const YTPlayer = styled.div`
  width: 100%;
  height: 100%;
`;

const Player = ({ children }) => {
  const { video, channel, dispatch } = useContext(context);
  const ref = useRef({ player: null, channel: null });

  const onPlayerReady = e => {
    e.target.playVideo();
    dispatch.video({ type: "SETPLAYER", player: e.target });
    ref.current.player = e.target;
  };

  function onPlayerError(e) {
    dispatch.video({ type: "NEXT", playList: channel.playList });
  }

  function onPlayerStateChange(e) {
    if (e.data === window.YT.PlayerState.ENDED) {
      dispatch.video({ type: "NEXT", playList: channel.playList });
    }
  }

  useEffect(() => {
    if (!channel) {
      return;
    }

    ref.current.channel = channel;
    let tag, firstScriptTag;
    new Promise(resolve => {
      //api load
      tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = () => resolve(window.YT);
    }).then(YT => {
      //create iframe player
      new YT.Player("player", {
        videoId: ref.current.channel.playList[video.currentVideo],
        playerVars: {
          fs: 0,
          loop: 1
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
          onError: onPlayerError
        }
      });
    });

    return () => {
      firstScriptTag.parentNode.removeChild(tag);
      window.YT = null;
    };
  }, [channel]);

  useEffect(() => {
    if (video.player) {
      video.player.loadVideoById(
        ref.current.channel.playList[video.currentVideo]
      );
    }
  }, [video.player, video.currentVideo]);

  return (
    <Wrapper id="player_wrap">
      {children}
      <YTPlayer id="player"></YTPlayer>
    </Wrapper>
  );
};

export default Player;
