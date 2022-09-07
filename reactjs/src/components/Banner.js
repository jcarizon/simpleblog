import React from 'react';
import bannerimg from '../assets/images/banner/banner1.png';

const Banner = () => {
    return (
        <div class="_banner">
            <div class="_big_wrap">
                <div class="_carousel">
                    <div class="carousel_items">
                        <div class="_row-center items_container active">
                            <figure class="_col _item">
                                <img src={ bannerimg } alt="banner 1" /> 
                                <div class="_wrapper">
                                    <div class="txt-right _banner-content">
                                        <p class="jp-font text_content">
                                            <span>サンプルテキスト</span> <br />
                                            <span>サンプル ルテキスト</span> <br />
                                            <span>サンプルテキスト</span>
                                        </p>
                                        <span class="is-block date">2019.06.19</span>
                                    </div>
                                </div>
                            </figure>
                        </div>
                        <div class="_row-center items_container">
                        <figure class="_col _item">
                            <img src={ bannerimg } alt="banner 2" /> 
                            <div class="_wrapper">
                                <div class="txt-right _banner-content">
                                    <p class="jp-font text_content">
                                        <span>サンプルテキスト</span> <br />
                                        <span>サンプル ルテキスト</span> <br />
                                        <span>サンプルテキスト</span></p>
                                    <span class="is-block date">2019.06.19</span>
                                </div>
                            </div>
                        </figure>
                        </div>
                        <div class="_row-center items_container">
                        <figure class="_col _item">
                            <img src={ bannerimg } alt="banner 3" /> 
                            <div class="_wrapper">
                                <div class="txt-right _banner-content">
                                    <p class="jp-font text_content">
                                        <span>サンプルテキスト</span> <br />
                                        <span>サンプル ルテキスト</span> <br />
                                        <span>サンプルテキスト</span></p>
                                    <span class="is-block date">2019.06.19</span>
                                </div>
                            </div>
                        </figure>
                        </div>
                    </div>
                    <div class="dotted_buttons">
                        <span href="/" class="active"></span>
                        <span href="/" class=""></span>
                        <span href="/" class=""></span>
                    </div>
                    <div class="move">
                        <span href="/" class="prev disabled"></span> 
                        <span href="/" class="next"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;