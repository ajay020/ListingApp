import React, { useState } from "react";

import Screen from "../components/Screen";
import { FlatList } from "react-native";
import { ListItem } from "../components/lists";
import { ListItemSeprator } from "../components/lists";
import { ListItemDeleteAction } from "../components/lists";

const initialMessages = [
  {
    id: "1",
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: "2",
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

export const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (item) => {
    console.log(item);
    setMessages(messages.filter((msg) => msg.id !== item.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => console.log()}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeprator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: "2",
              title: "T2",
              description: "D2",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
};
