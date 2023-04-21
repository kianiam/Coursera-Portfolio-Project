import companyLogo from '../icons_assets/Logo.svg'

function Logo() {
    return (
      <div className='item-logo'>
        <img src={companyLogo} alt="Little Lemon logo"/>
      </div>
    );
  }

export default Logo;