import React from 'react'

import { FlatList, StyleSheet, View } from 'react-native'

import TodoList from './TodoList'

const TodoListContainer = props => {
    return (
        <View style={styles.container}>
            <FlatList
                data={props.todos}
                style={styles.lists}
                keyExtractor={item => item.id.toString()}
                renderItem={itemData => (
                    <TodoList
                        itemData={itemData.item}
                        doneBtnClicked={props.doneBtnClicked}
                        editBtnClicked={props.editBtnClicked}
                    />
                )} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    lists: {
        marginBottom: 250,
    },
})

export default TodoListContainer