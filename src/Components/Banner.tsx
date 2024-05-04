import { motion } from 'framer-motion'

const Banner = () => {
    return (
        <div className="w-full min-h-[600px] mb-[100px] flex items-center justify-between overflow-hidden">
            <motion.section initial={{ x: -700 }} transition={{ duration: 1, ease: 'easeIn' }} animate={{ x: 0 }} className="space-y-5 basis-1/3 h-[300px]">
                <div>
                    <p className="text-5xl font-black">Joshua <br /> Ajiwojuolorun <span className="text-3xl text-small-heading">.</span></p>
                </div>
                <div className="h-[5px] w-[100px] bg-small-heading" />
                <p>
                    <a href="#">Github</a> | <a href="#">Linkedin</a>
                </p>
                <button className="btn-primary">Contact Me</button>
            </motion.section>

            <motion.section initial={{ x: 1700 }} transition={{ duration: 1, delay: 0.1, ease: 'easeIn' }} animate={{ x: 0 }} className="basis-1/3 h-[300px] space-y-3">
                <h1 className="top-header text-left">Introduction</h1>
                <h1 className="heading">Full-Stack <br />Web Developer</h1>
                <h1 className="subtext">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi facilis quas voluptate laborum blanditiis corrupti maiores velit ipsa minus ab itaque.</h1>
                <button className="btn-primary">View Portfolio</button>
            </motion.section>
        </div>
    )
}

export default Banner