import { Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useTimeoutFn } from 'react-use'
import Typed from "react-typed"
import Projects from './components/Projects'
export default function App() {
  let [isShowing, setIsShowing] = useState(true)
  let [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 500)

  return (
    <>
    <div className="navbar bg-slate-700">
  <a className="btn btn-ghost normal-case text-xl text-slate-300">The MG</a>
</div>
<Typed
className="text-white"
      strings={[
            "I'm a Full Stack Developer",
            "I Love Software Development",
            "I Love All My Subscribers",
          ]}
          typeSpeed={50}
          backSpeed={100}
          loop
        />
        <div className="avatar">
  <div className="w-24 rounded">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
<Projects/>
</>
  )
}