import React from "react";
import { FiFacebook } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5"
import { PiYoutubeLogoThin } from "react-icons/pi";
import { SlSocialLinkedin, SlArrowRight } from "react-icons/sl";
import page4img1 from "../Image/property-1.jpg"
import page4img2 from "../Image/property-2.jpg"
import page4img3 from "../Image/property-3.jpg"
import page4img4 from "../Image/property-4.jpg"
import page4img5 from "../Image/property-5.jpg"
import page4img6 from "../Image/property-6.jpg"

function Footer() {
    const footerdata1 = [
        {
            icon: <CiLocationOn />,
            iconN: "123 Street, New York, USA"
        },
        {
            icon: <IoCallOutline />,
            iconN: "+919982236403"
        },
        {
            icon: <CiMail />,
            iconN: "fkhan12345609@gmail.com"
        },
    ]
    const footerdata2 = [
        {
            icon: <CiTwitter />,
        },
        {
            icon: <FiFacebook />,
        },
        {
            icon: <PiYoutubeLogoThin />,
        },
        {
            icon: <SlSocialLinkedin />,
        },
    ]
    const footerdata3 = [
        {
            icon: <SlArrowRight />,
            name: "About Us"
        },
        {
            icon: <SlArrowRight />,
            name: "Contact Us"
        },
        {
            icon: <SlArrowRight />,
            name: "Our Services"
        },
        {
            icon: <SlArrowRight />,
            name: "Privacy Policy"
        },
        {
            icon: <SlArrowRight />,
            name: "Terms & Conditions"
        },
    ]
    const footerdata4 = [
        {
            img: `${page4img1}`
        },
        {
            img: `${page4img2}`
        },
        {
            img: `${page4img3}`
        },
        {
            img: `${page4img4}`
        },
        {
            img: `${page4img5}`
        },
        {
            img: `${page4img6}`
        }
    ]
    return (
        <>
            <div className="footer">
                <div className="first">
                    <div className="get">
                        <h1>Get In Touch</h1>
                    </div>
                    <div className="detail">
                        {
                            footerdata1.map((data) => {
                                return (
                                    <>
                                        <div className="full-detail">
                                            <li>{data.icon}</li>
                                            <h4>{data.iconN}</h4>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="icon">
                        {
                            footerdata2.map((data) => {
                                return (
                                    <>
                                        <div className="icons">
                                            <span>{data.icon}</span>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="second">
                    <div className="link">
                        <h1>Quick Links</h1>
                    </div>
                    <div className="second-name">
                        {
                            footerdata3.map((data) => {
                                return (
                                    <>
                                        <div className="icon">
                                            <li>{data.icon}</li>
                                            <h4>{data.name}</h4>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="third">
                    <div className="photo">
                        <h1>Photo</h1>
                    </div>
                    <div className="pic">
                        {
                            footerdata4.map((data) => {
                                return (
                                    <>
                                        <div className="image">
                                            <img src={data.img} alt="House" />
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="four">
                    <div className="news">
                        <h1>Newsletter</h1>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <input type="Email" placeholder="Your email" />
                        <button>Sign Up</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export { Footer }