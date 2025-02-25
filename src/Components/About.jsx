import React from "react";

const About = () => {
    return (
        <section>
            <div className="container mx-auto px-6 space-y-12">
                <div className="text-center space-y-4">
                    <h1 className="text-6xl font-bold text-gray-800">About Us</h1>
                </div>

                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold text-gray-800">Our Story</h2>
                    <p className="text-md text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        At <strong>Career Counseling</strong>, we help you discover your passions and turn them into a meaningful career. Whether you're a student, a professional, or re-entering the workforce, we’re here to guide you every step of the way.
                    </p>
                </div>
                <div className="text-center space-y-8">
                    <h2 className="text-3xl font-bold text-gray-800">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
                            <h3 className="text-2xl font-semibold text-gray-800">Personalized Guidance</h3>
                            <p className="text-md text-gray-600">
                                We tailor our approach to your unique needs and goals, ensuring that every step you take is aligned with your aspirations.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
                            <h3 className="text-2xl font-semibold text-gray-800">Experienced Team</h3>
                            <p className="text-md text-gray-600">
                                Our counselors and coaches bring decades of experience to the table, offering advice that’s grounded in real-world knowledge.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
                            <h3 className="text-2xl font-semibold text-gray-800">Holistic Approach</h3>
                            <p className="text-md text-gray-600">
                                Career success is about more than just skills. We address mental, emotional, and practical aspects to ensure you’re fully prepared.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
                            <h3 className="text-2xl font-semibold text-gray-800">Proven Results</h3>
                            <p className="text-md text-gray-600">
                                We take pride in the success stories of our clients who have gone on to achieve remarkable milestones in their careers.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 py-8 px-6 rounded-lg text-center">
                    <h2 className="text-3xl font-bold text-gray-800">Looking Ahead</h2>
                    <p className="text-md text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        We aim to be a trusted partner in your career journey, staying ahead of trends and evolving to meet your needs. Our vision is to help you unlock your full potential and achieve your career dreams.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
