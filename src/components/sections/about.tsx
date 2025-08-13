import SectionTitle from "@components/ui/sectionTitle"
import SlideUp from "@utils/animations/slideUp"

const About = () => {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row gap-100 align-items-center">
                    {/* START ABOUT IMAGE DESIGN AREA */}
                    <div className="col-lg-5">
                        <SlideUp delay={3}>
                            <div className="about-image-part">
                                <img src="/images/about/about.jpg" alt="About Me" />
                                <div className="about-btn btn-one wow fadeInRight delay-0-4s">
                                    <h6>Available for Work</h6>
                                    <div className="circle pulse color-pulse" />
                                </div>
                                <div className="dot-shape">
                                    <img src="/images/shape/about-dot.png" alt="Shape" />
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* / END ABOUT IMAGE DESIGN AREA */}
                    {/* START ABOUT TEXT DESIGN AREA */}
                    <div className="col-lg-7">
                        <div className="about-content-part rel z-2 rmb-55">
                            <SectionTitle className="mb-35">
                                <SectionTitle.Name>About Me</SectionTitle.Name>
                                <SectionTitle.Title> A passionate <span>web designer</span> turning <span>ideas</span> into visually stunning, user-friendly websites.</SectionTitle.Title>
                                <SectionTitle.Description>Hello! I'm a passionate Digital Designer &amp; Developer with years of work experience. I specialize in creating beautiful and functional digital experiences for modern businesses.</SectionTitle.Description>
                            </SectionTitle>
                            <SlideUp delay={2}>
                                <ul className="list-style-one two-column">
                                    <li>Logo Design</li>
                                    <li>Social Marketing</li>
                                    <li>Branding Identity</li>
                                    <li>Digital Marketing</li>
                                    <li>Web Design</li>
                                    <li>Product Design</li>
                                </ul>
                            </SlideUp>
                        </div>
                    </div>
                    {/* / END ABOUT TEXT DESIGN AREA */}
                </div>
            </div>
        </section>

    )
}

export default About