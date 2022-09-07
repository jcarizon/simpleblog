import React from 'react';
import logo from '../assets/images/logo-footer.png';

const Footer = () => {
    return (
        <footer class="_footer">
            <div class="_big_wrap">
                <div class="clr-bg-dark _bottom">
                    <div class="_wrapper">
                        <div class="_row-column-itemcr footer-row">
                            <div class="_col-ungrow">
                                <a class="footer-logo" href="/">
                                    <img src={ logo } alt="Blog Logo" />
                                </a>
                            </div>
                            <div class="_col-ungrow">
                                <div class="bottom-text">
                                <p class="jp-font">サンプルテキストサンプルテキストサンプルテキスト </p>
                                <p class="jp-font">サンプルテキストサンプルテキスト</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="clr-bg-black txt-center _copyright">
                    <span class="is-block">Copyright©2007-2019 Blog Inc.</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;