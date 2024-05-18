// "use client";
// import React, { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';


// const EmailSection = () => {

//     const [emailSubmitted, setEmailSubmitted ] = useState(false);
//     const handleSubmit = async (e) => {
//     e.preventDefault();
//         const data = {
//             email: e.target.email.value,
//             subject: e.target.subject.value,
//             message: e.target.message.value,
//         }
//         const JSONdata = JSON.stringify(data);
//         const endpoint = "/api/send";

//         // from the request for sending data to the server
//         const options = {
//             // The method is POST because we are sending data
//             method: 'POST',
//             // Tell the server we are sending data
//             headers: {
//                 'Content-Type': 'application/json',
//                 },
//                 // Body of the request is the JSON data we created above
//                 body: JSONdata,
//         }

//         const response = await fetch(endpoint, options);
//         const resData = await response.json();

//         if (response.status === 200) {
//             console.log("Message sent");
//             setEmailSubmitted(true);
//         };
//     };
//   return (
//     <section className="grid md:grid-cols-2 my-2 md:my-12 py-24 gap-4 relative">
//         <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
//         <div className="z-10">
//             <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
//             <p className="text-[#ADB7BE] mb-4 max-w-md">
//                 {""}
//                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor veniam enim hic unde cum illo aperiam provident pariatur ducimus fugiat. Voluptas, magni voluptates? Non sed in ratione eveniet quis eos?
//             </p>
//             <div className="socials flex flex-row gap-2">
//             <Link href="github.com">
//                     <Image src="/images/github.png" alt="Linkedin Icon" 
//                      className="pt-0.5"
//                      width={40}
//                      height={40}/>
//                 </Link>
//                 <Link href="Linkedin.com">
//                     <Image src="/images/linkedin.png" alt="Linkedin Icon"
//                      className="" 
//                      width={40}
//                      height={40}
//                     />
//                 </Link>
//             </div>            
//         </div>
//         <div>
//             <form action="" className="flex flex-col" onSubmit={handleSubmit}>
//                 <div className='mb-6'>
//                 <label 
//                 htmlFor="email" 
//                 className="text-white block mb-2 text-sm font-medium">
//                     Your email
//                 </label>
//                 <input 
//                 name="email"
//                 type="email"
//                 id="email"
//                 required
//                 className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
//                 placeholder="pinkyshaikh4488@gmail.com" 
//                 />
//                 </div>
//                 <div className="mb-6">
//                 <label 
//                 htmlFor="subject" 
//                 className="text-white block mb-2 text-sm font-medium">
//                     Subject
//                 </label>
//                 <input 
//                 name="subject"
//                 type="subject"
//                 id="subject"
//                 required
//                 className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
//                 placeholder="Just saying hi" 
//                 />
//                 </div>
//                 <div className="mb-6">
//                     <label htmlFor="message">
//                     </label>
//                         <textarea 
//                         name="message" 
//                         id="message"
//                         className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
//                         placeholder="Let's talk about...."
//                         />
//                 </div>
//                 <button type="submit"
//                 className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">
//                     Send Message
//                 </button>
//                 {
//                     // If the email was submitted successfully, show a success message.
//                     emailSubmitted && (
//                         <p className="text-green-500 text-sm mt-2">
//                             Email sent successfully!
//                         </p>
//                     )
//                 }
//             </form>
//         </div>
//     </section>
//   )
// }

// export default EmailSection;


"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      const resData = await response.json();

      if (response.status === 200) {
        console.log("Message sent");
        setEmailSubmitted(true);
      } else {
        console.error("Error sending message:", resData);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <section className="grid md:grid-cols-2 my-2 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {""}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor veniam enim hic unde cum illo aperiam provident pariatur ducimus fugiat. Voluptas, magni voluptates? Non sed in ratione eveniet quis eos?
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com">
            <Image src="/images/github.png" alt="Linkedin Icon" 
              className="pt-0.5"
              width={40}
              height={40}/>
          </Link>
          <Link href="Linkedin.com">
            <Image src="/images/linkedin.png" alt="Linkedin Icon"
              className="" 
              width={40}
              height={40}
            />
          </Link>
        </div>            
      </div>
      <div>
        <form action="" className="flex flex-col" onSubmit={handleSubmit}>
          <div className='mb-6'>
            <label 
              htmlFor="email" 
              className="text-white block mb-2 text-sm font-medium">
              Your email
            </label>
            <input 
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="pinkyshaikh4488@gmail.com" 
            />
          </div>
          <div className="mb-6">
            <label 
              htmlFor="subject" 
              className="text-white block mb-2 text-sm font-medium">
              Subject
            </label>
            <input 
              name="subject"
              type="subject"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi" 
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message">
            </label>
            <textarea 
              name="message" 
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about...."
            />
          </div>
          <button type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">
            Send Message
          </button>
          {
            // If the email was submitted successfully, show a success message.
            emailSubmitted && (
              <p className="text-green-500 text-sm mt-2">
                Email sent successfully!
              </p>
            )
          }
        </form>
      </div>
    </section>
  )
}

export default EmailSection;
