import ReactDOM from 'react-dom/client'
import App from './App'
// react-router-dom 라이브러리로부터 BrowserRouter 컴포넌트 함수를 임포트한다.
import { BrowserRouter } from 'react-router-dom'

/** ★★ CPR 임포트 : createStore, Provider, rootReducer */
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./modules";

/** 스토어생성 : 파라미터에 루트리듀서 넣어서 연결 */
const store = createStore(rootReducer);
// console.log(store.getState()) // store 조회하는 방법

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  // App을 BrowserRouter로 감싸면 라우터를 사용할 수 있게 된다.
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
