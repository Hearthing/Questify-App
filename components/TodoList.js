import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Pressable, TextInput } from 'react-native'

const TodoList = props => {
    const [isEditMode, setisEditMode] = useState(false)
    const [editedTodo, setEditedTodo] = useState(props.itemData.value)

    const doneBtnClickedHandler = () => {
        props.doneBtnClicked(props.itemData.id)
    }


    const onEditTodoHandler = () => {
        setisEditMode(true)
    }

    const editTodohandler = () => {
        props.editBtnClicked(props.itemData.id, editedTodo)
        setisEditMode(false)
    }

    return (
        <View style={styles.container}>
            {isEditMode ? <TextInput
                value={editedTodo}
                autofocus={true}
                onChangeText={txt => setEditedTodo(txt)}
                style={{ ...styles.todocontainer, ...styles.input }} /> :
                <Pressable style={styles.todocontainer} onLongPress={onEditTodoHandler}>
                    <Text style={styles.txt}>{props.itemData.value}</Text>
                </Pressable>}
            <TouchableOpacity
                style={styles.donebtn}
                onPress={isEditMode ? editTodohandler : doneBtnClickedHandler}>
                <Image source={isEditMode ? require('../assets/icons/unnamed.jpg') :
                    require('../assets/icons/checkmark-24-512.png')}
                    style={styles.img} />
            </TouchableOpacity>
        </View>
    )
}

export default TodoList

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 50,
        marginVertical: 2,
        alignItems: 'center',
    },
    todocontainer: {
        width: '75%',
        padding: 5,
        backgroundColor: 'salmon',
        marginVertical: 3,
        marginLeft: 20,
        borderRadius: 3,
    },
    txt: {

    },

    img: {
        width: 24,
        height: 24,
    },
    donebtn: {
        backgroundColor: 'salmon',
        paddingVertical: 3,
        paddingHorizontal: 8,
        borderRadius: 3,
    },
    input: {
        fontFamily: 'Georgia',
    }
})
