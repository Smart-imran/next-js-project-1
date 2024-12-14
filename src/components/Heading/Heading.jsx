//Tailwind এবং Poppins Font ঠিকভাবে কাজ করার কোড
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '700','900'], // Bold এবং Regular ওজনের জন্য
    display: 'swap', // Fallback font swap করে
}); 

const Heading = () => {
    return (
        <div className="mt-8">
            <h2 className={`${poppins.class} font-bold text-3xl text-center`}>
                This is Heading
            </h2>
            
        </div>
    );
};

export default Heading;
