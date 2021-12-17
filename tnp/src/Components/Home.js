import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, NavLink, Card, CardImg, NavItem, Button} from 'reactstrap';
import Sir from '../assets/sir.jpeg';
import Tpo from '../assets/TPOlogo.png'
function Home() {
    return (
        <div>
            <Nav style={{backgroundColor:"#189AB4"}}>
                <NavLink><h2 className="h2" style={{color:"white"}}>Training & Placement Cell</h2></NavLink>
                <NavItem><h1 className="h1 mx-auto" style={{paddingLeft:"150px", color:"white"}}>{localStorage.getItem("user")}</h1></NavItem>
            </Nav>
            <Nav style={{color:"black", backgroundColor:"#189AB4"}}>
            <NavItem><NavLink style={{color:"white"}} href="/home">Home</NavLink></NavItem>
                <NavItem><NavLink style={{color:"white"}} href="/yourapp">My Applications</NavLink></NavItem>
                <NavItem><NavLink style={{color:"white"}} href="/listofcomp">Openings</NavLink></NavItem>
                <NavItem><NavLink style={{color:"white"}} href="#" onClick={() => {
                    localStorage.setItem("user", "");
                    localStorage.setItem("password", "");
                    window.open('/login');
                    window.close();
                }}>Log out</NavLink></NavItem>
            </Nav>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-10">
                        <h2 className="h2">Home</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-10 col-md-5">
                    <Card style={{border:"0px"}}>
                        <CardImg className="shadow p-3 mb-5 bg-white rounded" src={Sir} />
                    </Card>
                    </div>
                    <div className="col-10 col-md-6">
                        <h3 className="h3">Message from Director Sir</h3>
                        <p className="mr-auto">
                        Dear Students, I welcome you to Shri Guru Gobind Singhji
                    Institute of Engineering and Technology, Vishnupuri, Nanded.
                    This is one of the prestigious institutes in the state of
                    Maharashtra. This institute provides you the opportunities
                    to empower you with the present technologies. The faculty in
                    the institute is ever enthusiastic to familiarize the
                    students in future technology trends. You are encouraged to
                    harness your inquisitive skills with proactive learning. The
                    purpose of education is to transform proactive learners into
                    self-actualized learners and our experience confirms us that
                    every self-actualized learner flourishes. We exert
                    wholeheartedly to imbibe Universal Human Values in all
                    students. Sincerity, hard work, honesty, and punctuality are
                    the bedrock of sustainable achievements. We impart soft
                    skills such as effective reading, writing and comprehension
                    which are required in all professions. We teach the
                    problem-solving skills along with programming languages to
                    equip our students to face the technological problems of
                    future. Many of our students are entrepreneurs who are ready
                    to support the start-up companies in campus. A significant
                    number of students pursue higher studies in India and
                    abroad. I am in favor of supporting optimal learning
                    experiences in institute. We allow our students to customize
                    their learning experiences to their learning styles within
                    the academic framework of our institute. Students can learn
                    through various mechanisms such classroom, MOOC course,
                    alumni associations, experts in industry, working in
                    laboratories and various others. Engineering is about
                    acquiring profound knowledge. A system of profound knowledge
                    consists of four parts appreciation of system, knowledge
                    about variation, theory of knowledge and psychology. We
                    teach students the necessary mathematical, analytical,
                    computational, and psychological tools for grasping the
                    profound knowledge. A course on engineering exploration is
                    introduced in the first year where students work on active
                    projects. Our motto is to empower students for a journey on
                    the road to knowledge and create a yearning for more
                    knowledge. Wish you all a fruitful Four year (UG) and two
                    year (PG) Transformation to become better engaged
                    professional Wish you all the best.<br></br>
                    Dr. Yashwant V. Joshi , Director
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-10 col-md-6">
                        <h3 className="h3">From the desk of TPO</h3>
                        <p className="mr-auto">
                        Established in 1981, Shri Guru Gobind Singhji Institute of
                    Engineering and Technology (SGGSIET), Nanded, is one of the
                    promising leader institutions in technical education,
                    research and technology transfer. Since its inception, the
                    institute is dedicated to students’ centric learning and
                    believes in pursuing academic excellence. It is having neat,
                    clean and green campus spread over land of 46 acres. It
                    receives 100% grant-in aid from Government of Maharashtra.
                    The Institute has collaborations with a number of premier
                    institutes (including foreign universities) and industries
                    through which substantial opportunities like internships,
                    credit transfers and industry relevant projects. Recently
                    institute has signed MoUs for academic collaboration with
                    Foreign Universities like CUNY CREST and Civil Engineering
                    Department, The City University of New York, USA, Oakland
                    University Michigan, USA, SAI Technologies, USA and
                    University Technology Petronas, Malaysia. MoU’s are also
                    signed with Industry associations such as CMIA, Aurangabad,
                    NIMA, Nashik, industries like TCS, Indus Aviation Pune,
                    ChipSpirit Banglore, Mentor Graphics (A Siemens Business)
                    etc. The institute has established the industry supported
                    laboratories like E-PASS laboratory sponsored by Emerson
                    Automation Solution, Mumbai, Center for VLSI Design and
                    Verification by Mentor Graphics, USA and NVDIA GPU Education
                    Center, Pune giving fillip to the research and skill
                    development activities. The research culture of the
                    institute has been proven through publication in peer
                    reviewed journals and reputed international conferences.
                        </p>
                    </div>
                    <div className="col-10 col-md-5">
                        <Card style={{border:"0px"}}>
                            <CardImg className="shadow p-3 mb-5 bg-white rounded" src = {Tpo} />
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
