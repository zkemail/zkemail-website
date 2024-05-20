
import Hero from './hero/hero'
import Accordion from '../components/Accordion/Accordion';
import PopOut from '../components/PopOut/PopOut';
import VideoCarousel from '../components/VideoCarousel/VideoCarousel';
import { Typography } from '@mui/material';

const faqs = [
  {
    title: 'How do you selectively reveal content in an email ?',
    contents: 'Cryptography is everywhere: every time you connect to a secure site...'
  },
  {
    title: 'How can I do this anonymously',
    contents: 'Authenticate themselves, make confidential transactions on the blockchain, and respect and preserve user privacy.'
  },
  {
    title: 'Why don’t I need to trust you?',
    contents: 'Cryptography is everywhere: every time you connect to a secure site...'
  },
];

const PopOutZKLibraryCards = [
  { label: "ZK Regex Library", url: "https://example.com/1" },
  { label: "halo2 benchmarking browser code", url: "https://example.com/2" },
  { label: "zk psi with grumpkin and hash to curve", url: "https://example.com/3" },
  { label: "zk strings (base64 + pack)", url: "https://example.com/3" },
  { label: "zk rsa", url: "https://example.com/3" },
  { label: "zk variable length sha256", url: "https://example.com/3" },
];

let PopOutZKEmailLibraryCards = [
  { label: "zk-email", url: "https://example.com/1" },
  { label: "ZK Regex UI Tools", url: "https://example.com/2" },
  { label: "DKIM Archive", url: "https://example.com/3" },
  { label: "ZK JWTs", url: "https://example.com/3" },
  { label: "Regex Registry", url: "https://example.com/3" },
  { label: "Ether Email Auth", url: "https://example.com/3" },
];

export default function Home() {
  return (
    <main className="flex bg-white min-h-screen flex-col">
      <Hero/>

      {/* FAQ ACCORDION ON MAIN PAGE */}
      <div className='px-[20px] pt-[100px] z-50 bg-white w-full'>
        <div className='min-h-[200px]'>
          <Typography paddingY='20px' variant='h1' sx={{textAlign:'center'}}>
            Frequently Asked Questions
          </Typography>
          <div className="relative" style={{ width: '80%', margin: '0 auto', padding: '20px', zIndex:'100' }}>
            {faqs.map((faq, index) => (
              <Accordion key={index} title={faq.title} contents={faq.contents} />
            ))}
          </div>
        </div>
      </div>


      {/* LIBRARIES ON MAIN PAGE */}
      <div className="w-full min-h-[400px] relative z-10">
        <div className="text-center py-10 px-4">
          <h1 className="text-4xl sm:text-5xl pb-16 sm:pb-24">Our Libraries</h1>
          <div className="grid grid-cols-2">
            <div>
              <Typography variant='h1' sx={{textAlign:'center'}}>ZK Email Libraries</Typography>
              <p className="w-1/2 justify-center justify-self-center mx-auto py-6 text-[11px]  sm:text-[14px] h-[190px] md:h-[120px]">
                We have several repos within the ZK Email ecosystem. Developers can use these libraries to build their own custom email verification circuits.
              </p>
              <PopOut cards={PopOutZKEmailLibraryCards} toggleName="ZK Email Specific Libraries" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl">ZK Libraries</h1>
              <p className="w-1/2 justify-center justify-self-center mx-auto py-6 text-[11px]  sm:text-[14px] h-[190px]  md:h-[120px]">
                While developing ZK Email we also built these libraries for general use, that can be applied outside of the ZK Email ecosystem
              </p>
              <PopOut cards={PopOutZKLibraryCards} toggleName='General ZK Libraries'/>
            </div>
          </div>
        </div>
      </div>

      {/* VIDEO CAROUSEL ON MAIN PAGE */}
      <div className="w-full py-24">
        <div className="text-center py-10">
          <h1 className="text-5xl">Upcoming & Past Talks</h1>
          <p className="py-4">Meet the team <span className="font-bold">Aayush, Sora, Saleel, Wataru, Aditya and Elo</span>  <br/>
            at one of our upcoming talks or message us if you have any questions!</p>
        </div>
        <div className="h-[430px] w-full mb-10">
          <VideoCarousel />
        </div>
      </div>
    </main>
  );
}

