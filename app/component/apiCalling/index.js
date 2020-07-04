import React, {useReducer, useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {reducer, initialState} from '@reducer';
import axios from 'axios';
import styles from './style';

export const ApiCalling = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log('state', state);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/3')
      .then((response) => {
        dispatch({type: 'FETCH_SUCCESS', payload: response.data});
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
    </View>
  );
};
