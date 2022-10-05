import logo from './image/creative-logo-blue.svg';
import logo2 from './image/creative-logo-white.svg';
import './App.css';
import { FaRegEnvelope,FaFacebookF,FaTwitter,FaLinkedinIn,FaInstagram,FaYoutube,FaWhatsapp,FaAngleRight,FaAngleLeft,FaBinoculars } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import { MdVerified,MdArrowForward } from "react-icons/md";
import { TiStarFullOutline,TiStarHalfOutline   } from "react-icons/ti";
import { Card,Button } from 'react-bootstrap'; 
import card_1 from './image/webdesign-training-institute.jpg'
import card_2 from './image/game-design-training-institute.jpg'
import card_3 from './image/java-training-institute.jpg'
import card_4 from './image/1.jpg'
import card_5 from './image/2.jpg'
import card_6 from './image/3.jpg'

function App() {
  return (
    <div>
      <header>
        <div className="bgcolor">
          <div className="container">
            <div className="top_header d-flex justify-content-spacebetween align-item-center">
              <div className="info d-flex align-item-center"> 
                <div><FaRegEnvelope/></div>
                <div>info@cdmi.in</div>
                <div><MdVerified/></div>
                <div>Verify Certificate</div>
              </div>  
              <div className="contact">
                HAVE ANY QUESTION ? +91 90333 16003
              </div>
              <div className="social d-flex align-item-center">
                <div>
                  <FaFacebookF/>
                </div>
                <div>
                  <FaTwitter/>
                </div>
                <div>
                  <IoLogoGoogleplus/>
                </div>
                <div>
                  <FaLinkedinIn/>
                </div>
                <div>
                  <FaInstagram/>
                </div>
                <div>
                  <FaYoutube/>
                </div>
                <div>
                  <FaWhatsapp/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="logo_header d-flex align-item-center">
            <div className="logo1">
              <img src={logo}></img>
            </div>
            <nav className="nav_menu d-flex justify-content-spacebetween">
              <ul>Home</ul>
              <ul>Courses</ul>
              <ul>College Courses</ul>
              <ul>Activities</ul>
              <ul>Blog</ul>
              <ul>Know us</ul>
              <ul>Get in Touch</ul>
              <ul>Student Zone</ul>
            </nav>
          </div>
        </div>
      </header>
      <main>
        <section>
          <img src={require('./image/Game-Desgine--Devlopment.jpg')} width="100%"></img>
        </section>
        <section className="space">
          <div className="heading">
            <center>
              <h5>CREATIVE COURSE</h5>
              <h2>OFFERED COURSES</h2>
            </center>
          </div>
          <div className="container">
            <div className="card d-flex justify-content-spacebetween">
              <Card style={{ width: '18rem' }} className="card_info">
                <Card.Img variant="top" src={card_1} className="card_img"/>
                <Card.Body>
                  <Card.Title className="cap">Multimedia Courses</Card.Title>
                  <div className="cap_1 d-flex justify-content-spacebetween align-item-center">
                    <Card.Text>
                      <div className="star d-flex">
                        <div><TiStarFullOutline/></div>
                        <div><TiStarFullOutline/></div>
                        <div><TiStarFullOutline/></div>
                        <div><TiStarFullOutline/></div>
                        <div><TiStarHalfOutline/></div>
                      </div>
                    </Card.Text>
                    <Button variant="primary">Know More..!</Button>
                  </div>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }} className="card_info">
                <Card.Img variant="top" src={card_2} className="card_img"/>
                <Card.Body>   
                  <Card.Title className="cap">UI/UX & Graphics Design</Card.Title>
                  <div className="cap_1 d-flex justify-content-spacebetween align-item-center">
                    <Card.Text>
                      <div className="star d-flex">
                        <div><TiStarFullOutline/></div>
                        <div><TiStarFullOutline/></div>
                        <div><TiStarFullOutline/></div>
                        <div><TiStarFullOutline/></div>
                        <div><TiStarHalfOutline/></div>
                      </div>
                    </Card.Text>
                    <Button variant="primary">Know More..!</Button>
                  </div>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }} className="card_info">
                <Card.Img variant="top" src={card_3} className="card_img"/>
                <Card.Body>
                  <Card.Title className="cap">Programming IT</Card.Title>
                  <div className="cap_1 d-flex justify-content-spacebetween align-item-center">
                    <Card.Text>
                      <div className="star d-flex">
                        <div><TiStarFullOutline/></div>
                        <div><TiStarFullOutline/></div>
                        <div><TiStarFullOutline/></div>
                        <div><TiStarFullOutline/></div>
                        <div><TiStarHalfOutline/></div>
                      </div>
                    </Card.Text>
                    <Button variant="primary">Know More..!</Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="card d-flex justify-content-spacebetween">
              <Card style={{ width: '18rem' }} className="card_info">
                <Card.Img variant="top" src={card_4} className="card_img"/>
                <Card.Body>
                  <Card.Title className="cap">Trendy Courses</Card.Title>
                  <div className="cap_1 d-flex justify-content-spacebetween align-item-center">
                    <Card.Text>
                      <div className="star d-flex">
                        <div><TiStarFullOutline/></div>
                        <div><TiStarFullOutline/></div>
                        <div><TiStarFullOutline/></div>
                        <div><TiStarFullOutline/></div>
                        <div><TiStarHalfOutline/></div>
                        </div>
                    </Card.Text>
                    <Button variant="primary">Know More..!</Button>
                  </div>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }} className="card_info">
                <Card.Img variant="top" src={card_5} className="card_img"/>
                <Card.Body>
                  <Card.Title className="cap">Civil-Mech. Engineering</Card.Title>
                  <div className="cap_1 d-flex justify-content-spacebetween align-item-center">
                    <Card.Text>
                      <div className="star d-flex">
                        <div><TiStarFullOutline/></div>
                        <div><TiStarFullOutline/></div>
                        <div><TiStarFullOutline/></div>
                        <div><TiStarFullOutline/></div>
                        <div><TiStarHalfOutline/></div>
                        </div>
                    </Card.Text>
                    <Button variant="primary">Know More..!</Button>
                  </div>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }} className="card_info">
                <Card.Img variant="top" src={card_6} className="card_img"/>
                <Card.Body>
                  <Card.Title className="cap">Business Development</Card.Title>
                  <div className="cap_1 d-flex justify-content-spacebetween align-item-center">
                    <Card.Text>
                      <div className="star d-flex">
                        <div><TiStarFullOutline/></div>
                        <div><TiStarFullOutline/></div>
                        <div><TiStarFullOutline/></div>
                        <div><TiStarFullOutline/></div>
                        <div><TiStarHalfOutline/></div>
                      </div>
                    </Card.Text>
                    <Button variant="primary">Know More..!</Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <center><button className="btn">View All Courses <MdArrowForward/></button></center>
          </div>
        </section>
        <section>
          <div className="poster d-flex">
            <div className="poster_info">
              <h5>ABOUT US</h5>
              <h4>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</h4>
              <p>Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Surat for web design, Game design,Mobile App Development, Game Development ,Video Editing & All types of IT Courses with 8 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.</p>
              <button className="btn">Enroll Now..!   <MdArrowForward/></button>
            </div>
            <div className="poster_video">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/Vnap7ADkQKA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </section>
        <section className="space">
          <div className="counter_bg">
            <img src={require('./image/counter_bg.jpg')}></img>
            <div className="counter_info">
              <div className="container d-flex">
                <div className="counter">
                  <center>
                    <img src={require('./image/counter-icon1.png')}></img>
                    <h3>8000+</h3>
                    <h5>HAPPY STUDENTS</h5>
                  </center>
                </div>
                <div className="counter">
                  <center>
                    <img src={require('./image/counter-icon2.png')}></img>
                    <h3>10+</h3>  
                    <h5>CERTIFICATION APPROVAL
                  </h5></center>
                </div>
                <div className="counter">
                  <center>
                    <img src={require('./image/counter-icon3.png')}></img>
                    <h3>60+</h3>               
                    <h5>CERTIFIED TEACHERS</h5>
                  </center>
                </div>
                <div className="counter">
                  <center>
                    <img src={require('./image/counter-icon4.png')}></img>
                    <h3>4000+</h3>
                    <h5>STUDENTS PLACED</h5>
                  </center>
                </div>
              </div>
            </div>
          </div>          
        </section>
        <section>
          <div className="container">
            <div className="content d-flex">
              <div className="content_info">
                <h5>HAPPY STUDENTS</h5>
                <h2>ALUMNI SPEAK</h2>
                <div className="de1 d-flex align-item-center justify-content-spacebetween">
                  <div>
                    <img src={require('./image/comma.png')}></img>
                  </div>
                  <div className="d-flex">
                    <button><FaAngleLeft/></button>
                    <button><FaAngleRight/></button>
                  </div> 
                </div>  
                <p>I join Creative Design and Multimedia Institute(CDMI) and I learnt about Game Development All Faculties helped me to improve my skills in designing and attended seminars which was useful and supported for job placement with frequent feedback Thank to Creative Design and Multimedia Institute for taking full care of the placement process to getting a suitable and best job for me.</p>
                <div className="student d-flex align-item-center">
                  <div>
                    <img src={require('./image/viral-unity_training_institute_in_surat.jpg')}></img>
                  </div>
                  <div>
                    <h4>Viral Z Patel</h4>
                    <i><span>Game-Developer</span> @ Venture Technology</i>
                  </div>
                </div>
              </div>
              <div className="content_img">
                <img src={require('./image/happy-students.jpg')}></img>
                <div className="design">
                  <img src={require('./image/testimonial_shape.png')}></img>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="space">
          <div className="bgcolor1">
            <div className="container">
              <div className="heading">
                <center>
                  <h5>READ OUR DIFFERENCE</h5>
                  <h2>WHY CHOOSE CREATIVE</h2>
                </center>
              </div>
              <div className="card1 d-flex justify-content-spacebetween">
                <Card style={{ width: '18rem' }} className="card_info1">
                  <div className='ch1'>
                    <img src={require('./image/11.png')}></img>
                  </div>
                  <Card.Body>
                    <Card.Title className="card_title">Industry Experts As Trainers</Card.Title>
                    <Card.Text className="card_text">Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="card_info1">
                  <div className='ch2'>
                    <img src={require('./image/12.png')}></img>
                  </div>
                  <Card.Body>
                    <Card.Title className="card_title">Latest Curriculum</Card.Title>
                    <Card.Text className="card_text">We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time.</Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="card_info1">
                  <div className='ch3'>
                    <img src={require('./image/13.png')}></img>
                  </div>
                  <Card.Body>
                    <Card.Title className="card_title">Latest Technology</Card.Title>
                    <Card.Text className="card_text">We strive to let you have a solid foundational knowledge of technologies shaping the IT World today.</Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="card1 d-flex justify-content-spacebetween">
                <Card style={{ width: '18rem' }} className="card_info1">
                  <div className='ch4'>
                    <img src={require('./image/14.png')}></img>
                  </div>
                  <Card.Body>
                    <Card.Title className="card_title">Interview Assistance</Card.Title>
                    <Card.Text className="card_text">At the end of each training,our training instructor will go through the possible technical questions you may be asked.</Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="card_info1">
                  <div className='ch5'>
                    <img src={require('./image/15.png')}></img>
                  </div>
                  <Card.Body>
                    <Card.Title className="card_title">Free Upgradation</Card.Title>
                    <Card.Text className="card_text">We will be provided free upgradation for any newer version of the course you have.</Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="card_info1">
                  <div className='ch6'>
                    <img src={require('./image/16.png')}></img>
                  </div>
                  <Card.Body>
                    <Card.Title className="card_title">Lifetime Support</Card.Title>
                    <Card.Text className="card_text">We will provide you lifetime support on all the courses you learned from us.</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="space">
            <div className="container">
              <div className="heading">
                <center>
                  <h5>STUDENT PLACEMENT</h5>
                  <h2>OUR RECRUITMENT PARTNERS</h2>
                </center>
              </div>
              <div className="slider d-flex justify-content-spacebetween">
                <div className="slider_img"><img src={require('./image/renowiz.jpg')}></img></div>
                <div className="slider_img"><img src={require('./image/Jn-infotech.png')}></img></div>
                <div className="slider_img"><img src={require('./image/snkalp-design.png')}></img></div>
                <div className="slider_img"><img src={require('./image/mervan1.jpg')}></img></div>
                <div className="slider_img"><img src={require('./image/Woxxin-Solution-Pvt_Ltd_.png')}></img></div>
                <div className="slider_img"><img src={require('./image/webix.png')}></img></div>
              </div>
              <div className="end">
                <h3>Our Demanded Course -</h3>
                <div className="d-flex">
                  <div className="course"><p>3d Game Development Training Institute In Katargam</p></div>
                  <div className="course"><p>Adobe Xd Design Training Institute In Surat</p></div>
                  <div className="course"><p>Latest Technology Course Training Institute In Katargam</p></div>
                  <div className="course"><p>Codeigniter Company In Surat</p></div>
                  <div className="course"><p>Game Development Training Institute</p></div>
                  <div className="course"><p>Advance Wordpress Training Institute In Surat</p></div>
                  <div className="course"><p>Google Sketchup Training Institute In Surat</p></div>
                  <div className="course"><p>Computer Institutes In Katargam</p></div>
                  <div className="course"><p>Angular Js Training Course</p></div>
                  <div className="course"><p>Best Multimedia Training Institute In Surat</p></div>
                  <div className="course"><p>Multimedia Training Course</p></div>
                  <div className="course"><p>Creo Parametrics Training Institute In Surat</p></div>
                  <div className="course"><p>Programming Language Course</p></div>
                  <div className="course"><p>Laravel Training Institute In Katargam</p></div>
                </div>
                <a href='#'>Show More</a>
              </div>
            </div>
        </section>
      </main>
      <footer className="bgcolor">
        <div className="other_info container d-flex">
          <div className="part">
            <div className="logo2">
              <img src={logo2}></img>
            </div>
            <div className="logo1_caption">
              <p>Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.</p>
            </div>
            <div>
              <h3>FOLLOW US ON</h3>
            </div>
            <div className="social1 d-flex align-item-center">
              <div>
                <FaFacebookF/>
              </div>
              <div>
                <FaTwitter/>
              </div>
              <div>
                <IoLogoGoogleplus/>
              </div>
              <div>
                <FaLinkedinIn/>
              </div>
              <div>
                <FaInstagram/>
              </div>
              <div>
                <FaYoutube/>
              </div>
              <div>
                <FaWhatsapp/>
              </div>
            </div>
          </div>
          <div className="part">
            <div className="title">
              <h3>FEATURE LINKS</h3>
            </div>                                                              
            <div><a href="#">About Us</a></div>
            <div><a href="#">Blogs</a></div>
            <div><a href="#">Join Us</a></div>
            <div><a href="#">Company Login</a></div>
            <div><a href="#">Certificate Verification</a></div>
          </div>
          <div className="part">
            <div className="title">
              <h3>TRENDY COURSES</h3>
            </div>                 
            <div><a href="#">Python course training</a></div>
            <div><a href="#">Node JS course training</a></div>
            <div><a href="#">Angular JS course training</a></div>
            <div><a href="#">React JS course training</a></div>
            <div><a href="#">Unity 3D course training</a></div>
            <div><a href="#">Ethical Hacking course training</a></div>
            <div><a href="#">React Native course training</a></div>
            <div><a href="#">Desktop App Development course training</a></div>
            <div><a href="#">Advanced ASP.net development course training</a></div>
          </div>
          <div className="part">
            <div className="title">
              <h3>OUR BRANCHES</h3>
            </div> 
            <div>
              <h3>HEAD OFFICE - YOGICHOWK</h3>
              <p>401-404, 4th Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat</p>
              <p>Mo : <span>+91 90333 16003</span></p>
            </div>
            <div>
              <h3>BRANCH 1 - KATARGAM</h3>
              <p>327-334, 3rd Floor, Laxmi Enclave, Opp. Gajera School, Katargam, Surat</p>
              <p>Mo : <span>+91 90 3333 5009</span></p>
            </div>
            <div>
              <h3>BRANCH 2 - MOTA VARACHHA </h3>
              <p>B 201-203, 2nd Floor, Aditya Complex, VIP Circle, UtranMota Varachha,Surat</p>
              <p>Mo : <span>+91 945 945 9673</span></p>
            </div>
            <button className="d-flex">
              <div><FaBinoculars/></div>
              <div>Get Virtual Tour</div>
            </button>
          </div>
        </div>
        <div className="bgcolor2">
          <div className="container">
            <div className="footer_end">© 2022 All Rights Reserved by Creative Design & Multimedia Institute.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
