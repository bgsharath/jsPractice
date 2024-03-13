import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";

const initialState = {
    postList:[],
    postListError:'',
    loading:true
}

const reduce = (state,action) => {
    switch(action.type){
        case 'POST_SUCCESS':
            return {postList:action.payload, loading:false}
        case 'POST_ERROR':
            return {postListError:action.errorMsg, loading:false}
        default:
            return state
    }
}

export const PostListReducer = () => {
  const [state,dispatch] = useReducer(reduce,initialState)

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        dispatch({type:'POST_SUCCESS', payload:res.data})
      })
      .catch((err) => {
        dispatch({type:'POST_ERROR', errorMsg:err})
      });
  }, []);

  if(state.postListError){
    return <div>Something went wrong</div>
  }

  return (
    <>
    {!state.loading ? state.postList && state.postList.map((item) => <div key={item.id}>{item.title}</div>) : <div>Loading...</div>}
    </>
  );
};
