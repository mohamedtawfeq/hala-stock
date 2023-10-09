import './footer.css'
import background from '../../image/footer-background.png'
import instagram from '../../dash-board/icons/instagram.svg'
import facebook from '../../dash-board/icons/facebook.svg'
import logo from '../../image/logo-hala.png'




function Footer() {
    return ( 
        <div >
<footer class="footer">
  <div class="footer__addr">
  <img className='footer__logo' src={logo} alt='product-img' />

    <h2>تابعنا على شبكات التواصل الإجتماعي</h2>
    
    <div className='media'>

        <a href="#">
            <div className='iconmedia' >
            <img className='iconInsta' src={instagram} alt='product-img' />
            instagram
            </div>
        </a>

        <a href="#">
            <div className='iconmedia'>
            <img className='iconface' src={facebook} alt='product-img' />
            facebook
            </div>
        </a>


    </div>
  </div>
  
  <ul class="footer__nav">
    <li class="nav__item">
      <h2 class="nav__title">فئات التسوق</h2>

      <ul class="nav__ul">
        <li>
          <a>ملابس نسائية</a>
        </li>

        <li>
          <a>ملابس رجالبية</a>
        </li>
            
        <li>
          <a>ملابس اطفال</a>
        </li>
            
        <li>
          <a>اكسسوارات</a>
        </li>
            
        <li>
          <a>احذية</a>
        </li>
            
        <li>
          <a>حقائب</a>
        </li>
            
        <li>
          <a>ادوات منزلية</a>
        </li>
      </ul>
    </li>

    <li class="nav__item">
      <h2 class="nav__title">من نحن</h2>

      <ul class="nav__ul">

            
        <li>
          <a href="#">معلومات حول هلا ستوك</a>
        </li>
            
        <li>
          <a href="#">حول منتجاتنا</a>
        </li>
            
        <li>
          <a href="#">اتصل بنا</a>
        </li>
            
        <li>
          <a href="#">كيفية استخدام هلا ستوك</a>
        </li>
            
      </ul>
    </li>
    
  </ul>
  
  <div class="legal">
    <p>&copy;جميع حقوق النشر والتوزيع محفوظة لمنصة هلا ستوك 2023</p>
    
    <div class="legal__links">
      <span>شكرا لزيارتكم موقع هلا ستوك</span>
    </div>
  </div>
</footer>
        </div>
     );
}

export default Footer;