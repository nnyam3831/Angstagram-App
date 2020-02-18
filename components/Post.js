import React, { useState, createRef } from "react";
import styled from "styled-components";
import { Image, Platform } from "react-native";
import Swiper from "react-native-swiper";
import constants from "../constants";
import { Ionicons } from "@expo/vector-icons";
import { gql } from "apollo-boost";
import { useMutation } from "react-apollo-hooks";
import styles from "../styles";
import * as Animatable from "react-native-animatable";
export const TOGGLE_LIKE = gql`
  mutation toggleLike($postId: String!) {
    toggleLike(postId: $postId)
  }
`;
const Container = styled.View`
  margin-bottom: 40px;
`;
const Header = styled.View`
  padding: 15px;
  padding-left: 10px;
  flex-direction: row;
  align-items: center;
`;
const Touchable = styled.TouchableOpacity``;
const HeaderUserContainer = styled.View`
  margin-left: 10px;
`;
const Bold = styled.Text`
  font-size: 11px;
`;
const Location = styled.Text`
  font-size: 10px;
  font-weight: 100;
`;
const IconsContainer = styled.View`
  flex-direction: row;
  margin-bottom: 5px;

  margin-top: 5px;
`;
const IconContainer = Animatable.createAnimatableComponent(styled.View`
  margin-right: 10px;
`);
const InfoContainer = styled.View`
  margin-right: 10px;
  margin-left: 10px;
`;
const Caption = styled.Text`
  margin: 5px 0px;
`;
const CommentCount = styled.Text`
  opacity: 0.5;
  font-size: 13px;
`;
const Post = ({
  id,
  user,
  location,
  files = [],
  likeCount: likeCountProp,
  caption,
  comments = [],
  isLiked: isLikedProp
}) => {
  const [isLiked, setIsLiked] = useState(isLikedProp);
  const [likeCount, setLikeCount] = useState(likeCountProp);
  const [toggleLikeMutation] = useMutation(TOGGLE_LIKE, {
    variables: {
      postId: id
    }
  });
  const [ref, setRef] = useState(() => createRef());
  const handleLike = async () => {
    if (isLiked === true) {
      setLikeCount(l => l - 1);
    } else {
      setLikeCount(l => l + 1);
    }
    ref.current.bounceIn();
    setIsLiked(p => !p);

    try {
      await toggleLikeMutation();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Container>
      <Header>
        <Touchable>
          <Image
            source={{ uri: user.avatar }}
            style={{ height: 35, width: 35, borderRadius: 20 }}
          />
        </Touchable>
        <Touchable>
          <HeaderUserContainer>
            <Bold style={{ fontWeight: "500" }}>{user.username}</Bold>
            <Location>{location}</Location>
          </HeaderUserContainer>
        </Touchable>
      </Header>
      <Swiper
        paginationStyle={{ position: "absolute", bottom: -25 }}
        dotStyle={{ width: 4, height: 4 }}
        activeDotStyle={{ width: 4, height: 4 }}
        style={{ height: constants.height / 2.5 }}
      >
        {files.map(file => (
          <Image
            style={{ width: constants.width, height: constants.height / 2.5 }}
            key={file.id}
            source={{ uri: file.url }}
          />
        ))}
      </Swiper>
      <InfoContainer>
        <IconsContainer>
          <Touchable onPress={handleLike}>
            <IconContainer ref={ref}>
              <Ionicons
                size={28}
                color={isLiked ? styles.redColor : styles.blackColor}
                name={
                  Platform.OS === "ios"
                    ? isLiked
                      ? "ios-heart"
                      : "ios-heart-empty"
                    : isLiked
                    ? "md-heart"
                    : "md-heart-empty"
                }
              />
            </IconContainer>
          </Touchable>
          <Touchable>
            <IconContainer>
              <Ionicons
                size={28}
                name={Platform.OS === "ios" ? "ios-text" : "md-text"}
              />
            </IconContainer>
          </Touchable>
        </IconsContainer>
        <Touchable>
          <Bold>{`좋아요 ${likeCount}개`}</Bold>
        </Touchable>

        <Caption>
          <Bold style={{ fontSize: 12 }}>{user.username}</Bold> {caption}
        </Caption>
        <Touchable>
          <CommentCount>댓글 보기</CommentCount>
        </Touchable>
      </InfoContainer>
    </Container>
  );
};

export default Post;
