function Contact() {
  return (
    <div>
      <div className="flex w-4/5 m-auto gap-10 py-20">
        <div className="w-1/3 h-[28rem] shadow-2xl bg-white flex flex-col items-center">
          <div className="w-4/5 m-auto h-full flex flex-col justify-evenly px-12">
            <div className="flex items-center gap-6">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="20" fill="#DB4444" />
                <path d="M18.5542 14.24L15.1712 10.335C14.7812 9.885 14.0662 9.887 13.6132 10.341L10.8312 13.128C10.0032 13.957 9.76623 15.188 10.2452 16.175C13.1069 22.1 17.8853 26.8851 23.8062 29.755C24.7922 30.234 26.0222 29.997 26.8502 29.168L29.6582 26.355C30.1132 25.9 30.1142 25.181 29.6602 24.791L25.7402 21.426C25.3302 21.074 24.6932 21.12 24.2822 21.532L22.9182 22.898C22.8484 22.9712 22.7565 23.0194 22.6566 23.0353C22.5567 23.0512 22.4543 23.0339 22.3652 22.986C20.1357 21.7021 18.2862 19.8502 17.0052 17.619C16.9573 17.5298 16.9399 17.4272 16.9558 17.3272C16.9717 17.2271 17.02 17.135 17.0932 17.065L18.4532 15.704C18.8652 15.29 18.9102 14.65 18.5542 14.239V14.24Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p className="text-2xl">Call to us</p>
            </div>

            <div className="border-b border-gray-400">
              <p className="text-sm py-2">We are available 24/7, 7days a week</p>
              <p className="text-sm py-2">Phone: +5584999999999</p>
            </div>

            <div className="flex items-center gap-6">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="20" fill="#DB4444" />
                <path d="M10 13L20 20L30 13M10 27H30V13H10V27Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p className="text-2xl">Write to us</p>
            </div>

            <div className="">
              <p className="text-sm py-2">Fill out our form and we will contact you within 24 hours.</p>
              <p className="text-sm py-2">Emails: customer@exclusive.com</p>
              <p className="text-sm py-2">Emails: support@exclusive.com</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-around w-2/3 h-[28rem] bg-white shadow-lg rounded-md p-6">
          <div className="flex gap-4 w-full">
            <input
              type="text"
              className="w-1/3 bg-gray-100 rounded px-4 py-2 text-md placeholder-gray-500 outline-none"
              placeholder="Your Name *"
            />
            <input
              type="email"
              className="w-1/3 bg-gray-100 rounded px-4 py-2 text-md placeholder-gray-500 outline-none"
              placeholder="Your Email *"
            />
            <input
              type="tel"
              className="w-1/3 bg-gray-100 rounded px-4 py-2 text-md placeholder-gray-500 outline-none"
              placeholder="Your Phone *"
            />
          </div>

          <div className="w-full">
            <textarea
              className="w-full h-40 mt-4 bg-gray-100 rounded px-4 py-2 text-md placeholder-gray-500 resize-none outline-none"
              placeholder="Your Message"
            ></textarea>
          </div>

          <div className="w-full flex justify-end mt-4">
            <button className="bg-red-500 hover:bg-red-600 text-md text-white px-6 py-2 rounded">
              Send Message
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact;
