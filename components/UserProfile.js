import React, { useState } from "react";
import styled from "styled-components";
import { View, Image, Platform, TouchableOpacity } from "react-native";
import styles from "../styles";
import constants from "../constants";
import { Ionicons } from "@expo/vector-icons";
import SquarePhoto from "./SquarePhoto";
import Post from "./Post";

const ProfileHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
`;
const HeaderColumn = styled.View``;

const ProfileStats = styled.View`
  flex-direction: row;
  margin-right: 20px;
`;

const Stat = styled.View`
  align-items: center;
  margin-left: 40px;
`;
const Bold = styled.Text`
  font-size: 15px;
  font-weight: 600;
`;
const StatName = styled.Text`
  margin-top: 5px;
  font-size: 15px;
  color: ${styles.darkGreyColor};
`;
const ProfileMeta = styled.View`
  margin-top: 10px;
  padding-horizontal: 20px;
`;
const Bio = styled.Text``;
const ButtonContainer = styled.View`
  padding-vertical: 10px;
  border: 1px solid ${styles.lightGreyColor};
  flex-direction: row;
  margin-top: 20px;
`;
const Button = styled.View`
  width: ${constants.width / 2};
  align-items: center;
`;

const GridContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;
const UserProfile = ({ avatar, postCount, followersCount, followingCount, bio, fullName, posts }) => {
  const [mode, setMode] = useState("grid");
  const gridMode = () => {
    setMode("grid");
  };
  const listMode = () => {
    setMode("list");
  };

  const GridView = <GridContainer>{posts && posts.map(post => <SquarePhoto key={post.id} {...post} />)}</GridContainer>;
  const ListView = <View>{posts && posts.map(post => <Post key={post.id} {...post} />)}</View>;
  return (
    <View>
      <ProfileHeader>
        <Image style={{ height: 80, width: 80, borderRadius: 40 }} source={{ uri: avatar }} />
        <HeaderColumn>
          <ProfileStats>
            <Stat>
              <Bold>{postCount}</Bold>
              <StatName>게시물</StatName>
            </Stat>
            <Stat>
              <Bold>{followersCount}</Bold>
              <StatName>팔로워</StatName>
            </Stat>
            <Stat>
              <Bold>{followingCount}</Bold>
              <StatName>팔로잉</StatName>
            </Stat>
          </ProfileStats>
        </HeaderColumn>
      </ProfileHeader>
      <ProfileMeta>
        <Bold>{fullName}</Bold>
        <Bio>{bio}</Bio>
      </ProfileMeta>
      <ButtonContainer>
        <TouchableOpacity onPress={gridMode}>
          <Button>
            <Ionicons
              color={mode === "grid" ? styles.black : styles.darkGreyColor}
              size={32}
              name={Platform.OS === "ios" ? "ios-grid" : "md-grid"}
            />
          </Button>
        </TouchableOpacity>
        <TouchableOpacity onPress={listMode}>
          <Button>
            <Ionicons
              color={mode !== "grid" ? styles.black : styles.darkGreyColor}
              size={32}
              name={Platform.OS === "ios" ? "ios-list" : "md-list"}
            />
          </Button>
        </TouchableOpacity>
      </ButtonContainer>
      {mode === "grid" ? GridView : ListView}
    </View>
  );
};

export default UserProfile;
