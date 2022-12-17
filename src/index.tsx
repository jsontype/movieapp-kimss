import ReactDOM from 'react-dom/client'
import App from './App'
// react-router-dom 라이브러리로부터 BrowserRouter 컴포넌트 함수를 임포트한다.
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  // App을 BrowserRouter로 감싸면 라우터를 사용할 수 있게 된다.
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
