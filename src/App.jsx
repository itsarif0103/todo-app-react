import Todo from "./Components1/Todo"
import Contacts from "./pages/Contacts"
// import Footer from "./components/Footer"
// import Profile from "./components/Profile"
import Routing from "./components/ReactRouter"
import Dummy from './components/dummyMyHook'
import About from "./pages/About"
import { Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import RootLayout from "./Layout/RootLayout"
import ContactLayout from "./Layout/ContactLayout"
import ContactInfo from "./components/ContactInfo"
import ContactForm from "./components/ContactForm"
import NotFound from "./components/NotFound"
import JobsLayout from "./components/JobsLayout"
import JobPages, { jobsLoader } from "./pages/JobPages"
import JobDetails, { jobDetailsLoader } from "./components/JobDetails"
import Error from "./components/Error"

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route  path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactLayout />}>
        <Route path="info" element={<ContactInfo />} />
        <Route path="form" element={<ContactForm />} />
        </Route>
        <Route path="jobs" element={<JobsLayout />} errorElement={<Error />}>
        <Route index element={<JobPages />} loader={jobsLoader}/>
        <Route path=":id" element={<JobDetails/>} loader={jobDetailsLoader} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )

  return(
    <div>
      {/* <Todo /> */}
      {/* <Dummy /> */}
      {/* <Profile />
      <Footer /> */}
      {/* <Routing />
      <div className="container">
      <Routes> */}
        {/* <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} /> */}
      {/* </Routes>
      </div> */}
      <RouterProvider  router={router}/>
      
    </div>
  )
}

export default App