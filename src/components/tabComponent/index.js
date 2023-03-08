import {
  Bar,
  ClickedText,
  NotClickedText,
  TabsClicked,
  TabsNotClicked,
} from './styles';
import {SceneMap, TabView} from 'react-native-tab-view';

import React from 'react';
import {TabBarView} from './styles';
import {useState} from 'react';
import {useWindowDimensions} from 'react-native';

const DTTabComponent = _props => {
  const {TabNames, Component} = _props;
  const [index, setIndex] = useState(0);

  const [routes] = useState(TabNames);

  const renderScene = SceneMap(Component);
  const layout = useWindowDimensions();
  const TabBar = () => {
    return (
      <TabBarView>
        <Bar>
          {routes.map((route, i) => {
            if (index === i) {
              return (
                <TabsClicked onPress={() => setIndex(i)} key={i}>
                  <ClickedText>{route.title}</ClickedText>
                </TabsClicked>
              );
            } else {
              return (
                <TabsNotClicked onPress={() => setIndex(i)} key={i}>
                  <NotClickedText>{route.title}</NotClickedText>
                </TabsNotClicked>
              );
            }
          })}
        </Bar>
      </TabBarView>
    );
  };

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={TabBar}
      swipeEnabled={false}
    />
  );
};

export default DTTabComponent;
