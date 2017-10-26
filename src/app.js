/**
 * created by hushicai on 2017/10/26
 */

import React from 'react';
import {
    FlatList,
    View,
    TouchableOpacity,
    Text,
    ScrollView
} from 'react-native';

const generate = (len = 5000) => {
    let data = [];

    for(let i = 0; i < len; i++) {
        data.push({
            key: i,
            value: 'test'
        });
    }

    return data;
};

let datasource = generate(2000);

class UserItem extends React.PureComponent {
    render() {
        console.log('UserItem render...');
        return (
            <View style={{height: 20, borderBottomWidth: 1}}>
                <Text>{this.props.item.value}</Text>
            </View>
        );
    }
}

class GroupItem extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false
        };
    }
    render() {
        return (
            <View>
                <TouchableOpacity onPress={this._onPress}>
                    <View style={{borderBottomWidth: 1, padding: 10}}>
                        <Text>{this.props.title}</Text>
                    </View>
                </TouchableOpacity>
                {
                    this.state.expanded && (
                        <FlatList
                            style={{backgroundColor: '#f2f2f2'}}
                            data={datasource}
                            renderItem={this._renderItem}
                            keyExtractor={this._KeyExtractor}
                            getItemLayout={this._getItemLayout}
                        />
                    )
                }
            </View>
        );
    }
    _renderItem = ({item, index}) => {
        return (
            <UserItem item={item} />
        );
    };

    _onPress = () => {
        this.setState({
            expanded: !this.state.expanded
        });
    };

    _KeyExtractor = (item) => {
        return 'key_item_' + item.key;
    };

    _getItemLayout = (data, index) => {
        return {length: 20, offset: 20 * index, index};
    };
}

class App extends React.Component {
    render() {
        return (
            <ScrollView>
                <GroupItem title={"click me!"}/>
                <GroupItem title={"click me!"}/>
                <GroupItem title={"click me!"}/>
                <GroupItem title={"click me!"}/>
                <GroupItem title={"click me!"}/>
                <GroupItem title={"click me!"}/>
                <GroupItem title={"click me!"}/>
                <GroupItem title={"click me!"}/>
                <GroupItem title={"click me!"}/>
                <GroupItem title={"click me!"}/>
                <GroupItem title={"click me!"}/>
                <GroupItem title={"click me!"}/>
                <GroupItem title={"click me!"}/>
                <GroupItem title={"click me!"}/>
                <GroupItem title={"click me!"}/>
                <GroupItem title={"click me!"}/>
                <GroupItem title={"click me!"}/>
                <GroupItem title={"click me!"}/>
                <GroupItem title={"click me!"}/>
                <GroupItem title={"click me!"}/>
                <GroupItem title={"click me!"}/>
                <GroupItem title={"click me!"}/>
                <GroupItem title={"click me!"}/>
                <GroupItem title={"click me!"}/>
                <GroupItem title={"click me!"}/>
                <GroupItem title={"click me!"}/>
                <GroupItem title={"click me!"}/>
            </ScrollView>
        );
    }
}

export default App;