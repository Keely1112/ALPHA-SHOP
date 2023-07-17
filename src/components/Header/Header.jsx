import logoIcon from '@/assets/icons/logo.svg'
import searchIcon from '@/assets/icons/search.svg'
import cartIcon from '@/assets/icons/cart.svg'
import moonIcon from '@/assets/icons/moon.svg'
import styles from'./Header.module.css'

export default function Header() {
  return (
    <div className={styles.header}>
      <nav className="nav-list">
        <ul>
          <a href='#'><li>男款</li></a>
          <a href='#'><li>女款</li></a>
          <a href='#'><li>最新消息</li></a>
          <a href='#'><li>客制商品</li></a>
          <a href='#'><li>聯絡我們</li></a>
        </ul>
      </nav>
      <div className='nav-logo-icon'>
        <a href='#'><img style={{width: '200px', marginRight: '100px'}}src={logoIcon} /></a>
      </div>
      <div className='nav-icon'>
        <img style={{marginLeft: '20px'}} src={searchIcon} />
        <img style={{marginLeft: '20px'}} src={cartIcon} />
        <img style={{marginLeft: '20px'}} src={moonIcon} />  
      </div>
    </div>
  )
}