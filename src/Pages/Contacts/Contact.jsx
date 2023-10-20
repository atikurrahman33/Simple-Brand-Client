import { FaFacebookF } from 'react-icons/fa6';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa';
import { AiOutlineYoutube } from 'react-icons/ai';

const Contact = () => {
    return (
        <div className="py-16">
            <div className="text-center text-3xl font-extrabold">Contact Us Today!</div>
           <div className="grid grid-cols-1 md:grid-cols-2 ">
           <div className="pt-4">
                <p className='text-xl font-bold'>Our Office</p>
                <p>123 Fifth Avenue, Uttora, AB 1160, Dhaka</p>
            </div>
            <div className='pt-5'>
                <p className='text-xl font-bold'>Contact us</p>
                <p>Email: contact@info.com</p>
                <p>Phone:017xxxxx</p>
            </div>
            <div>
                <p className='text-xl font-bold'>Social Media</p>
                <p className="social-icon text-3xl flex gap-3 pt-5 pl-52">
                
                <a href=""> <FaFacebookF></FaFacebookF></a>
                 <a href=""><AiFillTwitterCircle></AiFillTwitterCircle></a>
                 <a href=""><FaInstagram></FaInstagram></a>
                 <a href=""><AiOutlineYoutube></AiOutlineYoutube> </a>


             </p>
            </div>
           </div>
        </div>
    );
};

export default Contact;