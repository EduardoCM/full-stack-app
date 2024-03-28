import { Route, Routes } from "react-router-dom"
import { Inicio } from "../components/Inicio"
import { Tierra } from "../components/tierra"
import { Agua } from "../components/Agua"
import { Fuego } from "../components/Fuego"
import { Aire } from "../components/Aire"
import SignInSide from "../components/SignInSide"




export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<SignInSide/>} />
            <Route path="/home" element={<Inicio />} />
            <Route path="/tierra" element={<Tierra />} />
            <Route path="/agua" element={<Agua />} />
            <Route path="/fuego" element={<Fuego />} />
            <Route path="/aire" element={<Aire />} />
        </Routes>
    )
}