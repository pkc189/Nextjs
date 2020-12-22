import Link from 'next/link';
import {MdNotificationsNone} from 'react-icons/md';
import {FaUserCircle} from 'react-icons/fa';
import {BsSearch} from 'react-icons/bs';


const Header = () => {
  return (
    <>
    <div className="header">
    <div className="logo"><Link href="/"><a>EyesOnAI</a></Link></div>
    <div className="input_search"><input type="text" placeholder="Search"/><span><BsSearch/></span></div>
    <div className="profile_section">
    <p className="askquestion"><Link href="/ask"><a>Ask Question</a></Link></p>
    <p className="notifications"><MdNotificationsNone/></p>
    <p className="profile"><FaUserCircle/></p>
    </div>
    </div>


<style jsx>{`

.logo{
  margin:right:30px;font-size:1.7rem
}

.header{
  display: grid;
  grid-template-columns: auto 1fr auto;
  justify-content: space-between;align-items:center;background:#F2F4FB;grid-gap: 1.5rem;box-sizing:border-box;padding:0 10px
}
.input_search{position:relative}

.input_search span{
  position:absolute;right:12px;top:10px;font-size:1rem;color:gray;
}

input[type=text]{
  font-size:1.2rem;color:gray;padding: 0 10px;letter-spacing:0.1rem
}


input{width:100%;box-sizing:border-box;border-radius:50px;border:none;position:relative;height:50px;}

.profile_section{display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-between;align-items:center;grid-gap:0.8rem}

.notifications,.profile{
  color:gray;font-size:1.5rem
}

.profile{
  font-size:2rem
}



  @media only screen and (max-width: 768px) {
  .input_search{display:none}
  .header{
    padding:0 10px;
  }

  input{height:30px}
}

`}</style>



    </>
  )
}


export default Header;