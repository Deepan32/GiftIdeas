import Link from "next/link"
import React, { useEffect } from 'react';


export default function Catogories() {
    let white = "text-white bg-purple-600"
    let purple = "text-purple-600 bg-white"
    let temp
    const [openTab, setOpenTab] = React.useState([0]);
    const [tabEnable, setTabEnable] = React.useState(false)
    useEffect(() => {
        temp = white
        white = purple
        purple = temp
    }, [tabEnable, openTab]);
    console.log(typeof (openTab), "TypeofopenTab")
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full">
                    <ul
                        className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                        role="tablist"
                    >
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab.includes(1) && tabEnable
                                        ? white
                                        : purple)
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    // (tabEnable)
                                    setOpenTab(openTab => [...openTab, 1])
                                    // setTabEnable(!tabEnable)
                                    // setOpenTab([openTab.push(1)]);
                                    console.log(openTab, "opentabvalue")
                                    setTabEnable(!tabEnable)
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                <i className="fas fa-space-shuttle text-base mr-1"></i> Tech Savy
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab.includes(2) && tabEnable
                                        ? white
                                        : purple)
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    // (tabEnable)
                                    setOpenTab(openTab => [...openTab, 2])
                                    openTab => new Set(openTab);
                                    // setTabEnable(!tabEnable)
                                    // setOpenTab([openTab.push(1)]);
                                    console.log(openTab, "opentabvalue")
                                    setTabEnable(!tabEnable)
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                <i className="fas fa-space-shuttle text-base mr-1"></i> Tech Savy
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab.includes(3) && tabEnable
                                        ? "text-white bg-purple-600"
                                        : "text-purple-600 bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(openTab => [...openTab, 3])
                                    // setOpenTab([openTab.push(3)]);
                                    console.log(openTab, "opentabvalue")
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            >
                                <i className="fas fa-briefcase text-base mr-1"></i>  Brand Conscious
                            </a>
                        </li>
                        {/* <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 4
                                        ? "text-white bg-purple-600"
                                        : "text-purple-600 bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(4);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            >
                                <i className="fas fa-briefcase text-base mr-1"></i>  Book Worm
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 5
                                        ? "text-white bg-purple-600"
                                        : "text-purple-600 bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(5);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            >
                                <i className="fas fa-briefcase text-base mr-1"></i>  Travel Freek
                            </a>
                        </li> */}
                    </ul>
                    {/* <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">

                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">

                                </div>
                                <div className={openTab === 3 ? "block" : "hidden"} id="link3">

                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}