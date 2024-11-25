"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input, Button, Link } from "@nextui-org/react";
import { FaDiscord, FaFacebookF, FaGithub, FaLinkedinIn, FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoIosSend } from "react-icons/io";

import { contactSchema } from "@/src/validationSchema";
import { siteConfig } from "@/src/config/site";
import { useSendMessage } from "@/src/hooks/contact.hook";




// TypeScript Type for Form Data
type ContactFormData = z.infer<typeof contactSchema>;

const Footer = () => {

  // React Hook Form Initialization
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });
  
  const {mutate: sendMessage, isPending:sending} = useSendMessage();

  // Form Submission Handler
  const onSubmit = (data: ContactFormData) => {
    sendMessage(data);
  };

  return (
    <footer className="border-t  border-gray-200 bg-gradient-to-t from-blue-400 to-blue-100 text-white px-5">
      {/* Contact Form Section */}
      <div className="pt-20 max-w-screen-xl  mx-auto grid gap-8 sm:grid-cols-2 justify-between">
        {/* Contact Form */}
        <div className="">
          <h2 className="text-2xl font-bold mb-4 text-black">Contact Me</h2>
          <form className="rounded-xl bg-[url('https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg')] bg-cover bg-center" onSubmit={handleSubmit(onSubmit)}>
            <div className="rounded-xl space-y-4 bg-transparent backdrop-blur-md p-6">
              {/* Name Field */}
              <div >
                <Input
                  {...register("name")}
                  className="w-full rounded-lg overflow-hidden text-gray-800"
                  placeholder="Your Name"
                  radius="none"
                  size="lg"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <Input
                  size="lg"
                  {...register("email")}
                  className="w-full rounded-lg overflow-hidden text-gray-800"
                  placeholder="Your Email"
                  radius="none"
                  type="email"

                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  {...register("message")}
                  className="w-full p-3 rounded-lg text-gray-800"
                  placeholder="Your Message"
                  rows={5}
                 />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <Button
              className="w-full text-white bg-blue-500 font-medium hover:bg-blue-600"
                endContent={<IoIosSend size={20} />}
                size="lg"
                type="submit"
                variant="flat"
                isLoading={sending}
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col items-start lg:ms-[120px] space-y-4 text-black">
          <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
          <p className="flex items-center gap-2">
            <MdEmail />
            ubaidullhasan2023@gmail.com</p>
          <p className="flex items-center gap-2">
            <FaPhone />
            +8801401606882</p>
          <p className="flex items-center gap-2">
            <FaLocationDot />
            Gazipur, Dhaka City, Bangladesh
          </p>

          {/* social link */}
          <div className="flex items-center justify-center gap-x-3">
            <Link isExternal aria-label="Twitter" href={siteConfig.links.facebook}>
              <FaFacebookF
                className="text-black hover:text-blue-600 border  p-2 rounded-md"
                size={40}
              />
            </Link>
            <Link isExternal aria-label="Twitter" href={siteConfig.links.linkedin}>
              <FaLinkedinIn
                className="text-black hover:text-blue-600 border p-2 rounded-md"
                size={40}
              />
            </Link>
            <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
              <FaDiscord
                className="text-black hover:text-blue-600 border p-2 rounded-md"
                size={40}
              />
            </Link>
            <Link isExternal aria-label="Github" href={siteConfig.links.github}>
              <FaGithub
                className="text-black hover:text-blue-600 border p-2 rounded-md"
                size={40}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="mt-10 border-t border-blue-300 py-5 text-center text-sm">
        <p>© 2024 Ubaidullah Hasan. All Rights Reserved.</p>
        <p className="mt-1">
          Developed with <span className="text-red-500">♥</span> using Next.js,
          Tailwind CSS, and NextUI.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
