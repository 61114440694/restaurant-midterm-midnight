import React from 'react'
import Footer from '../component/Footer'
import Navbars from '../component/Navbars'
import FormAddAndTable from '../component/FormAddAndTable'

export default function menu() {
    return (
        <>
            <div><Navbars/></div>
            <div><FormAddAndTable/></div>
            <div><Footer/></div>
        </>
    )
}
