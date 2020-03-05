import React from "react";
import styled from "styled-components";
import { USER_FRAGMENT, POST_FRAGMENT } from "../../fragment";
import { useQuery } from "react-apollo-hooks";
import { gql } from "apollo-boost";
import { ScrollView } from "react-native-gesture-handler";
import Loader from "../../components/Loader";
import UserProfile from "../../components/UserProfile";

export const ME = gql`
  {
    me {
      user {
        id
        avatar
        username
        fullName
        amIFollowing
        itsMe
        bio
        followingCount
        followersCount
        postCount
      }
      posts {
        id
        location
        caption
        user {
          id
          avatar
          username
        }
        files {
          id
          url
        }
        likeCount
        isLiked
        comments {
          id
          text
          user {
            id
            username
          }
        }
      }
    }
  }
`;

const Text = styled.Text``;

export default ({ navigation }) => {
  const { loading, data, refetch } = useQuery(ME);
  const { user } = data.me;
  const { posts } = data.me;

  return (
    <ScrollView>
      {loading ? <Loader /> : data && data.me && <UserProfile {...user} posts={posts.reverse()} />}
    </ScrollView>
  );
};
