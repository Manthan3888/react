import logo from './logo.svg';
import './App.css';
import { IoFitness } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { GiUpgrade,GiNightSleep } from "react-icons/gi";
import { FaEnvira,FaShoppingCart,FaInstagram,FaTwitter,FaFacebookF,FaPinterest,FaRupeeSign } from "react-icons/fa";
import { AiFillCheckCircle,AiFillAppstore,AiOutlineMenu } from "react-icons/ai";
import { TbHeartRateMonitor,TbPhoto,TbFocus } from "react-icons/tb";
import { SiOxygen } from "react-icons/si";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
function App() {
  return (
    <div>
      <header>
        <div className='bgcolor1'>
          <Container>
            <div className='top_header d-flex justify-content-between align-items-center mt-3 p-3'>
              <div>
                <img src={require('./image/logo.png')}></img>
              </div>
              <nav class="nav">
                <a class="nav-link" href="#">Home</a>
                <a class="nav-link" href="#">About</a>
                <a class="nav-link" href="#">Features</a>
                <a class="nav-link" href="#">Product</a>
                <a class="nav-link" href="#">Contact</a>
              </nav>
              <div className='nav_btn'>
                <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><AiOutlineMenu/></button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                  <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div class="offcanvas-body">
                  
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>
      <main>
        <section className='spacerb'>
          <div className='bgimg mt-2 position-relative'>
            <img src={require('./image/w1.jpg')}></img>
            <div className='bgimg_cap ps-4 position-absolute '>
              <p>All New For A Better You</p>
              <h5>An Experience of new era and Show the world your best and Buy all Originals..</h5>
              <button className='btn mt-2'>Buy Now  <FaShoppingCart/></button>
            </div>
          </div>
        </section>
        <section className='spacerb'>
          <div className='bgcolor1 p-4'>
            <Container>
              <center><div className='head pt-4'><h2>Outstanding Core Features Of The Product</h2></div></center>
              <div className='feature d-flex align-items-center p-4'>
                <div className='feature_img'>
                  <img src={require('./image/w2.jpg')}></img> 
                </div>
                <div className='feature_info mx-4'>
                  <div class="row">
                    <div class="col-sm-12 col-lg-6">
                      <div class="card m-3">
                        <div class="card-body">
                          <div class="card-title d-flex align-items-center">
                            <div className='icon pe-2 fs-3'><IoFitness/></div>
                            <h5>Fitness</h5>
                          </div>
                          <p class="card-text">Fitness that revolves around you. Squat, spin, stride, you name it — Apple Watch has a workout for it. There’s even Tai Chi and Pilates to get your endorphins going. The starting line is on your wrist.This Watch totally use For People</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-12 col-lg-6">
                      <div class="card m-3">
                        <div class="card-body">
                          <div class="card-title d-flex align-items-center">
                            <div className='icon pe-2 fs-3'><GiUpgrade/></div>
                            <h5>Massively Motivating</h5>
                          </div>
                          <p class="card-text">Tap into dozens of workouts. Track all the ways you move. Keep moving with millions of songs on Maxico Music. Series 7 gives it everything. And thanks to the larger display, you’ll see all your progress and metrics more quickly.</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-12 col-lg-6">
                      <div class="card m-3">
                        <div class="card-body">
                          <h5 class="card-title d-flex align-items-center">
                            <div className='icon pe-2 fs-3'><TbTruckDelivery/></div>
                            <h5>Express Delivery</h5>
                          </h5>
                          <p class="card-text">Express delivery is available on in-stock items. Items will automatically ship as they become available. Some items may ship separately to ensure you receive them as quickly as possible. A signature may be required for delivery. </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-12 col-lg-6">
                      <div class="card m-3">
                        <div class="card-body">
                          <h5 class="card-title d-flex align-items-center">
                            <div className='icon pe-2 fs-3'><FaEnvira/></div>
                            <h5>Environment</h5>
                          </h5>
                          <p class="card-text">We take responsibility for the environmental footprint of our products throughout their life cycle. We’re committed to one day sourcing 100% recycled and renewable materials across all of our products and packaging.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </section>
        <section className='spacerb'>
          <div className='bgcolor p-4'>
            <Container>
              <center><div className='head mt-4'><h2>About The Product</h2></div></center>
              <div className='about d-flex align-items-center'>
                <div className='about_img'>
                  <img src={require('./image/w3.webp')}></img>
                </div>
                <div className='about_info p-3'>
                  <h2>Let Your Style Go Brilliant</h2>
                  <p className='my-4'>A smartwatch is a wearable computing device that closely resembles a wristwatch or other time-keeping device. In addition to telling time, many smartwatches are Bluetooth-capable. The watch becomes a wireless Bluetooth adaptor capable of extending the capabilities of the wearer's smartphone to the watch.</p>
                  <div className='about_line d-flex mb-1'>
                    <div className='icon me-2'><AiFillCheckCircle/></div>
                    <h5>Live Chat And Instant Notification</h5>
                  </div>
                  <div className='about_line d-flex mb-1'>
                    <div className='icon me-2'><AiFillCheckCircle/></div>
                    <h5>Install App With Unlimited Features</h5>
                  </div>
                  <div className='about_line d-flex mb-1'>
                    <div className='icon me-2'><AiFillCheckCircle/></div>
                    <h5>Attractive Interface With Many Options</h5>
                  </div>
                  <a href="#" className="btn mt-2">Learn More..!</a>
                </div>
              </div>
            </Container>
          </div>
        </section>
        <section>
          <div className='more_feature bgcolor1'>
            <Container>
              <center><div className='head mt-4'><h2>Features Are Available In The Watch</h2></div></center>
              <div className='feature_watch d-flex'>

                <div className='fe p-3'>
                  <center><div className='icon'><GiNightSleep/></div></center>
                  <h3>Track sleep</h3>
                  <p>With the release of watchOS 7, the Apple Watch added the ability to natively track sleep. You need to setup Bedtime mode, which will put your iPhone and Apple Watch into a wind down mode before bed, and stop you being disturbed by notifications in the night.</p>
                </div>
                <div className='fe p-3'>
                  <center><div className='icon'><TbHeartRateMonitor/></div></center>
                  <h3>Take an ECG reading</h3>
                  <p>One of the big new features introduced through the Series 4 was the ability to take an electrocardiogram (ECG).It's an important feature that can help detect if you've got atrial fibrillation, so it's worth checking out at least once.</p>
                </div>
                <div className='fe p-3'>
                  <center><div className='icon'><SiOxygen/></div></center>
                  <h3>Measure your blood oxygen</h3>
                  <p>If you’re the owner of an Maxico Watch Series 6 or Series 7, you can take advantage of its SpO2 sensor to check your blood oxygen levels. Open the Blood Oxygen app on the Series 6 or 7 and follow the instructions to take a spot check.</p>
                </div>
                <div className='fe p-3'>
                  <center><div className='icon'><AiFillAppstore/></div></center>
                  <h3>Reorganize your apps</h3>
                  <p>You can keep the old honeycomb grid (shown above) if you want, and if you do choose that way, know that it's much easier to fire up the companion app, head over to App Layout and organise it all there, instead of on the watch itself.</p>
                </div>
                <div className='fe p-3'>
                  <center><div className='icon'><TbFocus/></div></center>
                  <h3>Stay focused</h3>
                  <p>The new Focus mode is all about filtering out the distractions that are getting away of your productivity or even making sure you get an uninterrupted sleep. The idea is that you can set up Focus profiles to make sure your Watch recognises the times when you need to focus. </p>
                </div>
                <div className='fe p-3'>
                  <center><div className='icon'><TbPhoto/></div></center>
                  <h3>Share photos</h3>
                  <p>A large share of the new features introduced with watchOS 8 were geared to improving how the Watch handles photos and what you can do with them. It revamped the Photos app to make it easier to view images and it also made it much easier to share photos.</p>
                </div>
                </div>
              
              <center><a href="#" className='btn mt-2'>More Features...</a></center>
            </Container>
          </div>  
        </section>
        <section className='spacer'>
          <div className='bgcolor p-5'>
            <Container>
              <center><div className='head my-4 '><h2>Types of Watch</h2></div></center>
              <div className='row justify-content-between'>
                <div className='col-lg-5 col-sm-12'>
                  <div class="card m-3">
                    <img src={require('./image/w3.jpg')} class="card-img-top"></img>
                    <div class="card-body">
                      <h5 class="card-title">Maxico Series 3</h5>
                      <p class="card-text"><FaRupeeSign/> 22,400</p>
                      <a href="#" class="btn">Add Cart      <FaShoppingCart/></a>
                    </div>
                  </div>
                </div>
                <div className='col-5 col-lg-5 col-sm-12'>
                  <div class="card m-3">
                    <img src={require('./image/w4.jpg')} class="card-img-top"></img>
                    <div class="card-body">
                      <h5 class="card-title">Maxico Series 4</h5>
                      <p class="card-text"><FaRupeeSign/> 28400</p>
                      <a href="#" class="btn">Add Cart  <FaShoppingCart/></a>
                    </div>
                  </div>
                </div>
                <div className='col-5 col-lg-5 col-sm-12'>
                  <div class="card m-3">
                    <img src={require('./image/w5.webp')} class="card-img-top"></img>
                    <div class="card-body">
                      <h5 class="card-title">Maxico Series 5</h5>
                      <p class="card-text"><FaRupeeSign/> 37000</p>
                      <a href="#" class="btn">Add Cart  <FaShoppingCart/></a>
                    </div>
                  </div>
                </div>
                <div className='col-5 col-lg-5 col-sm-12'>
                  <div class="card m-3">
                    <img src={require('./image/w6.jpeg')} class="card-img-top"></img>
                    <div class="card-body">
                      <h5 class="card-title">Maxico Series 6</h5>
                      <p class="card-text"><FaRupeeSign/> 69000</p>
                      <a href="#" class="btn">Add Cart  <FaShoppingCart/></a>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </section>
      </main>
      <footer>
        <div className='social bgcolor1 spacert p-4'>
          <Container>
            <h2>Follow Us</h2>
            <div className='social_icon d-flex justify-content-center'>
              <div className='icon'><FaFacebookF/></div>
              <div className='icon'><FaTwitter/></div>
              <div className='icon'><FaInstagram/></div>
              <div className='icon'><FaPinterest/></div>
            </div>
          </Container>
        </div>
        <div className='footer bgcolor p-4'>
          <Container>
            <p>© 2022 All Rights Reserved by Maxico Smart Watch.</p>
          </Container>
        </div>
      </footer>
    </div>
  );
}

export default App;
