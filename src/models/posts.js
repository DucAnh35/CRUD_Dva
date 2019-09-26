import * as service from "../services/posts";
import { message } from "antd";
export default {
  namespace: "product",
  state: {
    loading: false,
    product: []
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === "/") {
          dispatch({
            type: "fetchData"
          });
        }
      });
    }
  },
  effects: {
    *fetchData(action, { call, put }) {
      try {
        const result = yield call(service.getProduct);
        yield put({
          type: "ShowData",
          payload: result.data
        });
      } catch (error) {
        yield put({
          type: "Error"
        });
      }
    },
    *delete(action,{call,put}){
      try{
        const result = yield call(service.removeProduct, action.payload);
        if(result){
          message.warning("Xoas Thanhf Cong");
          yield put({
            type: "DELETE_SUCCESS",
            payload: action.payload
          });
        }
      }catch(error){
        yield put({
          type: "Error"
        });
      }
    },
    *create(action,{call,put}){
      try{
        const result = yield call(service.createProduct, action.payload);
        if(result){
          message.success("Them Thanh Cong");
          yield put({
            type: "CREATE_DATA",
            payload: result.data
          })
        }
      }catch (error){}
    },
    *update(action,{call,put}){
      try{
        const result = yield call(service.updateProduct,action.payload);
        if(result){
          message.success("Update thanh cong");
          yield put({
            type: "UPDATE_DATA",
            payload: result.data
          })
        }
      }catch(error){}
    }
  },
  reducers: {
    ShowData(state, action) {
      return {
        ...state,
        product: action.payload,
      };
    },
    DELETE_SUCCESS(state,action){
      return {
        ...state,
        product: state.product.filter(item => item.id !== action.payload)
      };
    },
    CREATE_DATA(state,action){
      return {
        ...state,
        product: [...state.product,action.payload]
      }
    },
    UPDATE_DATA(state,action){
      return {
        ...state,
        product: state.product.map(item => item.id === action.payload.id ? action.payload : item)
      }
    }
  }
};
