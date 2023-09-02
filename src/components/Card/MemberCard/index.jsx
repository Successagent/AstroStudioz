import React, { useState } from 'react'
import AboutCardLogoOne from '../../../assets/Images/img_01-3.jpg'
import AboutCardLogoTwo from '../../../assets/Images/img_02-3.jpg'
import AboutCardLogoThree from '../../../assets/Images/img_03-3.jpg'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa'

function MemberCard() {
  return (
    <>
      <section className="member-card">
        <div>
          <img src={AboutCardLogoOne} alt="" />
          <h3 className="h3">Company History</h3>
          <p className="h5">Web Design</p>
          <div className="membercard-icon-con">
            <div>
              <FaFacebookF
                className="membercard-icons"
                style={{ backgroundColor: '#209ffa' }}
              ></FaFacebookF>
            </div>
            <div>
              <FaTwitter
                className="membercard-icons"
                style={{ backgroundColor: '#ff4328' }}
              ></FaTwitter>
            </div>
            <div>
              <FaLinkedinIn
                className="membercard-icons"
                style={{ backgroundColor: '#fec931' }}
              ></FaLinkedinIn>
            </div>
            <div>
              <FaInstagram
                className="membercard-icons"
                style={{ backgroundColor: '#5f43c5' }}
              ></FaInstagram>
            </div>
          </div>
        </div>
        <div>
          <img src={AboutCardLogoTwo} alt="" />
          <h3 className="h3">Company History</h3>
          <p className="h5">Web Design</p>
          <div className="membercard-icon-con">
            <div>
              <FaFacebookF
                className="membercard-icons"
                style={{ backgroundColor: '#209ffa' }}
              ></FaFacebookF>
            </div>
            <div>
              <FaTwitter
                className="membercard-icons"
                style={{ backgroundColor: '#ff4328' }}
              ></FaTwitter>
            </div>
            <div>
              <FaLinkedinIn
                className="membercard-icons"
                style={{ backgroundColor: '#fec931' }}
              ></FaLinkedinIn>
            </div>
            <div>
              <FaInstagram
                className="membercard-icons"
                style={{ backgroundColor: '#5f43c5' }}
              ></FaInstagram>
            </div>
          </div>
        </div>
        <div>
          <img src={AboutCardLogoThree} alt="" />
          <h3 className="h3">Company History</h3>
          <p className="h5">Web Design</p>
          <div className="membercard-icon-con">
            <div>
              <FaFacebookF
                className="membercard-icons"
                style={{ backgroundColor: '#209ffa' }}
              ></FaFacebookF>
            </div>
            <div>
              <FaTwitter
                className="membercard-icons"
                style={{ backgroundColor: '#ff4328' }}
              ></FaTwitter>
            </div>
            <div>
              <FaLinkedinIn
                className="membercard-icons"
                style={{ backgroundColor: '#fec931' }}
              ></FaLinkedinIn>
            </div>
            <div>
              <FaInstagram
                className="membercard-icons"
                style={{ backgroundColor: '#5f43c5' }}
              ></FaInstagram>
            </div>
          </div>
        </div>
        <div>
          <img src={AboutCardLogoOne} alt="" />
          <h3 className='h3'>Company History</h3>
          <p className="h5">Web Design</p>
          <div className="membercard-icon-con">
            <div>
              <FaFacebookF
                className="membercard-icons"
                style={{ backgroundColor: '#209ffa' }}
              ></FaFacebookF>
            </div>
            <div>
              <FaTwitter
                className="membercard-icons"
                style={{ backgroundColor: '#ff4328' }}
              ></FaTwitter>
            </div>
            <div>
              <FaLinkedinIn
                className="membercard-icons"
                style={{ backgroundColor: '#fec931' }}
              ></FaLinkedinIn>
            </div>
            <div>
              <FaInstagram
                className="membercard-icons"
                style={{ backgroundColor: '#5f43c5' }}
              ></FaInstagram>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MemberCard
