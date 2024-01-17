import { Routes, Route } from "react-router-dom"
import { DefaultLayout } from "../layouts/DefaultLayouts"
import { Home } from "../pages/Home"
import { Shared } from "../pages/Shared"
import { MyDrive } from "../pages/MyDrive"

export function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />} >
                <Route path="/" element={<Home />} />
                <Route path="/shared" element={<Shared />} />
                <Route path="/mydrive" element={<MyDrive />} />
            </Route>
        </Routes>
    )
}