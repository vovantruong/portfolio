import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ScrollingProvider, Section } from 'react-scroll-section'
import DefaultLayout from './layout/DefaultLayout'
import ThemeAction from './services/ThemeAction'

import AboutMe from './screens/AboutMe/AboutMe'
import Contact from './screens/Contact/Contact'
import Home from './screens/Home/Home'
import Portfolio from './screens/Portfolio/Portfolio'
import Resume from './screens/Resume/Resume'
import Blog from './screens/Blog/Blog'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

const dataScreen = [
	{
		id: 'home',
		component: <Home />,
	},
	{
		id: 'portfolio',
		component: <Portfolio />,
	},
	{
		id: 'about',
		component: <AboutMe />,
	},
	{
		id: 'resume',
		component: <Resume />,
	},
	{
		id: 'blog',
		component: <Blog />,
	},
	{
		id: 'contact',
		component: <Contact />,
	},
]

function App() {
	const darkmode = JSON.parse(localStorage.getItem('dark-mode-enabled')) ? true : false
	if (darkmode) {
		localStorage.setItem('dark-mode-enabled', true)
	}

	const dispatch = useDispatch()

	const themeReducer = useSelector((state) => state.ThemeReducer)

	useEffect(() => {
		const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

		dispatch(ThemeAction.setColor(colorClass))
	}, [dispatch])

	return (
		<BrowserRouter>
			<ScrollingProvider scrollBehavior="smooth">
				<div className={`App ${themeReducer.color ?? ''}`}>
					<Routes>
						<Route
							path="/"
							element={
								<DefaultLayout>
									{dataScreen.map((child, id) => (
										<Section key={id} id={child.id}>
											{child.component}
										</Section>
									))}
								</DefaultLayout>
							}
						/>
					</Routes>
				</div>
			</ScrollingProvider>
            <ScrollToTop />
		</BrowserRouter>
	)
}

export default App
