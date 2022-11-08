import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { MediaProvider } from './context/MediaQueryContext'

import AOS from 'aos'
import 'aos/dist/aos.css'
import GlobalStyle from './styles/GlobalStyles'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './services'

AOS.init({
	duration: 600,
	easing: 'ease-out-back',
	delay: 100,
})

const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<MediaProvider>
				<GlobalStyle>
					<App />
				</GlobalStyle>
			</MediaProvider>
		</Provider>
	</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
