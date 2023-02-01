import React, { useEffect } from 'react'
import List from '../src/components/List'

import "../src/style/style.css"
import "../src/style/tablet.css"



export default function MyApp({ Component, pageProps }) {
useEffect(() => {
	console.log(List)


}, [])

	return(
		<div className="intro">
			<div className="intro__media">
			<video style={{minWidth: "100vw", minHeight: "100vh", boxSizing: "content-box"}} src="https://dl.dropboxusercontent.com/s/933i7ei5aijubzt/technology_-_17076-_Original.mp4?dl=0" className="inro__media-video" autoPlay muted loop ></video>
			</div>
			<div className="intro__content">
				<Component {...pageProps} />
			</div>
		</div>
	) 
 }

