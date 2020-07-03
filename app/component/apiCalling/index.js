import React, {useReducer, useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import axios from 'axios';
import styles from './style';

const initialState = {
  loading: true,
  error: ' ',
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        post: action.payload,
        error: '',
      };

    case 'FETCH_ERROR':
      return {
        loading: false,
        post: {},
        error: 'something wrong',
      };

    default:
      return state;
  }
};

export const ApiCalling = () => {
  const [data, setData] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log('state', state);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/3')
      .then((response) => {
        dispatch({type: 'FETCH_SUCCESS', payload: response.data});
        setData(state);
        // console.log('payload', payload);
        console.log('data', data);
      })
      .catch((error) => {
        dispatch({type: 'FETCH_ERROR'});
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text>
        {state.loading ? (
          'Loading'
        ) : (
          <Text>
            Title = {state.post.title} body = {state.post.body}
          </Text>
        )}
        {state.error ? state.error : null}
      </Text>

      {/* <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Text> {item.title} </Text>}
      /> */}
    </View>
  );
};
