import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route } from "react-router-dom"
import { Helmet } from "react-helmet"

import Header from "./Header"
import Footer from "./Footer"
import WorkItem from "./WorkItem"

import "minireset.css"
import "./styles.css"

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>mottox2 ポートフォリオ</title>
        <meta name="description" content="ポートフォリオサイトのサンプルです" />
      </Helmet>
      <div className="hero">
        <h1 className="hero-title">mottox2</h1>
        <p className="hero-description">Web Engineer, Prototyper</p>
      </div>
      <section className="section" id="about">
        <h2 className="section-title">About</h2>
        <p className="aboutDescription">
          React.js、GatsbyJS, Ruby on
          Railsを中心に都内で開発しているエンジニアです。<br />
          世界中の人に使われるプロダクトを作るのが夢です。
        </p>
      </section>
      <section className="section" id="works">
        <h2 className="section-title">Works</h2>
        <ul>
          <WorkItem title="すごいC向けサービス" category="2018 - Frontend" />
          <WorkItem
            title="すごいスマートフォンアプリ"
            category="2017 - Design"
          />
        </ul>
      </section>
    </div>
  )
}

const Contact = () => {
  return (
    <div className="hero">
      <h1 className="hero-title">Contact</h1>
      <p className="hero-description">https://twitter.com/mottox2</p>
    </div>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
