import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";

const LazyHero = React.lazy(() => import("./components/Hero"))
const LazyAbout = React.lazy(() => import("./components/About"))
const LazyContact = React.lazy(() => import("./components/Contact"))
const LazyFeedbacks = React.lazy(() => import("./components/Feedbacks"))
const LazyStarsCanvas = React.lazy(() => import('./components/canvas/Stars'))
const LazyTech = React.lazy(() => import("./components/Tech"))
const LazyWorks = React.lazy(() => import("./components/Works"))
const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <React.Suspense fallback="Loading"><LazyHero /></React.Suspense>
          </div>
          <React.Suspense fallback="Loading"><LazyAbout /></React.Suspense>
          {/* <Experience /> */}
          <React.Suspense fallback="Loading"><LazyTech /></React.Suspense>
          <React.Suspense fallback="Loading"><LazyWorks /></React.Suspense>
          <React.Suspense fallback="Loading"><LazyFeedbacks /></React.Suspense>
          <div className="relative z-0">
            <React.Suspense fallback="Loading"><LazyContact /></React.Suspense>
            <React.Suspense fallback="Loading"><LazyStarsCanvas /></React.Suspense>
          </div>

        </div>
      </BrowserRouter>
    </>
  )
}

export default App
