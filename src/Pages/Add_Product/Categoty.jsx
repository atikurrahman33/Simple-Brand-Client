import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import CardShow from "../../All About Card/CardShow";


const CategoryTab = () => {
    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState('car');
    useEffect(() => {
        fetch(`http://localhost:5000/users/${activeTab}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [activeTab])
    console.log(toys);
    useEffect(() => {
        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 1200, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

        });
    }, []);
    useEffect(() => {
        AOS.refresh();
    });
    return (

        <div className="mb-10" data-aos="fade-up"
            data-aos-anchor-placement="top-bottom">
            <Tabs>
                <TabList className="min-w-fit mx-auto font-bold text-center md:text-2xl  mb-10 border">
                    <Tab onClick={() => setActiveTab('Toyota')}>Toyota</Tab>
                    <Tab onClick={() => setActiveTab('Honda')}>Honda</Tab>
                    <Tab onClick={() => setActiveTab('Ford')}>Ford</Tab>
                    <Tab onClick={() => setActiveTab('Chevrolet')}>Chevrolet</Tab>
                    <Tab onClick={() => setActiveTab('Nissan')}>Nissan</Tab>
                    <Tab onClick={() => setActiveTab('BMW')}>BMW</Tab>

                </TabList>

                <TabPanel>
                    <div className="md:grid grid-cols-2 gap-20 px-4 md:px-0">
                        {
                            toys.map(toy => <CardShow toy={toy} key={toy._id}></CardShow>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="md:grid grid-cols-2 gap-20 px-4 md:px-0">
                        {
                            toys.map(toy => <CardShow toy={toy} key={toy._id}></CardShow>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="md:grid grid-cols-2 gap-20 px-4 md:px-0">
                        {
                            toys.map(toy => <CardShow toy={toy} key={toy._id}></CardShow>)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className="md:grid grid-cols-2 gap-20 px-4 md:px-0">
                        {
                            toys.map(toy => <CardShow toy={toy} key={toy._id}></CardShow>)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className="md:grid grid-cols-2 gap-20 px-4 md:px-0">
                        {
                            toys.map(toy => <CardShow toy={toy} key={toy._id}></CardShow>)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className="md:grid grid-cols-2 gap-20 px-4 md:px-0">
                        {
                            toys.map(toy => <CardShow toy={toy} key={toy._id}></CardShow>)
                        }
                    </div>

                </TabPanel>


            </Tabs>
        </div>
    );
};

export default CategoryTab;