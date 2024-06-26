import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = () => {

const links = [
    {
        id: 1,
        child: (
            <>
            LinkedIn <FaLinkedin size={30} />
            </>
        ),
        href: 'https://www.linkedin.com/in/rami-group-25908b241/',
        style: 'rounded-tr-md'
    },
    // {
    //     id: 2,
    //     child: (
    //         <>
    //         GitHub <FaGithub size={30} />
    //         </>
    //     ),
    //     href: 'https://github.com/Kronium345',
    // },
    // {
    //     id: 2,
    //     child: (
    //         <>
    //         Mail <HiOutlineMail size={30} />
    //         </>
    //     ),
    //     href: 'mailto: awolowodaniel@yahoo.ie',
    // },
    {
        id: 2,
        child: (
            <>
            Twitter <FaTwitter size={30} />
            </>
        ),
        href: 'https://twitter.com/group_rami',
    },
    // {
    //     id: 3,
    //     child: (
    //         <>
    //         Resume <BsFillPersonLinesFill size={30} />
    //         </>
    //     ),
    //     href: '/Daniel Awolowo - CV (1) (1).pdf',
    //     style: 'rounded-br-md',
    //     download: true,
    // }
];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>

        {links.map(({id, child, href, style, download }) => (
            // eslint-disable-next-line
            <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]" + " " + style}><a href={href} className="flex justify-between items-center w-full text-white" download={download} target="_blank" rel="noreferrer">{child}</a></li>
        ))}
        </ul>
    </div>
  )
}

export default SocialLinks