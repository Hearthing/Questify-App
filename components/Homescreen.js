import React, { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground, ActivityIndicator } from 'react-native';

import StoreNav from './StoreNav'
import TodoInput from './TodoInput'
import TodoListContainer from './TodoListContainer'
import HomeBtn from './HomeBtn'

import AsyncStorage from '@react-native-async-storage/async-storage'



function HomeScreen({ navigation }) {
    const [todos, setTodos] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const addTodoHandler = (enteredTodo) => {
        setTodos(oldTodo => {
            return [...oldTodo, { id: Date.now().toString(), value: enteredTodo }]
        })
    }

    const doneClickedHandler = (id) => {
        setTodos(oldTodo => {
            return oldTodo.filter(todo => todo.id !== id)
        })
    }

    const editClickedHandler = (id, updatedVal) => {
        setTodos(oldTodo => {
            const newArr = [...oldTodo]
            for (let todo of newArr) {
                if (todo.id === id) {
                    todo.value = updatedVal
                    break
                }
            }
            return newArr
        })
    }

    const getTodos = async () => {
        setIsLoading(true)
        try {
            const savedTodos = await AsyncStorage.getItem('todos')
            return savedTodos ? JSON.parse(savedTodos) : []
        } catch (e) {
            console.log(e)
            setIsLoading(false)
        }
    }

    const saveTodo = async () => {
        try {
            await AsyncStorage.setItem('todos', JSON.stringify(todos))
        } catch (e) {
            console.log(e)

        }
    }

    useEffect(() => {
        getTodos().then(res => {
            setTodos(res)
            setIsLoading(false)
        })
    }, [])

    useEffect(() => {
        saveTodo()
    }, [todos])

    return (
        <>
            <ImageBackground
                style={styles.img}
                source={require('../assets/images/blue12wall.jpg')} >
                <StoreNav navigation={navigation} />
                <HomeBtn navigation={navigation} />
                <TodoInput addBtnClick={addTodoHandler} />
                {isLoading ? <ActivityIndicator size="large" color="#269fe6" /> :
                    <TodoListContainer
                        todos={todos}
                        doneBtnClicked={doneClickedHandler}
                        editBtnClicked={editClickedHandler} />}
            </ImageBackground>
        </>
    )
}

const styles = StyleSheet.create({

    img: {
        flex: 1,
    },

})

export default HomeScreen