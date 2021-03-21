import React, { useState } from 'react'
import { StyleSheet, TextInput, View, TouchableOpacity, Image } from 'react-native'


const TodoForm = props => {

    const [inpVal, setInpVal] = useState('')
    const addBtnHandler = () => {
        if (inpVal !== '') {
            props.addBtnClick(inpVal)
            setInpVal('')
        }
    }
    const updateInp = txt => {
        setInpVal(txt)
    }

    const addTodoHandler = (enteredTodo) => {
        setTodos(oldTodo => {
            return [...oldTodo, { id: Date.now().toString, value: enteredTodo }]
        })
    }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.txtinput}
                value={inpVal}
                placeholder="Add your todo here..."
                onChangeText={updateInp}
                addBtnClick={addTodoHandler}
            />
            <TouchableOpacity
                style={styles.touchop}
                onPress={addBtnHandler}
            >
                <Image style={styles.iconimg}
                    source={require('../assets/icons/smallplusicon.png')}
                />
            </TouchableOpacity>
        </View>
    )
}

export default TodoForm

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginVertical: 20,
    },

    txtinput: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '75%',
        marginTop: 50,
        marginLeft: 20,
        fontFamily: 'Georgia'
    },
    iconimg: {
        height: 20,
        width: 35,
        marginLeft: -35,
        marginTop: 50,
        borderRadius: 3,

    },
    touchop: {
        width: '10%'
    }
})
