import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const socials = [
  { icons: <FaGithub />, path: "https://github.com/aymentigui" },
  { icons: <FaLinkedin />, path: "https://www.linkedin.com/in/aimen-abdelghafour-tighiouart-7866a725b/?skipRedirect=true" },
]
const Social = ({
  containerStyles, iconStyles
}: any) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return <Link className={iconStyles} href={social.path} key={index}>
            {social.icons}
        </Link>
      })}
    </div>
  )
}

export default Social
