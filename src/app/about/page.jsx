import Image from "next/image";
import image from '../../assets/images/Hero.jpg';


const AboutPage = () => {
    return (
        <div>
            <h2>This is about page</h2>
            <Image width={500} height={300} src="https://images.unsplash.com/photo-1658194356755-22109e2c76e6" alt="butterfly"></Image>
            <Image width={500} height={300} src="https://i.ibb.co.com/tpdX57cT/IMG-20211123-204150.jpg" alt="butterfly"></Image>
            <Image width={300} height={300} src="/cartoon.jpg" alt="Cartoon pic"></Image>
            <Image width={500} height={300} src={image} alt="image"></Image>
        </div>
    );
};

export default AboutPage;