import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";

export default function View(){
    return `
    ${Header()}
    ${Hero()}
    ${About()}
    ${Portfolio()}
    ${Contact()}
    ${Footer()}
`
}